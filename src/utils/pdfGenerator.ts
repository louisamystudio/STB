
import { Document, Page, Text, View, StyleSheet, pdf, Font, Image } from '@react-pdf/renderer';
import { format } from 'date-fns';
import { brandConfig } from '../config/brand';

Font.register({
  family: 'Montserrat',
  src: 'https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gnD_g.ttf'
});

Font.register({
  family: 'Italiana',
  src: 'https://fonts.gstatic.com/s/italiana/v14/QldXNThLqRwH-OJ1UHjlKGHiw41u.ttf'
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#ffffff'
  },
  header: {
    marginBottom: 30,
    borderBottom: '2px solid #F04E3E',
    paddingBottom: 10
  },
  logo: {
    fontFamily: 'Italiana',
    fontSize: 24,
    color: '#333333',
    marginBottom: 10
  },
  title: {
    fontFamily: 'Italiana',
    fontSize: 28,
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center'
  },
  section: {
    margin: 10,
    padding: 10
  },
  sectionTitle: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 11,
    color: '#737D74',
    marginBottom: 5,
    lineHeight: 1.4
  },
  signature: {
    marginTop: 40,
    borderTop: '1px solid #F04E3E',
    paddingTop: 20
  },
  auditTrail: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    color: '#737D74',
    fontSize: 8,
    fontFamily: 'Montserrat'
  }
});

export const generatePDF = async ({ terms, signature }) => {
  const ContractDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.logo}>Louis Amy AE Studio</Text>
          <Text style={styles.text}>wesley@louisamy.com | 787-913-9472</Text>
        </View>

        <Text style={styles.title}>Service Agreement</Text>

        {terms.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.content.map((item, i) => (
              <Text key={i} style={styles.text}>• {item}</Text>
            ))}
          </View>
        ))}

        <View style={styles.signature}>
          <Text style={styles.sectionTitle}>Digital Signature</Text>
          <Text style={styles.text}>Email: {signature.email}</Text>
          <Text style={styles.text}>Date: {format(new Date(signature.timestamp), 'PPP')}</Text>
        </View>

        <View style={styles.auditTrail}>
          <Text style={styles.sectionTitle}>Audit Trail</Text>
          <Text style={styles.text}>Verification Time: {format(new Date(signature.auditTrail.verifiedAt), 'PPP pp')}</Text>
          <Text style={styles.text}>IP Address: {signature.auditTrail.ipAddress}</Text>
          <Text style={styles.text}>Browser: {signature.auditTrail.userAgent}</Text>
        </View>

        <View style={styles.footer}>
          <Text>Louis Amy AE Studio, LLC | Professional Engineering & Architectural Services</Text>
          <Text>This document is confidential and legally binding</Text>
        </View>
      </Page>
    </Document>
  );

  try {
    return await pdf(<ContractDocument />).toBuffer();
  } catch (error) {
    console.error('PDF generation error:', error);
    throw new Error('Failed to generate PDF');
  }
};
