import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import DemoShowcase from '@/components/shared/demo-showcase';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import { interTight, playfair } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  ...generateMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interTight.variable} ${playfair.variable} font-serif antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense>
            <SmoothScrollProvider>
              <Navbar />
              <DemoShowcase activeDemoId={32} />
              {children}
              <Footer />
            </SmoothScrollProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
