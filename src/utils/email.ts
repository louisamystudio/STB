import { brandConfig } from '@/config/brand';

export const generateEmailStyles = () => `
  /* Base styles */
  body {
    background-color: ${brandConfig.colors.background};
    font-family: ${brandConfig.fonts.secondary};
  }

  /* Mobile styles */
  @media screen and (max-width: 600px) {
    .logo {
      font-size: 36px !important;
      letter-spacing: 0.2em !important;
    }
    
    .content {
      padding: 30px 15px !important;
    }
    
    .section-title {
      font-size: 24px !important;
    }
    
    .text {
      font-size: 14px !important;
    }
    
    .button {
      display: block !important;
      margin: 20px auto !important;
      max-width: 200px !important;
    }
    
    .service-item {
      margin: 10px 0 !important;
    }
  }
`;

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  return match ? `${match[1]}-${match[2]}-${match[3]}` : phone;
};