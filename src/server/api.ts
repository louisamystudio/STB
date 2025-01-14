
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
    
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    verificationCodes.set(email, { code, expiresAt });
    await sendVerificationEmail(email, code);

    res.json({ success: true });
  } catch (error) {
    console.error('Verification request error:', error);
    res.status(500).json({ error: 'Failed to send verification code' });
  }
});

router.post('/verify-code', (req, res) => {
  const { email, code } = req.body;

  if (!email || !code) {
    return res.status(400).json({ error: 'Email and code are required' });
  }

  const verification = verificationCodes.get(email);
  
  if (!verification) {
    return res.status(400).json({ error: 'No verification code found' });
  }

  if (new Date() > verification.expiresAt) {
    verificationCodes.delete(email);
    return res.status(400).json({ error: 'Verification code expired' });
  }

  if (verification.code !== code) {
    return res.status(400).json({ error: 'Invalid verification code' });
  }

  verificationCodes.delete(email);
  res.json({ success: true });
});

export default router;
