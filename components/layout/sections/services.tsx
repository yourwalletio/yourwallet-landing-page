"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
  classname: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Visa Card Integration",
    description:
      "Seamlessly use your digital wallet with the Visa card, making transactions and purchases worldwide.",
    pro: 0,
    classname: "lg:col-start-2 lg:col-span-4"
  },
  {
    title: "Fiat Conversion",
    description:
      "Instantly convert your digital funds to fiat currency using the integrated Visa card for easy transactions.",
    pro: 0,
    classname: "lg:col-start-1   lg:col-span-3"
  },
  {
    title: "Global Accessibility",
    description: "Access your wallet from anywhere in the world, with the freedom to make transactions at any time.",
    pro: 0,
    classname: "lg:col-end-7 lg:col-span-3 "
  },
  {
    title: "Advanced Security",
    description: "Enjoy state-of-the-art encryption and protection to keep your digital assets safe and secure.",
    pro: 0,
    classname: "lg:col-start-2   lg:col-span-4"
  },
  // {
  //   title: "Real-Time Transaction Updates",
  //   description:
  //     "Get instant updates on all your transactions and fund movements, ensuring you're always in control.",
  //   pro: 0,
  //   classname: ""
  // },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-lg text-primary mb-2 tracking-wider">Services</h2>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Grow Your Business
        </h2>
        <h3 className="md:w-1/2 mx-auto text-xl text-muted-foreground mb-8">
          From marketing and sales to operations and strategy, we have the
          expertise to help you achieve your goals.
        </h3>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro, classname }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={classname}
          >
            <Card className="bg-muted/60 dark:bg-card h-full relative">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <Badge
                data-pro={ProService.YES === pro}
                variant="secondary"
                className="absolute -top-2 -right-3 data-[pro=false]:hidden"
              >
                PRO
              </Badge>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};