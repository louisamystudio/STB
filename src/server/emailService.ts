
import nodemailer from 'nodemailer';
import { rateLimit } from 'express-rate-limit';
import sanitizeHtml from 'sanitize-html';

const emailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: process.env.NODE_ENV === 'production'
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
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SMTP_HOST) {
      console.error('SMTP configuration incomplete');
      return {success: false, error: 'Email configuration error'};
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
    console.error('Email sending error:', error);
    return false;
  }
};

export { emailLimiter };
