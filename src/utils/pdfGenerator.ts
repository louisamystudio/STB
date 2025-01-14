
import { jsPDF } from 'jspdf';
import { brandConfig } from '@/config/brand';

interface PdfGeneratorOptions {
  terms: {
    sections: Array<{
      title: string;
      content: string[];
    }>;
  };
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
  
  // Add logo and header
  doc.setFont(brandConfig.fonts.primary);
  doc.setFontSize(24);
  doc.text('Louis Amy AE Studio', 20, 20);
  
  // Add terms
  doc.setFont(brandConfig.fonts.secondary);
  doc.setFontSize(12);
  let yPosition = 40;
  
  terms.sections.forEach(section => {
    doc.setFontSize(14);
    doc.text(section.title, 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    section.content.forEach(paragraph => {
      const lines = doc.splitTextToSize(paragraph, 170);
      doc.text(lines, 20, yPosition);
      yPosition += (lines.length * 6);
    });
    yPosition += 10;
  });
  
  // Add signature info
  yPosition = Math.min(yPosition, 240);
  doc.setFontSize(10);
  doc.text(`Signed by: ${signature.email}`, 20, yPosition);
  doc.text(`Date: ${new Date(signature.timestamp).toLocaleString()}`, 20, yPosition + 10);
  
  // Add audit trail
  doc.text('Audit Trail', 20, yPosition + 30);
  doc.text(`Verified: ${signature.auditTrail.verifiedAt}`, 30, yPosition + 40);
  doc.text(`IP Address: ${signature.auditTrail.ipAddress}`, 30, yPosition + 45);
  doc.text(`User Agent: ${signature.auditTrail.userAgent}`, 30, yPosition + 50);
  
  // Convert to Buffer
  return Buffer.from(doc.output('arraybuffer'));
}
