"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { ModeToggle } from "./theme-toggle";
import LanguageToggle from "./language-toggle";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./moving-border";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const router = useRouter();
  const [visible, setVisible] = useState(true);
  const t = useTranslations();
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      // if (scrollYProgress.get() < 0.05) {
      //   setVisible(false);
      // } else {
      if (direction < 1) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      // }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-[85%] fixed top-5 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]  pr-8 md:pr-2 pl-8 py-5  items-center justify-between ",
          className
        )}
      >

          <Link href={"/"} className='flex items-center md:mr-10  md:text-sm lg:text-base text-2xl text-[#7421F7] dark:text-[#477DE9] '>
            <img src={theme !== "dark" ? "/logo-primary.webp" : "/logo-secondary.webp"} alt="Your Wallet" className={"w-[90px]"} />
          </Link>
          <div className="flex items-center justify-center gap-2">

            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{t(`navigation.${navItem.name}`)}</span>
              </Link>
            ))}
          </div>
          <div className="flex flex-row items-center  gap-2">
            <div className="md:block  hidden">
              <ModeToggle />
            </div>
            <div className="md:block  hidden">
              <LanguageToggle />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden transition flex w-5 flex-col gap-1.5 duration-300 z-[5001]  relative ml-5'
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={28} />}
            </button>
            <button onClick={() => router.push("/download")} className="hidden md:block border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
              <span>{t('download.button')}</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>
          </div>
          
      </motion.div>

      {/* Mobil Menü Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[4999] md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobil Menü Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 200,
              duration: 0.3
            }}
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-[#1b1b1c] shadow-2xl z-[5000] md:hidden"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <Link
                  href="/"
                  className="flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img
                    src={theme !== "dark" ? "/logo-primary.webp" : "/logo-secondary.webp"}
                    alt="Your Wallet"
                    className="w-16"
                  />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-6">
                <div className="space-y-2 px-6">
                  {navItems.map((navItem, index) => (
                    <motion.div
                      key={navItem.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3
                      }}
                    >
                      <Link
                        href={navItem.link}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-between py-4 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                            {navItem.icon}
                          </span>
                          <span className="text-gray-900 dark:text-white font-medium text-base">
                            {t(`navigation.${navItem.name}`)}
                          </span>
                        </div>
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Theme & Language Settings */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-6 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <ModeToggle />
                    <LanguageToggle />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <button
                    onClick={() => {
                      router.push("/download");
                      setIsMenuOpen(false);
                    }}
                    className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {t('download.button')}
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>

                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};
