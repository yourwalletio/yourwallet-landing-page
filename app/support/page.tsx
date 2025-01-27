import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export const metadata = {
  title: 'Your Wallet - Destek',
  description: 'Your Wallet destek merkezi - Sorularınızı yanıtlayalım ve size yardımcı olalım.',
  openGraph: {
    title: 'Your Wallet - Destek',
    description: 'Your Wallet destek merkezi - Sorularınızı yanıtlayalım ve size yardımcı olalım.',
    url: 'https://yourwallet.tr/support',
  },
}

export default function Page() {
  const t = useTranslations('support')

  return (
    <main className="md:px-10 px-5 mx-auto mb-6 mt-12 grid justify-items-center gap-y-10 md:mb-20 md:gap-y-20 lg:mt-16">
      <section className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-5">{t('title')}</h1>
        <p className="text-center text-gray-600  dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          {t('description')}
        </p>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {t.raw('faq').map((item: any, index: number) => (
            <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`} className="border rounded-lg">
              <AccordionTrigger className="hover:no-underline px-4 text-xl border-b rounded-lg">
                <span className="text-left">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 text-gray-600  dark:text-gray-400 text-lg py-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <section className="grid w-full max-w-[1200px] gap-6 md:min-h-[450px] md:grid-cols-2">
        <div className="transition rounded-[20px] p-5 [transition-property:background-color,border-color] lg:rounded-[30px] lg:p-8 border border-blue-500 bg-white dark:border-white dark:bg-black flex flex-col gap-5 md:justify-center md:gap-7">
          <h3 className="transition text-black font-bold dark:text-white text-[1.625rem] leading-[2rem] md:text-[1.875rem] md:leading-[2.0625rem] max-w-[18ch]">
            {t("contact.title")}
          </h3>
          <p className="transition text-black font-inter dark:text-white text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem]">
            {t("contact.description")}
          </p>
          <Link href="mailto:support@yourwallet.tr" className="text-red hover:before:bg-redborder-red-500 relative w-fit rounded-full px-8 py-[1.125rem] md:py-3 md:px-10 flex overflow-hidden border border-black bg-white text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black dark:before:bg-[#477DE9] before:transition-all before:duration-500 hover:text-white hover:shadow-black hover:before:left-0 hover:before:w-full">
            <span className="relative z-10">{t("contact.button")}</span>
          </Link>
        </div>
        <div className="transition hidden overflow-hidden rounded-[20px] border border-blue-500 bg-[#171717] [transition-property:border-color] dark:border-white md:flex md:justify-center items-center md:rounded-[30px]">
          <img
            src="/support-illustration.svg"
            alt='Your Wallet Support Image'
            className="w-full h-auto object-contain p-8"
          />
        </div>
      </section>
    </main>
  )
}
