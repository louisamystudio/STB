
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

export const sendVerificationEmail = async (email: string, code: string) => {
  try {
    await transporter.sendMail({
      from: `"Louis Amy AE Studio" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Your Verification Code - Louis Amy AE Studio',
      html: `
        <div style="font-family: 'Montserrat', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="font-family: 'Italiana', serif; color: #333333;">Louis Amy AE Studio</h2>
          <h3>Verification Code</h3>
          <p>Your verification code is: <strong>${code}</strong></p>
          <p>Enter this code to complete your agreement verification.</p>
          <p>This code will expire in 10 minutes.</p>
        </div>
      `
    });
    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
};

// Verify the transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP configuration error:', error);
  } else {
    console.log('SMTP server is ready to send emails');
  }
});
