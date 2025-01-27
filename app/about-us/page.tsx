"use client";
import React from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import Iphone15Pro from '@/components/ui/iphone-15-pro'
import { motion } from "framer-motion"
import { Globe } from '@/components/ui/globe';

export default function Page() {
  const t = useTranslations()

  return (
    <main className="md:px-10 px-5 mx-auto mb-6 mt-12 grid justify-items-center gap-y-10 md:mb-20 md:gap-y-20 lg:mt-16">
      {/* Hero Section */}
      <section className="grid w-full max-w-[1200px] gap-6 md:grid-cols-2 md:gap-8 md:gap-y-14 my-16">
        <div className="flex-col justify-center md:flex">
          <h1 className="transition text-black font-bold dark:text-[#477DE9] text-4xl md:leading-[3.75rem] leading-[2.8125rem] md:text-[3.25rem]">
            {t('about.hero.title')}
          </h1>
          <p className="default-transition text-lightBlack font-inter dark:text-white text-[1.125rem] leading-[1.625rem] md:text-[1.125rem] md:leading-[1.625rem] my-4 md:my-6 md:max-w-[40ch]">
            {t('about.hero.description')}
          </p>
          <Link href={"download"} className="text-red hover:before:bg-redborder-red-500 relative w-fit rounded-full  px-8 py-[1.125rem] md:py-3 md:px-10   mt-10 flex  overflow-hidden border border-black bg-white text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black dark:before:bg-[#477DE9] before:transition-all before:duration-500 hover:text-white hover:shadow-black hover:before:left-0 hover:before:w-full">
            <span className="relative z-10">{t("about.hero.explore")}</span>
          </Link>
        </div>
        <div className="relative flex items-center justify-center  ">
          <Globe className="h-auto w-full max-w-[500px]  flex items-center justify-center " />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid w-full max-w-[1200px] gap-6 md:min-h-[450px] lg:grid-cols-2">
        <div className="transition relative rounded-[20px] p-5 [transition-property:background-color,border-color] lg:rounded-[30px] lg:p-8 border border-blue-500 bg-white dark:border-white dark:bg-black hidden lg:flex flex-col gap-5 md:justify-center md:gap-7">
          <div className='max-w-[200px] absolute z-10 '>
            <Iphone15Pro
              className="size-full"
              src="/onboarding-screen.png"
            />
          </div>
          <motion.div
            initial={{ translateX: 0, rotate: 0 }}
            animate={{ translateX: "50%", rotate: "45deg" }}
            transition={{ duration: 0.2 }}
            className='max-w-[200px] absolute z-[9]'
          >
            <Iphone15Pro
              className="size-full"
              src="/buy-screen.png"
            />
          </motion.div>
          <motion.div
            initial={{ translateX: 0, translateY: 0, rotate: 0 }}
            animate={{ translateX: "80%", translateY: "25%", rotate: "90deg" }}
            transition={{ duration: 0.4 }}
            className='max-w-[200px] absolute z-[0]   '
          >
            <Iphone15Pro
              className="size-full"
              src="/deposit-screen.png"
            />
          </motion.div>
        </div>
        <div className="transition rounded-[20px] p-5 [transition-property:background-color,border-color] lg:rounded-[30px] lg:p-8 border border-blue-500 bg-white dark:border-white dark:bg-black flex flex-col gap-5 md:justify-center md:gap-7">
          <h3 className="transition text-black font-bold dark:text-[#477DE9] text-[1.625rem] leading-[2rem] md:text-4xl md:leading-[2.0625rem] max-w-[18ch]">
            {t('about.mission.title')}
          </h3>
          <p className="transition text-black font-inter dark:text-white text-[1rem] leading-[1.125rem] md:text-[1rem] md:leading-[1.375rem]">
            {t('about.mission.description')}
          </p>
        </div>
      </section>
      <section className="grid w-full max-w-[1200px] gap-6 md:min-h-[450px] lg:grid-cols-2">
        <div className="transition rounded-[20px] p-5 [transition-property:background-color,border-color] lg:rounded-[30px] lg:p-8 border border-blue-500 bg-white dark:border-white dark:bg-black flex flex-col gap-5 md:justify-center md:gap-7">
          <h3 className="transition text-black font-bold dark:text-[#477DE9] text-[1.625rem] leading-[2rem] md:text-[1.875rem] md:leading-[2.0625rem] max-w-[18ch]">
            {t('about.vision.title')}
          </h3>
          <p className="transition text-black font-inter dark:text-white text-[1.1rem] leading-[1.125rem] md:text-[1rem] md:leading-[1.375rem]">
            {t('about.vision.description')}
          </p>
        </div>
        <div className="transition rounded-[20px] p-5 [transition-property:background-color,border-color] lg:rounded-[30px] lg:p-8 border border-blue-500 bg-white dark:border-white dark:bg-black hidden lg:flex  flex-col gap-5 md:justify-center items-center  md:gap-7">
          <img src='/box-grapic.svg' className="w-[200px] h-auto text-black dark:text-white" />
        </div>
      </section>

      <section className="w-full max-w-[1200px]">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-[#477DE9]">{t('about.principles.title')}</h2>
          <p className="text-gray-600 dark:text-gray-300 lg:text-lg">{t('about.principles.description')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* İnsan Odaklı */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all h-[200px] flex flex-col relative">
            <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#8B1DB8]/10 dark:bg-[#477DE9]/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#8B1DB8] dark:text-white">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 dark:text-[#477DE9]">{t('about.principles.humanCentric.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('about.principles.humanCentric.description')}</p>
          </div>

          {/* Güven ve Sorumluluk */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all h-[200px] flex flex-col relative">
            <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#8B1DB8]/10 dark:bg-[#477DE9]/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#8B1DB8] dark:text-white">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.727 14.727a1.5 1.5 0 0 0 .3 1.655l.055.054a1.816 1.816 0 0 1 0 2.573 1.818 1.818 0 0 1-2.573 0l-.054-.055a1.5 1.5 0 0 0-1.655-.3 1.5 1.5 0 0 0-.91 1.373v.155a1.818 1.818 0 1 1-3.636 0v-.082a1.5 1.5 0 0 0-.982-1.373 1.5 1.5 0 0 0-1.655.3l-.054.055a1.818 1.818 0 0 1-2.573 0 1.816 1.816 0 0 1 0-2.573l.054-.054a1.5 1.5 0 0 0 .3-1.655 1.5 1.5 0 0 0-1.372-.91h-.155a1.818 1.818 0 1 1 0-3.636h.082a1.5 1.5 0 0 0 1.373-.982 1.5 1.5 0 0 0-.3-1.655l-.054-.054a1.818 1.818 0 1 1 2.573-2.573l.054.054a1.5 1.5 0 0 0 1.655.3h.073a1.5 1.5 0 0 0 .91-1.373v-.155a1.818 1.818 0 0 1 3.636 0v.082a1.5 1.5 0 0 0 .91 1.373 1.5 1.5 0 0 0 1.655-.3l.054-.054a1.818 1.818 0 0 1 2.573 2.573l-.054.054a1.5 1.5 0 0 0-.3 1.655v.073a1.5 1.5 0 0 0 1.373.91h.155a1.818 1.818 0 0 1 0 3.636h-.082a1.5 1.5 0 0 0-1.373.91Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 dark:text-[#477DE9]">{t('about.principles.trustResponsibility.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('about.principles.trustResponsibility.description')}</p>
          </div>

          {/* İş Birliği */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all h-[200px] flex flex-col relative">
            <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#8B1DB8]/10 dark:bg-[#477DE9]/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#8B1DB8] dark:text-white">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 dark:text-[#477DE9]">{t('about.principles.collaboration.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('about.principles.collaboration.description')}</p>
          </div>

          {/* Sürekli Gelişim */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all h-[200px] flex flex-col relative">
            <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#8B1DB8]/10 dark:bg-[#477DE9]/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#8B1DB8] dark:text-white">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="pr-14">
              <h3 className="text-2xl font-bold mb-4 dark:text-[#477DE9]">{t('about.principles.continuousImprovement.title')}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{t('about.principles.continuousImprovement.description')}</p>
          </div>

          {/* Şeffaflık */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all h-[200px] flex flex-col relative">
            <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#8B1DB8]/10 dark:bg-[#477DE9]/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#8B1DB8] dark:text-white">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 4 12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('about.principles.transparency.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('about.principles.transparency.description')}</p>
          </div>

          {/* Çözüm Odaklı */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all h-[200px] flex flex-col relative">
            <div className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#8B1DB8]/10 dark:bg-[#477DE9]/30">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#8B1DB8] dark:text-white">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('about.principles.solutionOriented.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('about.principles.solutionOriented.description')}</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {false && <section className="w-full max-w-[1200px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('about.team.title')}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">{t('about.team.description')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="relative group ">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/team/ryan-samuel.jpg"
                alt={t('about.team.member1.name')}
                width={400}
                height={400}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">{t('about.team.member1.name')}</h3>
              <p className="text-sm mb-4">{t('about.team.member1.role')}</p>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/team/ryan-samuel.jpg"
                alt={t('about.team.member2.name')}
                width={400}
                height={400}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">{t('about.team.member2.name')}</h3>
              <p className="text-sm mb-4">{t('about.team.member2.role')}</p>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/team/ryan-samuel.jpg"
                alt={t('about.team.member3.name')}
                width={400}
                height={400}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-1">{t('about.team.member3.name')}</h3>
              <p className="text-sm mb-4">{t('about.team.member3.role')}</p>
              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>}

      {/* Contact Section */}
      <section className="m-auto w-full flex-col-reverse justify-between rounded-[20px] bg-[#477DE9] px-5 py-10 md:flex-row md:items-center lg:rounded-[30px] lg:p-16 lg:px-[100px] flex max-w-[1200px] gap-9 [&>div>p]:!max-w-[60ch]">
        <div>
          <h2 className="transition font-bold text-white text-[2rem] leading-[2.5rem] md:text-[2.375rem] md:leading-[2.6875rem]">
            {t('about.contact.title')}
          </h2>
          <p className="transition font-inter text-white text-[1.125rem] leading-[1.625rem] md:text-[1.125rem] md:leading-[1.625rem] mt-6 max-w-[35ch]">
            {t('about.contact.description')}
          </p>
          <Button asChild variant="default" className="relative w-fit rounded-full px-8 py-[1.125rem] md:py-3 md:px-10 overflow-hidden border border-black hover:border-white bg-white text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black dark:before:bg-[#8B1DB8] before:transition-all before:duration-500 hover:text-white hover:shadow-black hover:before:left-0 hover:before:w-full mt-6">
            <Link href="/support">
              <span className="relative z-10">{t('about.contact.cta')}</span>
            </Link>
          </Button>
        </div>
        <span className="mx-auto md:mx-[unset] lg:block hidden">
          <img
            alt="Contact"
            loading="lazy"
            width={137}
            height={189}
            decoding="async"
            data-nimg={1}
            className="h-auto w-[200px] md:w-[470px]"
            style={{ color: 'transparent' }}
            src="/support-graphic.svg"
          />
        </span>
      </section>
    </main>
  )
}
