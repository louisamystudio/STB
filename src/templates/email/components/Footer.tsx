import React from 'react';
import { brandConfig } from '@/config/brand';
import { contactDetails } from '@/config/company';

export const EmailFooter: React.FC = () => (
  <tr>
    <td className="footer" style={brandConfig.styles.footer}>
      <table width="600" border="0" cellSpacing="0" cellPadding="0">
        <tr>
          <td align="center">
            <p style={brandConfig.styles.footerCompanyName}>
              {contactDetails.companyName}
            </p>
            <p style={brandConfig.styles.footerText}>
              P.O. Box 10683 Ponce PR 00732<br />
              <a href={`mailto:${contactDetails.email}`} style={brandConfig.styles.footerLink}>
                {contactDetails.email}
              </a> |
              <a href={`tel:+1${contactDetails.office.replace(/-/g, '')}`} style={brandConfig.styles.footerLink}>
                {contactDetails.office}
              </a>
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
);