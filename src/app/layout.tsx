import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tesla Robot Factory',
  description: 'Advanced autonomous robotics manufacturing by Tesla. Precision. Scale. Intelligence.',
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
