import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kavitha Sree | Cybersecurity & Software Engineering',
  description:
    'Portfolio of Kavitha Sree, a Computer Science and Engineering student specializing in Cyber Security, software development, Python, Linux, machine learning and secure systems.',
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
    title: 'Kavitha Sree | Cybersecurity & Software Engineering',
    description:
      'Personal Operations Interface showcasing secure systems, threat analysis, Linux, Python, and full-stack software development.',
    type: 'website',
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
