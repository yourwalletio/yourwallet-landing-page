import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
// import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
// import { TeamSection } from "@/components/layout/sections/team";
// import { TestimonialSection } from "@/components/layout/sections/testimonial";

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


export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      {/* <TestimonialSection /> */}
      {/* <TeamSection /> */}
      <CommunitySection />
      {/* <PricingSection /> */}
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
