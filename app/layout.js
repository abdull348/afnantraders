import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata = {
  title: 'Afnan Traders - Life Science Solutions',
  description:
    'Integrated solutions for Medical, Diagnostic, Analytical, Agriculture, Vet Research Institutes and Molecular Biological Institutions in Pakistan.',
  generator: 'v0.dev',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
