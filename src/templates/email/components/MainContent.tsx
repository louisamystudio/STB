
import React from 'react';
import { VerificationEmailData } from '../../../types/email';

interface MainContentProps {
  data: VerificationEmailData;
}

export const MainContent: React.FC<MainContentProps> = ({ data }) => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '8px',
      margin: '20px 0'
    }}>
      <h2 style={{
        color: '#333333',
        marginBottom: '20px',
        fontFamily: 'Italiana, serif'
      }}>Verification Required</h2>
      
      <p style={{
        color: '#666666',
        marginBottom: '15px',
        fontSize: '16px'
      }}>
        Hello {data.recipientName},
      </p>
      
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '20px',
        borderRadius: '6px',
        textAlign: 'center',
        margin: '25px 0'
      }}>
        <span style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#F04E3E',
          letterSpacing: '4px'
        }}>
          {data.code}
        </span>
        
        <p style={{
          color: '#666666',
          fontSize: '14px',
          marginTop: '10px'
        }}>
          This code will expire in {data.expiresIn} minutes
        </p>
      </div>
      
      <p style={{
        color: '#333333',
        fontSize: '14px',
        marginTop: '20px'
      }}>
        Please enter this code to verify your email and complete the process.
      </p>
    </div>
  );
};
