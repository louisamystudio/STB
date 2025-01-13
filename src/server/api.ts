
import express from 'express';
import nodemailer from 'nodemailer';
import { generatePDF } from './pdfGenerator';

const router = express.Router();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

router.post('/send-verification', async (req, res) => {
  const { email, code } = req.body;
  
  try {
    await transporter.sendMail({
      from: '"Louis Amy AE Studio" <info@louisamy.com>',
      to: email,
      subject: "Verification Code - Louis Amy AE Studio",
      text: `Your verification code is: ${code}`,
      html: `<p>Your verification code is: <strong>${code}</strong></p>`
    });
    
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

router.post('/generate-contract', async (req, res) => {
  const { email, terms, signature } = req.body;
  
  try {
    const pdfBuffer = await generatePDF({ terms, signature });
    
    // Send to client
    await transporter.sendMail({
      from: '"Louis Amy AE Studio" <info@louisamy.com>',
      to: email,
      subject: "Your Signed Contract - Louis Amy AE Studio",
      text: "Please find attached your signed contract",
      attachments: [{
        filename: 'contract.pdf',
        content: pdfBuffer
      }]
    });
    
    // Send to Louis Amy
    await transporter.sendMail({
      from: '"Louis Amy AE Studio System" <info@louisamy.com>',
      to: "info@louisamy.com",
      subject: `New Contract Signed - ${email}`,
      text: `A new contract has been signed by ${email}`,
      attachments: [{
        filename: 'contract.pdf',
        content: pdfBuffer
      }]
    });
    
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate or send contract' });
  }
});

export default router;
