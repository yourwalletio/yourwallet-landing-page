"use client";
import { ArrowRight, Wallet } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import ShinyButton from "@/components/ui/shiny-button";
import Image from "next/image";

export const HeroSection = () => {

  return (
    <section className="container w-full">
      <div className="flex flex-row lg:items-start items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-40">
        <div className="md:text-start text-center space-y-8">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="text-sm py-2">
              <span className="mr-2 text-primary">
                <Wallet />
              </span>
              <span> #1 LATEST WALLET SOLUTION </span>
            </Badge>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center lg:items-start lg:justify-start text-center"
          >
            <div className={cn(
              "group rounded-full border w-[50%] border-black/5 bg-neutral-100 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}>
              <AnimatedShinyText className="flex   px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <Wallet className="mr-3 size-4 text-primary transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                <span>#1 LATEST WALLET SOLUTION</span>
              </AnimatedShinyText>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="max-w-screen-md mx-auto md:text-start text-center text-4xl md:text-6xl font-bold">
              <h1>
                Make the Best Financial Decisions with <br />
                <span className="text-transparent  md:px-0 px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                  Your Wallet
                </span>
              </h1>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-screen-sm  mx-auto md:mx-0 lg:text-lg text-base  text-muted-foreground"
          >
            {`Your Wallet helps you manage your budget effortlessly and make smarter financial decisions.`}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-4 md:space-y-0 md:space-x-4"
          >
            {/* <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Download
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-y-1 transition-transform" />
            </Button> */}
            <ShinyButton onClick={() => {
              window.location.href = "https://t.me/yourwallettr";
            }} className="bg-white text-[#8B1DB8]  group/arrow">
              <span className="text-primary flex items-center group/arrow font-bold">
                Download
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </span>
            </ShinyButton>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="lg:flex hidden max-w-[50%] w-hull relative  items-center justify-center"
        >
        <img
        className=" h-auto w-full mx-auto rounded-lg relative rouded-lg leading-none flex items-center   "
        src="/hero-section-2.png"
        alt="dashboard"
        />
        </motion.div> */}

        <div className="lg:flex hidden  relative w-1/2 h-full items-start justify-center  bg-rose-400 ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-80  mx-auto h-80    bg-primary rounded-full blur-2xl" />

          {/* Ana resim */}
          <motion.div
            className="absolute w-52 h-52   rounded-lg shadow-lg z-10"
            initial={{ rotate: 0, x: 0 }}
            animate={{ rotate: 0, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/onboarding-screen.png"
              alt="Right Image"
              width={400}
              height={500}
              className="rounded-lg shadow-lg "
            />
          </motion.div>

          {/* Sol resim */}
          <motion.div
            className="absolute w-40 h-40   rounded-lg shadow-lg"
            initial={{ rotate: 0, x: -200 }}

            animate={{ rotate: -30, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/deposit-screen.png"
              alt="Right Image"
              width={200}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Sağ resim */}
          <motion.div
            className="absolute w-40 h-40   rounded-lg shadow-lg"
            initial={{ rotate: 0, x: 200 }}
            animate={{ rotate: 30, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/buy-screen.png"
              alt="Right Image"
              width={200}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};