import Link from 'next/link'
import React from 'react'
import { useTranslations } from 'next-intl'

export const metadata = {
  title: 'Your Wallet - İndir',
  description: 'Your Wallet mobil uygulamasını indirin ve kripto para dünyasına güvenli bir şekilde adım atın.',
  openGraph: {
    title: 'Your Wallet - İndir',
    description: 'Your Wallet mobil uygulamasını indirin ve kripto para dünyasına güvenli bir şekilde adım atın.',
    url: 'https://yourwallet.tr/download',
  },
}

export default function Page() {
  const t = useTranslations('download')

  return (
    <main className="md:px-10 px-5 mx-auto mb-6 mt-12 grid justify-items-center gap-y-10 md:mb-20 md:gap-y-20 lg:mt-16">
      <section className='flex flex-col items-center justify-center'>
        <h1 className='transition text-black font-bold dark:text-white text-4xl md:text-5xl'>
          {t('title')}
        </h1>
        <p className='className="transition text-gray-700 dark:text-white text-lg'>
          {t('subtitle')}
        </p>
      </section>
      <section className="w-full max-w-[1000px]">
        <ul className="grid gap-6 lg:grid-cols-2 lg:flex-row">
          <li className="default-transition rounded-[20px] border border-tintBlue bg-[linear-gradient(323deg,#F4F4F7,rgba(244,244,247,0.00)100%)] p-7 dark:border-tintBlack dark:bg-[linear-gradient(324deg,rgba(219,220,229,0.20)0%,rgba(219,220,229,0.00)100%)] lg:rounded-[30px] lg:p-10 flex-1 lg:min-h-[310px]">
            <Link className="grid w-full gap-4 lg:gap-7" href="#">
              <img alt="App Store" fetchPriority="high" width={86} height={86} decoding="async" className="" src="/appstore.png" style={{ color: 'transparent' }} />
              <h3 className="default-transition text-black font-bold dark:text-white text-xl lg:text-3xl tracking-tight">
                {t('ios.title')}</h3>
              <p className="default-transition text-gray-700 dark:text-white lg:text-lg ">
                {t('ios.description')}
              </p>
            </Link></li>
          <li className="default-transition rounded-[20px] border border-tintBlue bg-[linear-gradient(323deg,#F4F4F7,rgba(244,244,247,0.00)100%)] p-7 dark:border-tintBlack dark:bg-[linear-gradient(324deg,rgba(219,220,229,0.20)0%,rgba(219,220,229,0.00)100%)] lg:rounded-[30px] lg:p-10 flex-1 lg:min-h-[310px]">
            <Link className="grid w-full gap-4 lg:gap-7" href="#">
              <img alt="App Store" fetchPriority="high" width={86} height={77} decoding="async" data-nimg={1} className="h-[65px] w-[58px] lg:h-[65px] lg:w-[58px]" src="/google-play.webp" style={{ color: 'transparent' }} />
              <h3 className="default-transition text-black font-bold dark:text-white text-xl lg:text-3xl tracking-tight">
                {t('android.title')}</h3>
              <p className="default-transition text-gray-700 dark:text-white lg:text-lg ">
                {t('android.description')}</p>
            </Link></li>

          <li className="default-transition rounded-[20px] border border-tintBlue bg-[linear-gradient(323deg,#F4F4F7,rgba(244,244,247,0.00)100%)] p-7 dark:border-tintBlack dark:bg-[linear-gradient(324deg,rgba(219,220,229,0.20)0%,rgba(219,220,229,0.00)100%)] lg:rounded-[30px] lg:p-10 flex-1 lg:min-h-[310px]">
            <Link className="grid w-full gap-4 lg:gap-7" href="#">
              <svg width={20} height={23} viewBox="0 0 20 23" fill="none" className="default-transition h-[58px] w-[58px] text-trustBlue [transition-property:color] dark:text-trustGreen lg:h-[65px] lg:w-[65px]">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.1661 2.03226L12.9174 2.39815C14.8051 3.25494 16.083 4.87765 16.083 6.73464H3.62062C3.62062 4.87765 4.89853 3.25494 6.7876 2.39815L6.53741 2.03226L6.28858 1.67167L5.73418 0.860934C5.6666 0.760914 5.69497 0.626695 5.79642 0.560918C5.89917 0.495053 6.03709 0.521407 6.10605 0.621428L6.70103 1.49008L6.95122 1.85457L7.20409 2.22572C8.00869 1.92171 8.90658 1.75195 9.85177 1.75195C10.7984 1.75195 11.6949 1.92171 12.4995 2.22572L12.7537 1.85457L13.6002 0.621428C13.6665 0.521407 13.8058 0.493753 13.9072 0.560918C14.0099 0.626695 14.0384 0.760914 13.9694 0.860934L13.4149 1.67167L13.1661 2.03226ZM3.62062 7.60078H3.71665H16.083V17.132C16.083 17.8887 15.4528 18.5046 14.6739 18.5046H13.6557C13.6908 18.6191 13.7111 18.7389 13.7111 18.8652V21.6093C13.7111 22.3266 13.112 22.9083 12.3737 22.9083C11.6368 22.9083 11.0391 22.3266 11.0391 21.6093V18.8652C11.0391 18.7389 11.058 18.6191 11.0918 18.5046H8.61176C8.64555 18.6191 8.66584 18.7389 8.66584 18.8652V21.6093C8.66584 22.3266 8.06682 22.9083 7.32988 22.9083C6.59286 22.9083 5.99384 22.3266 5.99384 21.6093V18.8652C5.99384 18.7389 6.01275 18.6191 6.04792 18.5046H5.03103C4.25214 18.5046 3.62062 17.8887 3.62062 17.132V7.60078ZM1.39463 7.60078C0.65632 7.60078 0.0585938 8.18254 0.0585938 8.89976V14.4603C0.0585938 15.1776 0.65632 15.7593 1.39463 15.7593C2.13157 15.7593 2.7293 15.1776 2.7293 14.4603V8.89976C2.7293 8.18254 2.13157 7.60078 1.39463 7.60078ZM16.9739 8.89976C16.9739 8.18254 17.5716 7.60078 18.31 7.60078C19.0469 7.60078 19.6446 8.18254 19.6446 8.89976V14.4603C19.6446 15.1776 19.0469 15.7593 18.31 15.7593C17.5716 15.7593 16.9739 15.1776 16.9739 14.4603V8.89976ZM6.09745 5.00125C5.72833 5.00125 5.42961 4.71049 5.42961 4.35126C5.42961 3.99203 5.72833 3.70262 6.09745 3.70262C6.4665 3.70262 6.76529 3.99203 6.76529 4.35126C6.76529 4.71049 6.4665 5.00125 6.09745 5.00125ZM10.7712 4.35126C10.7712 4.71049 11.07 5.00125 11.4391 5.00125C11.8081 5.00125 12.1069 4.71049 12.1069 4.35126C12.1069 3.99203 11.8081 3.70262 11.4391 3.70262C11.07 3.70262 10.7712 3.99203 10.7712 4.35126Z" style={{ fill: 'currentcolor' }} />
              </svg>
              <h3 className="default-transition text-black font-bold dark:text-white text-xl lg:text-3xl tracking-tight">
                {t('apk.title')}</h3>
              <p className="default-transition text-gray-700 dark:text-white lg:text-lg ">
                {t('apk.description')}</p>
            </Link></li>
        </ul>
      </section>
    </main>
  )
}
