import React from 'react';
import { brandConfig } from '@/config/brand';

interface EmailButtonProps {
  href: string;
  text: string;
}

export const EmailButton: React.FC<EmailButtonProps> = ({ href, text }) => (
  <tr>
    <td align="center" style={brandConfig.styles.buttonContainer}>
      <a 
        href={href} 
        style={brandConfig.styles.button}
        className="button"
      >
        {text}
      </a>
    </td>
  </tr>
);