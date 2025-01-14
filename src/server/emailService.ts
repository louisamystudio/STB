
import nodemailer from 'nodemailer';
import { rateLimit } from 'express-rate-limit';
import sanitizeHtml from 'sanitize-html';

const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: 'Too many verification attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

transporter.verify((error) => {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('Email server ready');
  }
});

export const sendVerificationEmail = async (email: string, code: string) => {
  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_HOST || !process.env.SMTP_PORT) {
      console.error('SMTP configuration incomplete');
      throw new Error('Email configuration is incomplete. Please check your environment variables.');
    }

    if (!email || !code) {
      throw new Error('Email and verification code are required');
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      throw new Error('Invalid email format');
    }
    const result = await transporter.sendMail({
      from: `"Louis Amy AE Studio" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Your Verification Code - Louis Amy AE Studio',
      html: sanitizeHtml(`
        <div style="font-family: 'Montserrat', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="font-family: 'Italiana', serif; color: #333333;">Louis Amy AE Studio</h2>
          <h3>Verification Code</h3>
          <p>Your verification code is: <strong>${code}</strong></p>
          <p>Enter this code to complete your agreement verification.</p>
          <p>This code will expire in 10 minutes.</p>
        </div>
      `)
    });
    console.log('Verification email sent:', result.messageId);
    return true;
  } catch (error) {
    console.error('Email sending error:', {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      email: email
    });
    return false;
  }
};

export { emailLimiter, sendVerificationEmail };
