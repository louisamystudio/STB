import React from 'react';
import { brandConfig } from '@/config/brand';

interface BaseLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children, title }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title} - {brandConfig.companyName}</title>
      <link href="https://fonts.googleapis.com/css2?family=Italiana:wght@400&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />
      <style>{`
        /* Reset styles */
        body { margin: 0; padding: 0; min-width: 100%; width: 100% !important; height: 100% !important; }
        body, table, td, div, p, a { -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse !important; border-spacing: 0; }
        img { border: 0; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
      `}</style>
    </head>
    <body style={{ backgroundColor: brandConfig.colors.background, fontFamily: brandConfig.fonts.secondary }}>
      <div className="wrapper">
        <table className="main" width="100%" cellSpacing="0" cellPadding="0">
          {children}
        </table>
      </div>
    </body>
  </html>
);