import type { Metadata } from 'next';
import NavBar from '@/components/navigation/Navbar';
import Footer from '@/components/footer';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Container from '@/components/container';

export const metadata: Metadata = {
  title: 'Pettys Paws',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          <Container>{children}</Container>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
