import express from 'express';
import { sendVerificationEmail } from './emailService';

const router = express.Router();

// Store verification codes temporarily (in production, use a proper database)
const verificationCodes = new Map<string, string>();

router.post('/send-verification', async (req, res) => {
  try {
    const { email } = req.body;
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // Store the code
    verificationCodes.set(email, code);

    // Send verification email
    await sendVerificationEmail(email, code);

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending verification:', error);
    res.status(500).json({ error: 'Failed to send verification code' });
  }
});

router.post('/verify-code', (req, res) => {
  const { email, code } = req.body;
  const storedCode = verificationCodes.get(email);

  if (storedCode && storedCode === code) {
    verificationCodes.delete(email); // Clean up used code
    res.json({ success: true });
  } else {
    res.status(400).json({ error: 'Invalid verification code' });
  }
});

export default router;