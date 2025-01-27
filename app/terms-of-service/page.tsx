import React from 'react'
import { useTranslations } from 'next-intl'

export default function TermsOfService() {
    const t = useTranslations('terms')
    
    return (
        <main className="md:px-10 px-5 mx-auto mb-6 mt-12 grid justify-items-center gap-y-10 md:mb-20 md:gap-y-20 lg:mt-16">
            <section className="flex w-full max-w-[1200px] flex-col justify-start rounded-[20px] lg:rounded-[30px]">
                <h1 className="transition text-black font-bold dark:text-white text-[2.375rem] leading-[2.8125rem] md:text-[3.25] md:leading-[3.75]">
                    {t('title')}
                </h1>
                <p className="transition text-gray-700 dark:text-white text-[1.125rem] leading-[1.625rem] md:text-[1.125rem] md:leading-[1.625rem] max-w-[35ch]">
                    {t('lastUpdated')}
                </p>
            </section>

            {[
                'general',
                'eligibility',
                'account',
                'wallet',
                'transactions',
                'prohibited',
                'intellectual',
                'liability',
                'termination',
                'law',
                'contact'
            ].map((section) => (
                <section key={section} className="w-full max-w-[1200px]">
                    <h2 className="transition text-black font-bold dark:text-white text-[1.1875rem] leading-[1.375rem] md:text-[1.125rem] md:leading-[1.1875rem] mb-5 text-trustBlue dark:!text-trustGreen md:mb-4">
                        {t(`${section}.title`)}
                    </h2>
                    <p className="transition text-gray-700 dark:text-white text-mobileBodyMedium leading-mobileBodyMedium md:text-desktopBodyMedium md:leading-desktopBodyMedium">
                        {t(`${section}.content`)}
                    </p>
                </section>
            ))}
        </main>
    )
}
