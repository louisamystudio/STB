
import React from 'react';
import { brandConfig } from '@/config/brand';

interface EmailButtonProps {
  href: string;
  text: string;
  className?: string;
}

export const EmailButton: React.FC<EmailButtonProps> = ({ href, text, className = '' }) => (
  <tr>
    <td align="center" style={{
      ...brandConfig.styles.buttonContainer,
      padding: '20px 0'
    }}>
      <a 
        href={href} 
        style={{
          ...brandConfig.styles.button,
          backgroundColor: '#F04E3E',
          color: '#FFFFFF',
          padding: '12px 24px',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          display: 'inline-block'
        }}
        className={`button ${className}`}
      >
        {text}
      </a>
    </td>
  </tr>
);
