import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/ui/header";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Footer from "@/components/ui/footer";
import { GoogleAnalytics } from '@next/third-parties/google'
const inter = Inter({
  subsets: ["latin"],
});

type Messages = {
  metadata: {
    title: string;
    description: string;
    og: {
      description: string;
      alt: string;
    };
    twitter: {
      description: string;
    };
  };
};

export async function generateMetadata(): Promise<Metadata> {
  const messages = (await getMessages()) as Messages;

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    openGraph: {
      type: "website",
      url: "https://yourwallet.tr",
      title: messages.metadata.title,
      description: messages.metadata.og.description,
      images: [
        {
          url: "https://yourwallet.tr/preview.png",
          width: 1200,
          height: 630,
          alt: messages.metadata.og.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://yourwallet.tr",
      title: messages.metadata.title,
      description: messages.metadata.twitter.description,
      images: [
        "https://yourwallet.tr/preview.png",
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} antialiased transition-all ease-in-out delay-75 duration-75`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
            
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-SQD2S51H1R" />
    </html>
  );
}
