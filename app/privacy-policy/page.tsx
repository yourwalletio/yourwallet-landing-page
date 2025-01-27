import React from 'react'
import { useTranslations } from 'next-intl'

export const metadata = {
  title: 'Your Wallet - Gizlilik Politikası',
  description: 'Your Wallet gizlilik politikası - Verilerinizin nasıl korunduğunu ve kullanıldığını öğrenin.',
  openGraph: {
    title: 'Your Wallet - Gizlilik Politikası',
    description: 'Your Wallet gizlilik politikası - Verilerinizin nasıl korunduğunu ve kullanıldığını öğrenin.',
    url: 'https://yourwallet.tr/privacy-policy',
  },
}

export default function Page() {
    const t = useTranslations('privacy')
    
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

            <section className="w-full max-w-[1200px]">
                <h2 className="transition text-black font-bold dark:text-white text-[1.1875rem] leading-[1.375rem] md:text-[1.125rem] md:leading-[1.1875rem] mb-5 text-trustBlue dark:!text-trustGreen md:mb-4">
                    {t('overview.title')}</h2>
                <p className="transition text-gray-700 dark:text-white text-mobileBodyMedium leading-mobileBodyMedium md:text-desktopBodyMedium md:leading-desktopBodyMedium">
                    {t('overview.content')}
                </p>
            </section>

            <section className="w-full max-w-[1200px]">
                <h2 className="transition text-black font-bold dark:text-white text-[1.1875rem] leading-[1.375rem] md:text-[1.125rem] md:leading-[1.1875rem] mb-5 text-trustBlue dark:!text-trustGreen md:mb-4">
                    {t('acceptance.title')}</h2>
                <p className="transition text-gray-700 dark:text-white text-mobileBodyMedium leading-mobileBodyMedium md:text-desktopBodyMedium md:leading-desktopBodyMedium">
                    {t('acceptance.content')}
                </p>
            </section>

            <section className="w-full max-w-[1200px]">
                <h2 className="transition text-black font-bold dark:text-white text-[1.1875rem] leading-[1.375rem] md:text-[1.125rem] md:leading-[1.1875rem] mb-5 text-trustBlue dark:!text-trustGreen md:mb-4">
                    {t('collection.title')}</h2>
                <p className="transition text-gray-700 dark:text-white text-mobileBodyMedium leading-mobileBodyMedium md:text-desktopBodyMedium md:leading-desktopBodyMedium">
                    {t('collection.content')}
                </p>
            </section>

            <section className="w-full max-w-[1200px]">
                <h2 className="transition text-black font-bold dark:text-white text-[1.1875rem] leading-[1.375rem] md:text-[1.125rem] md:leading-[1.1875rem] mb-5 text-trustBlue dark:!text-trustGreen md:mb-4">
                    {t('sharing.title')}</h2>
                <p className="transition text-gray-700 dark:text-white text-mobileBodyMedium leading-mobileBodyMedium md:text-desktopBodyMedium md:leading-desktopBodyMedium">
                    {t('sharing.content')}
                </p>
            </section>

            <section className="w-full max-w-[1200px]">
                <h2 className="transition text-black font-bold dark:text-white text-[1.1875rem] leading-[1.375rem] md:text-[1.125rem] md:leading-[1.1875rem] mb-5 text-trustBlue dark:!text-trustGreen md:mb-4">
                    {t('usage.title')}</h2>
                <p className="transition text-gray-700 dark:text-white text-mobileBodyMedium leading-mobileBodyMedium md:text-desktopBodyMedium md:leading-desktopBodyMedium">
                    {t('usage.content')}
                </p>
            </section>

            <section className="w-full max-w-[1200px]">
                <h2 className="transition text-black font-bold dark:text-white text-[1.1875rem] leading-[1.375rem] md:text-[1.125rem] md:leading-[1.1875rem] mb-5 text-trustBlue dark:!text-trustGreen md:mb-4">
                    {t('rights.title')}</h2>
                <p className="transition text-gray-700 dark:text-white text-mobileBodyMedium leading-mobileBodyMedium md:text-desktopBodyMedium md:leading-desktopBodyMedium">
                    {t('rights.content')}
                </p>
            </section>

            <section className="w-full max-w-[1200px]">
                <h2 className="transition text-black font-bold dark:text-white text-[1.1875rem] leading-[1.375rem] md:text-[1.125rem] md:leading-[1.1875rem] mb-5 text-trustBlue dark:!text-trustGreen md:mb-4">
                    {t('retention.title')}</h2>
                <p className="transition text-gray-700 dark:text-white text-mobileBodyMedium leading-mobileBodyMedium md:text-desktopBodyMedium md:leading-desktopBodyMedium">
                    {t('retention.content')}
                </p>
            </section>

            <section className="w-full max-w-[1200px]">
                <h2 className="transition text-black font-bold dark:text-white text-[1.1875rem] leading-[1.375rem] md:text-[1.125rem] md:leading-[1.1875rem] mb-5 text-trustBlue dark:!text-trustGreen md:mb-4">
                    {t('security.title')}</h2>
                <p className="transition text-gray-700 dark:text-white text-mobileBodyMedium leading-mobileBodyMedium md:text-desktopBodyMedium md:leading-desktopBodyMedium">
                    {t('security.content')}
                </p>
            </section>

            <section className="w-full max-w-[1200px]">
                <h2 className="transition text-black font-bold dark:text-white text-[1.1875rem] leading-[1.375rem] md:text-[1.125rem] md:leading-[1.1875rem] mb-5 text-trustBlue dark:!text-trustGreen md:mb-4">
                    {t('children.title')}</h2>
                <p className="transition text-gray-700 dark:text-white text-mobileBodyMedium leading-mobileBodyMedium md:text-desktopBodyMedium md:leading-desktopBodyMedium">
                    {t('children.content')}
                </p>
            </section>

            <section className="w-full max-w-[1200px]">
                <h2 className="transition text-black font-bold dark:text-white text-[1.1875rem] leading-[1.375rem] md:text-[1.125rem] md:leading-[1.1875rem] mb-5 text-trustBlue dark:!text-trustGreen md:mb-4">
                    {t('updates.title')}</h2>
                <p className="transition text-gray-700 dark:text-white text-mobileBodyMedium leading-mobileBodyMedium md:text-desktopBodyMedium md:leading-desktopBodyMedium">
                    {t('updates.content')}
                </p>
            </section>

            <section className="w-full max-w-[1200px]">
                <h2 className="transition text-black font-bold dark:text-white text-[1.1875rem] leading-[1.375rem] md:text-[1.125rem] md:leading-[1.1875rem] mb-5 text-trustBlue dark:!text-trustGreen md:mb-4">
                    {t('contact.title')}</h2>
                <p className="transition text-gray-700 dark:text-white text-mobileBodyMedium leading-mobileBodyMedium md:text-desktopBodyMedium md:leading-desktopBodyMedium">
                    {t('contact.content')}
                </p>
                <ol className="my-4 list-disc pl-5 text-black dark:text-white">
                    <li>
                        <p className="transition text-gray-700 dark:text-white text-mobileBodyMedium leading-mobileBodyMedium md:text-desktopBodyMedium md:leading-desktopBodyMedium">
                            {t('contact.email')}
                        </p>
                    </li>
                </ol>
            </section>
        </main>
    )
}
