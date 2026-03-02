import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './providers';
import { BubblaVChatbot } from '@/components/bubblav-chatbot';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'BubblaV AI Chatbot - NextJS Starter Template',
  description:
    'A fast, intelligent AI chatbot for your website. Deploy in 5 minutes with no coding required. Powered by Google Gemini 2.5 Flash.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BubblaVChatbot />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
