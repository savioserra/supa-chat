import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { PropsWithChildren } from 'react';

import './globals.css';
import { Providers } from './providers';

const inter = Montserrat({ subsets: ['latin'], weight: '400' });

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = { title: 'Supa Chat', description: 'A Supabase powered realtime chat with Next.JS' };
