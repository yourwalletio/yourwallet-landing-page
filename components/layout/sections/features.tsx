"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { motion } from "framer-motion";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}
const features = [
  {
    name: "Seamless Fiat Conversion",
    description:
      "Easily convert your digital funds into fiat currency anytime, anywhere, using your Visa card.",
    // href: "/",
    cta: "Learn more",
    background: <img alt="Seamless Fiat Conversion" className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "Visa Card Integration",
    description:
      "Enjoy the convenience of using your Visa card to make purchases and transactions with your digital wallet.",
    // href: "/",
    cta: "Learn more",
    background: <img alt="Visa Card Integration" className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-3 lg:col-span-2",
  },
  {
    name: "Global Accessibility",
    description:
      "Make transactions globally without borders. Access your funds anytime, anywhere with full flexibility.",
    // href: "/",
    cta: "Learn more",
    background: <img alt="Global Accessibility" className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-3 lg:col-span-2",
  },
  {
    name: "Enhanced Security",
    description:
      "Your funds are protected with state-of-the-art security features to ensure safe transactions and data protection.",
    // href: "/",
    cta: "Learn more",
    background: <img alt="Enhanced Security" className="absolute -right-20 -top-20 opacity-60" />,
    className: "col-span-3 lg:col-span-1",
  },
];

const featureList: FeaturesProps[] = [
  {
    icon: "CreditCard",
    title: "Seamless Fiat Conversion",
    description:
      "Easily convert your digital funds into fiat currency anytime, anywhere, using your Visa card.",
  },
  {
    icon: "CreditCard",
    title: "Visa Card Integration",
    description:
      "Enjoy the convenience of using your Visa card to make purchases and transactions with your digital wallet.",
  },
  {
    icon: "Globe",
    title: "Global Accessibility",
    description:
      "Make transactions globally without borders. Access your funds anytime, anywhere with full flexibility.",
  },
  {
    icon: "ShieldCheck",
    title: "Enhanced Security",
    description:
      "Your funds are protected with state-of-the-art security features to ensure safe transactions and data protection.",
  },
  {
    icon: "Clock",
    title: "Instant Transactions",
    description:
      "Experience near-instant fund transfers, making your transactions faster and more efficient.",
  },
  {
    icon: "RefreshCcw",
    title: "Real-Time Fund Updates",
    description:
      "Track your funds and transactions in real-time, ensuring you're always in control of your digital wallet.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-lg text-primary mb-2 tracking-wider">Features</h2>

        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Seamless Digital Payments at Your Fingertips
        </h2>

        {/* <h3 className="md:w-1/2 mx-auto text-lg text-muted-foreground mb-8">
          Unlock the power of instant conversions, global accessibility, and secure transactions with our advanced digital wallet and Visa card integration. Effortlessly manage your funds and make purchases anywhere, anytime.
        </h3> */}
      </motion.div>

      {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div> */}
      <BentoGrid >
        {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
};