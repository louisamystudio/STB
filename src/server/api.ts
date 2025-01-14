
import express from 'express';
import { sendVerificationEmail } from './emailService';

const router = express.Router();

interface VerificationCode {
  code: string;
  expiresAt: Date;
}

const verificationCodes = new Map<string, VerificationCode>();

router.post('/send-verification', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email || !email.trim() || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    const emailResult = await sendVerificationEmail(email, code);
    if (!emailResult.success) {
      throw new Error(emailResult.error || 'Failed to send email');
    }

    verificationCodes.set(email, { code, expiresAt });
    res.json({ success: true });
  } catch (error) {
    console.error('Verification request error:', error);
    res.status(500).json({ error: error instanceof Error ? error.message : 'Failed to send verification code' });
  }
});

router.post('/verify-code', (req, res) => {
  const { email, code } = req.body;
  
  if (!email?.trim() || !code?.trim()) {
    return res.status(400).json({ error: 'Email and verification code are required' });
  }

  const storedData = verificationCodes.get(email);
  if (!storedData) {
    return res.status(400).json({ error: 'No verification code found for this email' });
  }

  if (storedData.code !== code) {
    return res.status(400).json({ error: 'Invalid verification code' });
  }

  if (new Date() > storedData.expiresAt) {
    verificationCodes.delete(email);
    return res.status(400).json({ error: 'Verification code has expired' });
  }

  verificationCodes.delete(email);
  res.json({ success: true });
});

export default router;
