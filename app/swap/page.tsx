import React from 'react'
import { useTranslations } from 'next-intl'
import Iphone15Pro from '@/components/ui/iphone-15-pro'
import Link from 'next/link'


export default function Page() {
  const t = useTranslations('swap')

  return (
    <main className="md:px-10 px-5 mx-auto mb-6 mt-12 grid justify-items-center gap-y-10 md:mb-20 md:gap-y-20 lg:mt-16">
      {/* Hero Section */}
      <section className="grid w-full max-w-[1200px] gap-6 md:grid-cols-2 md:gap-8 md:gap-y-14">
        <div className="flex-col justify-center md:flex">
          <h1 className="transition text-black font-bold dark:text-white text-4xl md:leading-[3.75rem] leading-[2.8125rem] md:text-[3.25rem]">
            {t('title')}
          </h1>
          <p className="default-transition text-lightBlack font-inter dark:text-white text-[1.125rem] leading-[1.625rem] md:text-[1.125rem] md:leading-[1.625rem] my-4 md:my-6 md:max-w-[40ch]">
            {t('description')}
          </p>
        </div>
        <div className="relative flex items-center justify-center ">
          <div className="absolute   blur-2xl w-[300px] h-[300px] rounded-full bg-[#8B1DB8] dark:bg-[#477DE9] opacity-35 -z-10" />
          {/* <img src="/buy-screen.png" width={500} height={500} alt="Your Wallet Swap" className="mt-5 h-auto w-full max-w-[200px] self-center md:-mt-5 rounded-2xl " /> */}
          <div className='max-w-[200px]'>
            <Iphone15Pro
              className="size-full"
              src="/buy-screen.png"

            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-[1200px]">
        <ul className="grid gap-6 md:grid-cols-3">
          <li className="transition rounded-[20px] p-5 [transition-property:background-color,border-color] lg:rounded-[30px] lg:p-8 border border-[#8B1DB8] dark:border-[#477DE9] bg-white dark:bg-[#1b1b1c] relative overflow-hidden">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#8B1DB8] dark:bg-[#477DE9] bg-opacity-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" className="stroke-[#8B1DB8] dark:stroke-[#477DE9]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" className="stroke-[#8B1DB8] dark:stroke-[#477DE9]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" className="stroke-[#8B1DB8] dark:stroke-[#477DE9]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="transition text-black font-bold dark:text-white text-[1.375rem] leading-[1.875rem] md:text-[1.5625rem] md:leading-[1.6875rem]">
                {t('features.best_rates.title')}
              </h4>
            </div>
            <p className="transition font-inter text-start text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.625rem] text-black dark:text-white">
              {t('features.best_rates.description')}
            </p>
          </li>
          <li className="transition rounded-[20px] p-5 [transition-property:background-color,border-color] lg:rounded-[30px] lg:p-8 border border-[#8B1DB8] dark:border-[#477DE9] bg-white dark:bg-[#1b1b1c] relative overflow-hidden">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#8B1DB8] dark:bg-[#477DE9] bg-opacity-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1V23" className="stroke-[#8B1DB8] dark:stroke-[#477DE9]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" className="stroke-[#8B1DB8] dark:stroke-[#477DE9]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="transition text-black font-bold dark:text-white text-[1.375rem] leading-[1.875rem] md:text-[1.5625rem] md:leading-[1.6875rem]">
                {t('features.low_fees.title')}
              </h4>
            </div>
            <p className="transition font-inter text-start text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.625rem] text-black dark:text-white">
              {t('features.low_fees.description')}
            </p>
          </li>
          <li className="transition rounded-[20px] p-5 [transition-property:background-color,border-color] lg:rounded-[30px] lg:p-8 border border-[#8B1DB8] dark:border-[#477DE9] bg-white dark:bg-[#1b1b1c] relative overflow-hidden">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#8B1DB8] dark:bg-[#477DE9] bg-opacity-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" className="stroke-[#8B1DB8] dark:stroke-[#477DE9]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" className="stroke-[#8B1DB8] dark:stroke-[#477DE9]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="transition text-black font-bold dark:text-white text-[1.375rem] leading-[1.875rem] md:text-[1.5625rem] md:leading-[1.6875rem]">
                {t('features.secure.title')}
              </h4>
            </div>
            <p className="transition font-inter text-start text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.625rem] text-black dark:text-white">
              {t('features.secure.description')}
            </p>
          </li>
        </ul>
      </section>
      <section className="grid w-full max-w-[1200px] gap-6 md:min-h-[450px] md:grid-cols-2">
        <div className="transition rounded-[20px] p-5 [transition-property:background-color,border-color] lg:rounded-[30px] lg:p-8 border border-blue-500 bg-white dark:border-white dark:bg-black flex flex-col gap-5 md:justify-center md:gap-7">
          <h3 className="transition text-black font-bold dark:text-white text-[1.625rem] leading-[2rem] md:text-[1.875rem] md:leading-[2.0625rem] max-w-[18ch]">
            {t("process.title")}
          </h3>
          <div className="flex flex-col gap-4">
            <p className="transition text-black font-inter dark:text-white text-[1rem] leading-[1.5rem]">
              {t("process.steps.step1")}
            </p>
            <p className="transition text-black font-inter dark:text-white text-[1rem] leading-[1.5rem]">
              {t("process.steps.step2")}
            </p>
            <p className="transition text-black font-inter dark:text-white text-[1rem] leading-[1.5rem]">
              {t("process.steps.step3")}
            </p>
            <p className="transition text-black font-inter dark:text-white text-[1rem] leading-[1.5rem]">
              {t("process.steps.step4")}
            </p>
          </div>
          <Link href="/download" className="text-red hover:before:bg-redborder-red-500 relative w-fit rounded-full px-8 py-[1.125rem] md:py-3 md:px-10 flex overflow-hidden border border-black bg-white text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black dark:before:bg-[#477DE9] before:transition-all before:duration-500 hover:text-white hover:shadow-black hover:before:left-0 hover:before:w-full">
            <span className="relative z-10">{t("process.cta")}</span>
          </Link>
        </div>
        <div className="transition hidden overflow-hidden rounded-[20px] border border-blue-500 [transition-property:border-color] dark:border-white md:flex md:justify-center items-center gap-6 md:rounded-[30px]">
          <div className='max-w-[200px]'>
            <Iphone15Pro
              className="size-full"
              src="/onboarding-screen.png"

            />
          </div>
          <div className='max-w-[200px]'>
            <Iphone15Pro
              className="size-full"
              src="/buy-screen.png"

            />
          </div>
        </div>
      </section>
    </main>
  )
}
