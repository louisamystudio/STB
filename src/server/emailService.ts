
import nodemailer from 'nodemailer';
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

export const sendVerificationEmail = async (email: string, code: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const requiredEnvVars = ['SMTP_USER', 'SMTP_PASS', 'SMTP_HOST', 'SMTP_PORT'];
    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }

    const expiryTime = new Date(Date.now() + 10 * 60 * 1000).toLocaleTimeString();
    const result = await transporter.sendMail({
      from: `"Louis Amy AE Studio" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Your Verification Code - Louis Amy AE Studio',
      html: sanitizeHtml(`
        <div style="font-family: 'Montserrat', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
          <h2 style="font-family: 'Italiana', serif; color: #333333; margin-bottom: 20px;">Louis Amy AE Studio</h2>
          <p style="color: #333333; margin-bottom: 15px;">Your verification code is:</p>
          <div style="background-color: #f5f5f5; padding: 15px; text-align: center; margin: 20px 0;">
            <span style="font-size: 24px; font-weight: bold; color: #F04E3E;">${code}</span>
          </div>
          <p style="color: #666666; font-size: 14px;">This code will expire at ${expiryTime}</p>
          <hr style="border: 1px solid #f5f5f5; margin: 20px 0;" />
          <p style="color: #999999; font-size: 12px;">If you did not request this code, please ignore this email.</p>
        </div>
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
      message: error instanceof Error ? error.message : String(error),
      timestamp: new Date().toISOString(),
      email: email
    });
    throw error;
  }
};

export { emailLimiter };
