"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { motion } from "framer-motion";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
  classname: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Recycle",
    title: "Seamless Fund Conversion",
    description:
      "Effortlessly convert your funds into fiat currency with the advanced digital wallet, allowing you to access your money whenever you need it.",
    classname: "lg:col-start-2 "
  },
  {
    icon: "CreditCard",
    title: "Visa Card Integration",
    description:
      "Use your Visa card linked to the wallet for easy payments and purchases, both online and in-store.",
    classname: "lg:col-start-3 "
  },
  {
    icon: "Globe",
    title: "Global Acceptance",
    description:
      "Make transactions anywhere in the world, wherever Visa is accepted, giving you unparalleled flexibility.",
    classname: "lg:col-start-1 "
  },
  {
    icon: "Zap",
    title: "Instant Transactions",
    description:
      "Experience fast and secure transactions, ensuring you can make purchases and transfers in real-time.",
    classname: "lg:col-start-2 "

  },
  // {
  //   icon: "Clock",
  //   title: "24/7 Access",
  //   description:
  //     "Access and manage your funds anytime, anywhere, with no restrictions or delays.",
  // },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="flex flex-col place-items-center lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-col flex gap-2 items-center justify-start text-start"
        >
          <h2 className="text-lg text-primary mb-2 tracking-wider text-start">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-start">
            Unlock the Full Potential of Your Digital Wallet
          </h2>
          {/* <p className="text-lg text-muted-foreground ">
            With our advanced digital wallet, you gain unparalleled flexibility and convenience in managing your finances. Effortlessly convert your funds, make secure transactions globally, and access your money anytime, anywhere. Enjoy seamless integration with Visa, instant transactions, and round-the-clock accessibility—all at your fingertips.
          </p> */}
        </motion.div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-full  ">
          {benefitList.map(({ icon, title, description, classname }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1,x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`${classname}`}
            >
              <Card
                className={`bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number w-full h-full`}
              >
                <CardHeader>
                  <div className="flex justify-between">
                    <Icon
                      name={icon as keyof typeof icons}
                      size={32}
                      color="hsl(var(--primary))"
                      className="mb-6 text-primary"
                    />
                    <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                      0{index + 1}
                    </span>
                  </div>

                  <CardTitle>{title}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground">
                  {description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};