import { jsPDF } from 'jspdf';

interface PdfGeneratorOptions {
  terms: any;
  signature: {
    email: string;
    timestamp: string;
    auditTrail: {
      verifiedAt: string;
      ipAddress: string;
      userAgent: string;
    };
  };
}

export async function generatePDF(options: PdfGeneratorOptions): Promise<Buffer> {
  const doc = new jsPDF();
  const { terms, signature } = options;

  // Add logo
  doc.setFontSize(24);
  doc.text('Louis Amy AE Studio', 20, 20);

  // Add terms
  doc.setFontSize(12);
  doc.text('Terms and Conditions', 20, 40);

  // Add signature info
  doc.setFontSize(10);
  doc.text(`Signed by: ${signature.email}`, 20, 240);
  doc.text(`Date: ${new Date(signature.timestamp).toLocaleString()}`, 20, 250);

  // Add audit trail
  doc.text('Audit Trail', 20, 270);
  doc.text(`Verified: ${signature.auditTrail.verifiedAt}`, 30, 280);
  doc.text(`IP Address: ${signature.auditTrail.ipAddress}`, 30, 285);

  // Convert to Buffer
  const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
  return pdfBuffer;
}