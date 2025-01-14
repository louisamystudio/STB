import express from 'express';
import nodemailer from 'nodemailer';
import { generatePDF } from './pdfGenerator';
import crypto from 'crypto';
import { emailLimiter } from './emailService';

const router = express.Router();

interface VerificationAttempt {
  code: string;
  expiresAt: Date;
  attempts: number;
  verified: boolean;
  hash: string;
}

const verificationCodes = new Map<string, VerificationAttempt>();

// Cleanup expired codes every 5 minutes
setInterval(() => {
  const now = new Date();
  for (const [email, data] of verificationCodes.entries()) {
    if (now > data.expiresAt) {
      verificationCodes.delete(email);
    }
  }
}, 5 * 60 * 1000);

const hashCode = (code: string): string => {
  return crypto.createHash('sha256').update(code).digest('hex');
}

const sendVerificationEmail = async (email: string, code: string): Promise<boolean> => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || '',
        pass: process.env.EMAIL_PASSWORD || ''
      }
    });

    // Log configuration status without exposing credentials
    console.log('Email configuration status:', {
      configured: !!(process.env.EMAIL_USER && process.env.EMAIL_PASSWORD)
    });

    // Verify transporter connection
    await transporter.verify();
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your Verification Code - Louis Amy AE Studio',
      html: `
        <div style="font-family: 'Montserrat', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="font-family: 'Italiana', serif; color: #333333;">Louis Amy AE Studio</h2>
          <p>Your verification code is: <strong>${code}</strong></p>
          <p>This code will expire in 10 minutes.</p>
        </div>
      `
    });
    return true;
  } catch (error) {
    console.error('SMTP connection error:', error);
    return false;
  }
};


router.post('/send-verification', emailLimiter, async (req, res) => {
  const { email, code } = req.body;
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

  if (!email || !code) {
    return res.status(400).json({ error: 'Email and code are required' });
  }

  try {
    const emailSent = await sendVerificationEmail(email, code);
    if (!emailSent) {
      throw new Error('Failed to send email');
    }

    verificationCodes.set(email, {
      code,
      expiresAt,
      attempts: 0,
      verified: false,
      hash: hashCode(code)
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send verification code' });
  }
});

router.post('/verify-code', async (req, res) => {
  const { email, code } = req.body;

  try {
    const verification = verificationCodes.get(email);

    if (!verification || !verification.code) {
      console.error('Verification not found for email:', email);
      return res.status(400).json({ error: 'No verification code found' });
    }

    if (verification.attempts >= 3) {
      verificationCodes.delete(email);
      return res.status(400).json({ error: 'Too many attempts' });
    }

    if (new Date() > verification.expiresAt) {
      verificationCodes.delete(email);
      return res.status(400).json({ error: 'Code expired' });
    }

    verification.attempts++;

    if (verification.code !== code) {
      return res.status(400).json({ error: 'Invalid code' });
    }

    verificationCodes.delete(email);

    // Generate audit trail
    const auditTrail = {
      verifiedAt: new Date().toISOString(),
      ipAddress: req.ip,
      userAgent: req.headers['user-agent']
    };

    const pdfBuffer = await generatePDF({ 
      terms: req.body.terms,
      signature: {
        email,
        timestamp: new Date().toISOString(),
        auditTrail
      }
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ error: 'Verification failed' });
  }
});

export default router;