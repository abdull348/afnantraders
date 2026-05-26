import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  metadataBase: new URL('https://afnantraders.com'),
  title: {
    template: '%s | Afnan Traders',
    default: 'Afnan Traders | Scientific & Diagnostic Solutions',
  },
  description:
    "Pakistan's trusted provider of medical, diagnostic, analytical, agricultural, and veterinary life science instruments. Serving research institutions.",
  keywords: [
    'life science solutions Pakistan',
    'diagnostic instruments Pakistan',
    'medical technology',
    'laboratory equipment',
    'scientific instruments',
    'Afnan Traders',
    'Rawalpindi',
    'Thermo Fisher Scientific distributor',
    'Macrogen distributor Pakistan',
    'research instruments',
    'analytical instruments',
  ],
  authors: [{ name: 'Afnan Traders' }],
  creator: 'Afnan Traders',
  publisher: 'Afnan Traders',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Afnan Traders',
    title: 'Afnan Traders | Scientific & Diagnostic Solutions',
    description:
      "Pakistan's trusted provider of medical, diagnostic, and life science solutions.",
    url: 'https://afnantraders.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afnan Traders | Scientific & Diagnostic Solutions',
    description:
      "Pakistan's trusted provider of medical, diagnostic, and life science solutions.",
  },
  icons: {
    icon: '/afnan-traders.png',
    shortcut: '/afnan-traders.png',
    apple: '/afnan-traders.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
