
import express, { Request, Response } from 'express';
import { sendVerificationEmail } from './emailService';

const router = express.Router();

interface VerificationRequest {
  email: string;
  code: string;
}

const verificationCodes = new Map<string, string>();

router.post('/send-verification', async (req: Request<{}, {}, VerificationRequest>, res: Response) => {
  try {
    const { email } = req.body;
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    verificationCodes.set(email, code);
    await sendVerificationEmail(email, code);

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending verification:', error);
    res.status(500).json({ error: 'Failed to send verification code' });
  }
});

router.post('/verify-code', (req: Request<{}, {}, VerificationRequest>, res: Response) => {
  const { email, code } = req.body;
  const storedCode = verificationCodes.get(email);

  if (storedCode && storedCode === code) {
    verificationCodes.delete(email);
    res.json({ success: true });
  } else {
    res.status(400).json({ error: 'Invalid verification code' });
  }
});

export default router;
