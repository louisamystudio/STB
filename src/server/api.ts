import express from 'express';
import nodemailer from 'nodemailer';
import { generatePDF } from './pdfGenerator';
import crypto from 'crypto';

const router = express.Router();

// Store verification codes with expiration and attempts
const verificationCodes = new Map<string, {
  code: string,
  expiresAt: Date,
  attempts: number,
  verified: boolean
}>();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

router.post('/send-verification', async (req, res) => {
  const { email, code } = req.body;
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

  verificationCodes.set(email, {
    code,
    expiresAt,
    attempts: 0,
    verified: false
  });

  try {
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

    // Send to client
    await transporter.sendMail({
      from: '"Louis Amy AE Studio" <info@louisamy.com>',
      to: email,
      subject: "Your Signed Contract - Louis Amy AE Studio",
      html: `
        <div style="font-family: 'Montserrat', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="font-family: 'Italiana', serif; color: #333333;">Louis Amy AE Studio</h1>
          <p>Thank you for verifying your agreement. Please find your signed contract attached.</p>
        </div>
      `,
      attachments: [{
        filename: 'LouisAmy-Contract.pdf',
        content: pdfBuffer
      }]
    });

    // Send copy to Louis Amy
    await transporter.sendMail({
      from: '"Louis Amy AE Studio System" <info@louisamy.com>',
      to: "info@louisamy.com", 
      subject: `New Contract Signed - ${email}`,
      html: `
        <div style="font-family: 'Montserrat', sans-serif;">
          <h2>New Contract Signed</h2>
          <p>Client: ${email}</p>
          <p>Signed: ${new Date().toLocaleString()}</p>
          <p>IP Address: ${req.ip}</p>
        </div>
      `,
      attachments: [{
        filename: 'client-contract.pdf',
        content: pdfBuffer
      }]
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ error: 'Verification failed' });
  }
});

export default router;