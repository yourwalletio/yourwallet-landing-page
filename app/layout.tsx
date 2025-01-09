import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Your Wallet | Digital Wallet & Visa Card Integration",
  description: "Easily convert your digital assets to fiat currency and make global transactions with the Your Wallet app. Secure, fast, and convenient.",
  openGraph: {
    type: "website",
    url: "https://yourwallet.tr",
    title: "Your Wallet | Digital Wallet & Visa Card Integration",
    description: "Manage your digital funds effortlessly with the Your Wallet app. Convert to fiat currency, make purchases, and enjoy global access with our Visa card.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Your Wallet - Digital Wallet and Visa Card Integration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://yourwallet.tr",
    title: "Your Wallet | Digital Wallet & Visa Card Integration",
    description: "Seamlessly manage your digital funds and convert them to fiat currency with Your Wallet. Make transactions anywhere, anytime.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
