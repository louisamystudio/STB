
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica'
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  section: {
    margin: 10,
    padding: 10
  },
  text: {
    fontSize: 12,
    marginBottom: 5
  },
  signature: {
    marginTop: 30
  }
});

export const generatePDF = async ({ terms, signature }) => {
  const ContractDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Louis Amy AE Studio - Service Agreement</Text>
        {terms.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.text}>{section.title}</Text>
            {section.content.map((item, i) => (
              <Text key={i} style={styles.text}>• {item}</Text>
            ))}
          </View>
        ))}
        <View style={styles.signature}>
          <Text>Signed by: {signature.name}</Text>
          <Text>Date: {format(new Date(), 'PPP')}</Text>
          <Text>IP Address: {signature.ipAddress}</Text>
          <Text>Timestamp: {signature.timestamp}</Text>
        </View>
      </Page>
    </Document>
  );

  return pdf(<ContractDocument />).toBuffer();
};
