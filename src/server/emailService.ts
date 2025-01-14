import nodemailer, { createTransport } from 'nodemailer';
import { rateLimit } from 'express-rate-limit';
import sanitizeHtml from 'sanitize-html';

export const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many verification attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false
});

const requiredEnvVars = ['SMTP_USER', 'SMTP_PASS', 'SMTP_HOST', 'SMTP_PORT'];

const validateEnvVars = () => {
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
};

const transporter = createTransport({
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

export const sendVerificationEmail = async (email: string, code: string): Promise<{ success: boolean; error?: string }> => {
  try {
    validateEnvVars();

    const expiryTime = new Date(Date.now() + 10 * 60 * 1000).toLocaleTimeString();
    const result = await transporter.sendMail({
      from: `"Louis Amy AE Studio" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Your Verification Code - Louis Amy AE Studio',
      html: sanitizeHtml(`
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Verification Code</h2>
          <p>Your verification code is: <strong>${code}</strong></p>
          <p>This code will expire at ${expiryTime}</p>
          <p>If you didn't request this code, please ignore this email.</p>
        </div>
      `)
    });

    console.log('Verification email sent:', result.messageId);
    return { success: true };
  } catch (error) {
    console.error('Email sending error:', {
      message: error instanceof Error ? error.message : String(error),
      timestamp: new Date().toISOString(),
      email
    });
    return { 
      success: false, 
      error: error instanceof Error && error.message.includes('SMTP') 
        ? 'Email service temporarily unavailable' 
        : 'Failed to send verification code'
    };
  }
};