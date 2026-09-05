import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kavithasreejayavaram.github.io/Portfolio/'),
  title: 'Kavitha Sree | Cybersecurity × AI × Software Engineering',
  description:
    'Cybersecurity and software engineering portfolio focused on secure systems, AI-powered threat detection, Linux, networking, backend development and practical security engineering.',
  alternates: { canonical: '/' },
  keywords: [
    'Kavitha Sree',
    'Cybersecurity',
    'Software Engineering',
    'Python',
    'Linux',
    'RHCSA',
    'Wireless Intrusion Detection',
    'SRM IST',
    'Machine Learning'
  ],
  authors: [{ name: 'JAYAVARAM LAKSHMI RANGA KAVITHA SREE' }],
  openGraph: {
    title: 'Kavitha Sree | Cybersecurity × AI × Software Engineering',
    description:
    'Cybersecurity, AI, and software engineering work by Kavitha Sree.',
    type: 'website',
    url: 'https://kavithasreejayavaram.github.io/Portfolio/',
  },
  twitter: {
    card: 'summary',
    title: 'Kavitha Sree | Cybersecurity × AI × Software Engineering',
    description: 'Security-focused software systems, AI/ML, Linux, networking, and backend engineering.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#07090e] text-slate-100 antialiased selection:bg-blue-600/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
