import express, { Request, Response } from 'express';
import { sendVerificationEmail } from './emailService';

const router = express.Router();

interface VerificationRequest {
  email: string;
  code: string;
  expiresAt: Date;
}

const verificationCodes = new Map<string, VerificationRequest>();

router.post('/send-verification', async (req: Request<{}, {}, VerificationRequest>, res: Response) => {
  try {
    const { email } = req.body;
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 10); //Verification code expires in 10 minutes

    const verificationRequest: VerificationRequest = { email, code, expiresAt };
    verificationCodes.set(email, verificationRequest);
    await sendVerificationEmail(email, code);

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending verification:', error);
    res.status(500).json({ error: 'Failed to send verification code' });
  }
});

router.post('/verify-code', (req: Request<{}, {}, VerificationRequest>, res: Response) => {
  const { email, code } = req.body;
  const storedData = verificationCodes.get(email);

  if (!email?.trim() || !code?.trim()) {
    return res.status(400).json({ error: 'Email and verification code are required' });
  }

  if (!storedData) {
    return res.status(400).json({ error: 'No verification code found for this email' });
  }

  if (storedData.code !== code) {
    return res.status(400).json({ error: 'Invalid verification code' });
  }

  const now = new Date();
  if (now > storedData.expiresAt) {
    verificationCodes.delete(email);
    return res.status(400).json({ error: 'Verification code has expired' });
  }

  verificationCodes.delete(email);
  res.json({ success: true });
});

export default router;