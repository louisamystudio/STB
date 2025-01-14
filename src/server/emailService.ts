import nodemailer from 'nodemailer';
import { rateLimit } from 'express-rate-limit';

export const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many verification attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false
});

const CODE_EXPIRY_MINUTES = 10;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export const generateVerificationCode = () => {
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + CODE_EXPIRY_MINUTES * 60 * 1000);
  return { code, expiresAt };
};

export const sendVerificationEmail = async (email: string, code: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const result = await transporter.sendMail({
      from: `"Louis Amy AE Studio" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Your Verification Code - Louis Amy AE Studio',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Verification Code</h2>
          <p>Your verification code is: <strong>${code}</strong></p>
          <p>This code will expire in ${CODE_EXPIRY_MINUTES} minutes.</p>
          <p>If you didn't request this code, please ignore this email.</p>
        </div>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { 
      success: false, 
      error: 'Failed to send verification code'
    };
  }
};