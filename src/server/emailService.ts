import nodemailer, { createTransport } from 'nodemailer';
import { rateLimit } from 'express-rate-limit';
import sanitizeHtml from 'sanitize-html';
import { Request, Response } from 'express';

const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many verification attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false
});

const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

export const sendVerificationEmail = async (email: string, code: string): Promise<boolean> => {
  try {
    const result = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Your Verification Code - Louis Amy Studio',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Verification Code</h2>
          <p>Your verification code is: <strong>${code}</strong></p>
          <p>This code will expire in 10 minutes.</p>
          <p>If you didn't request this code, please ignore this email.</p>
        </div>
      `
    });

    console.log('Verification email sent:', result.messageId);
    return true;
  } catch (error) {
    const errorDetails = {
      message: error instanceof Error ? error.message : String(error),
      timestamp: new Date().toISOString(),
      email,
      type: 'EMAIL_SEND_ERROR'
    };
    console.error('Email sending error:', errorDetails);

    if (error instanceof Error && error.message.includes('SMTP')) {
      throw new Error('Email service temporarily unavailable');
    }
    throw new Error('Failed to send verification code');
  }
};

export { emailLimiter };