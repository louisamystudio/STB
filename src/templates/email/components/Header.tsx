import React from 'react';
import { brandConfig } from '@/config/brand';

export const EmailHeader: React.FC = () => (
  <tr>
    <td className="header" style={brandConfig.styles.header}>
      <table width="600" border="0" cellSpacing="0" cellPadding="0">
        <tr>
          <td align="center">
            <a 
              href={brandConfig.website} 
              style={brandConfig.styles.logo}
              className="logo"
            >
              {brandConfig.companyName}
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
);