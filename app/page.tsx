import { Button } from "@/components/ui/button";
import { CircleCheck, CircleX, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";

const blockchainData = [
  {
    name: "Bitcoin (BTC)",
    symbol: "BTC",
    logo: "/network/btc.webp",
    features: {
      buy: true,
      sell: true,
      swap: true,
      earn: false,
      dapps: false
    }
  },
  {
    name: "Terra (LUNA)",
    symbol: "LUNA",
    logo: "/network/terra.webp",
    features: {
      buy: true,
      sell: true,
      swap: true,
      earn: true,
      dapps: true
    }
  },
  {
    name: "Binance Smart Chain (BSC)",
    symbol: "BSC",
    logo: "/network/bsc.webp",
    features: {
      buy: true,
      sell: true,
      swap: true,
      earn: true,
      dapps: true
    }
  },
  {
    name: "Sui (SUI)",
    symbol: "SUI",
    logo: "/network/sui.webp",
    features: {
      buy: true,
      sell: true,
      swap: true,
      earn: true,
      dapps: true
    }
  },
  {
    name: "Ethereum (ETH)",
    symbol: "ETH",
    logo: "/network/eth.webp",
    features: {
      buy: true,
      sell: true,
      swap: true,
      earn: true,
      dapps: true
    }
  },
  {
    name: "Avalanche (AVAX)",
    symbol: "AVAX",
    logo: "/network/avax.webp",
    features: {
      buy: true,
      sell: true,
      swap: true,
      earn: true,
      dapps: true
    }
  },
  {
    name: "Solana (SOL)",
    symbol: "SOL",
    logo: "/network/sol.webp",
    features: {
      buy: true,
      sell: true,
      swap: true,
      earn: true,
      dapps: true
    }
  },
  {
    name: "Ripple",
    symbol: "XRP",
    logo: "/network/ripple.png",
    features: {
      buy: true,
      sell: true,
      swap: true,
      earn: true,
      dapps: true
    }
  },
];

const partnershipsData = [
  {
    name: "Wirex",
    logo: "/partnerships/wirex.svg",
    alt: "Wirex",
    link: "https://wirexapp.com",
    taglineKey: "home.partnerships.partners.wirex",
  },
  {
    name: "Solana",
    logo: "/network/sol.webp",
    alt: "Solana",
    link: "https://solana.com",
    taglineKey: "home.partnerships.partners.solana",
  },
  {
    name: "Jupiter",
    logo: "/partnerships/jupiter.svg",
    alt: "Jupiter",
    link: "https://jup.ag",
    taglineKey: "home.partnerships.partners.jupiter",
  },
  {
    name: "WalletConnect",
    logo: "/partnerships/walletconnect.svg",
    alt: "WalletConnect",
    link: "https://walletconnect.com",
    taglineKey: "home.partnerships.partners.walletconnect",
  },
];

const vaultSteps = ["choose", "deposit", "earn", "withdraw"] as const;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata')

  return {
    title: "Your Wallet",
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('og.description'),
      url: 'https://yourwallet.tr',
      images: [
        {
          url: 'https://yourwallet.tr/og-preview.png',
          width: 1200,
          height: 630,
          alt: t('og.alt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: 'https://yourwallet.tr',
      title: t('title'),
      description: t('twitter.description'),
      images: ['https://yourwallet.tr/og-preview.png'],
    },
  }
}

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <main className="md:px-10 px-5 mx-auto mb-6 mt-12 grid justify-items-center gap-y-10 md:mb-20 md:gap-y-20 lg:mt-28">
        <div className="flex items-center justify-center h-[80vh]">
          <section className="grid w-full max-w-[1200px] gap-6 md:grid-cols-2 md:gap-8 md:gap-y-14 relative z-10">
            <div className="flex-col justify-center md:flex h-full">
              <TextGenerateEffect
                words={t("home.hero.title")}
                className="text-black font-extrabold dark:text-white text-4xl   md:text-5xl fo  "
              />
              <p className="default-transition text-lightBlack font-inter dark:text-white text-[1.125rem] leading-[1.625rem] md:text-[1.125rem] md:leading-[1.625rem] my-4 md:my-6 md:max-w-[40ch]">
                {t("home.hero.description")}
              </p>
              <Button asChild className="md:hidden flex">
                <Link href={"/"}>
                  {t("home.hero.download_mobile")}
                </Link>
              </Button>
              <div className="hidden gap-5 md:flex">
                <Link href={"/download"} className="transition  flex h-[60px] cursor-pointer items-center gap-3 rounded-full border border-[#8B1DB8] px-6 text-left text-[#8B1DB8] hover:bg-[#8B1DB8] hover:!text-white dark:border-[#477DE9] dark:text-[#477DE9] dark:hover:bg-[#477DE9] dark:hover:!text-black">
                  <svg width={24} height={38} viewBox="0 0 24 38" fill="none">
                    <rect x="1.11502" y="1.42361" width="21.855" height="35.5365" rx="3.76845" style={{ stroke: 'currentcolor' }} strokeWidth="1.50738" />
                    <rect x="7.69141" y="32.7539" width="8.49887" height="1.59374" style={{ fill: 'currentcolor' }} />
                  </svg>

                  <div className="flex-col flex items-start">
                    <span className="text-xs  ">
                      {t('download.button')}
                    </span>
                    <span className="text-xs ">
                      {t('download.mobile_app')}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute -top-14 blur-2xl w-[400px] h-[400px] rounded-full bg-[#8B1DB8] dark:bg-[#477DE9] opacity-35 -z-10" />
              <img src="/group-40.png" alt="Your Wallet Mobile App" className="mt-5 h-auto w-full max-w-[440px] self-center md:-mt-5" />
            </div>
          </section>
        </div>

        {false && <div className="flex flex-wrap items-center justify-center gap-12 text-center md:col-start-1 md:col-end-3 lg:flex-nowrap lg:items-start lg:gap-24 [&>h4>span]:text-[#8B1DB8] [&>h4>span]:dark:text-[#477DE9]">
          <h4 className="transition text-black font-bold dark:text-white text-xl md:text-2xl">
            <span>{t("home.hero.stats.trusted")}</span>
          </h4>
          <h4 className="transition text-black font-bold dark:text-white text-xl md:text-2xl">
            <span>{t("home.hero.stats.founded")}</span>
          </h4>
          <h4 className="transition text-black font-bold dark:text-white text-xl md:text-2xl">
            <span>{t("home.hero.stats.audited")}</span>
          </h4>
          <h4 className="transition text-black font-bold dark:text-white text-xl md:text-2xl">
            <span>{t("home.hero.stats.certified")}</span>
          </h4>
          <h4 className="transition text-black font-bold dark:text-white text-xl md:text-2xl">
            <span>{t("home.hero.stats.ratings")}</span>
            <div className="flex gap-2 items-center justify-center">
              <Star className="text-[#8B1DB8] dark:text-[#477DE9]" />
              <Star className="text-[#8B1DB8] dark:text-[#477DE9]" />
              <Star className="text-[#8B1DB8] dark:text-[#477DE9]" />
              <Star className="text-[#8B1DB8] dark:text-[#477DE9]" />
              <Star className="text-[#8B1DB8] dark:text-[#477DE9]" />
            </div>
          </h4>
        </div>}
                <section className="w-full max-w-[1200px]">
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="text-3xl font-bold text-black dark:text-white md:text-5xl">{t("home.showcase.title")}</h2>
            <p className="mx-auto mt-4 max-w-[58ch] text-base leading-7 text-black/70 dark:text-white/70">{t("home.showcase.description")}</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { src: "/onboarding-screen.png", alt: "Your Wallet welcome screen", key: "welcome" },
              { src: "/deposit-screen.png", alt: "Deposit screen in Your Wallet", key: "deposit" },
              { src: "/buy-screen.png", alt: "Swap screen in Your Wallet", key: "swap" },
            ].map((item) => (
              <article key={item.key} className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-[#141416]">
                <div className="bg-[#120818] px-8 pt-8">
                  <Image src={item.src} alt={item.alt} width={640} height={900} className="mx-auto h-[340px] w-auto rounded-t-[28px] object-cover object-top shadow-2xl" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black dark:text-white">{t(`home.showcase.${item.key}.title`)}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/65 dark:text-white/70">{t(`home.showcase.${item.key}.description`)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

<section className="md:w-full w-screen -mx-5 md:max-w-[1200px]  bg-gradient-to-t from-green-300 to-green-600 px-5 !py-10 !pb-20 !pt-32 rounded-[10px] md:rounded-[20px] md:!px-10 md:!py-20 md:!pt-32 md:!pb-16 z-20">
          <div className="mx-auto w-full max-w-[1000px]">
            <h2 className="default-transition text-white font-bold dark:text-white text-[2.375rem] leading-[3.25rem] md:text-[3.25rem] md:leading-[3.25rem] 
            text-center  
          ">
              {t("home.chains.title")}
            </h2>
            <p className="transition font-inter dark:text-white text-[1.125rem] leading-[1.125rem] md:text-[1.125rem] md:leading-[1.625rem] mx-auto mb-10 mt-4 max-w-[70ch] text-center !text-white md:mt-6 max:mb-14">
              {t("home.chains.description")}
            </p>

            {/* <span className="relative block">
            <input type="text" placeholder={t("home.chains.search_placeholder")} className="transition h-[60px] w-full rounded-full bg-white px-16 text-[1.125rem] leading-[1.625rem] text-black " />
            <Search size={24} className="absolute left-8 top-2/4 -translate-y-2/4" color="black" />
          </span> */}
            <div className="mx-auto mt-5 w-full max-w-[1000px] rounded-[20px] bg-white px-6 py-10 md:rounded-[30px] md:py-12">
              <div className="mb-7 hidden max-w-[850px] items-center md:flex">
                <p className="transition  font-inter dark:text-white text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] !text-black">
                  {t("home.chains.chain")}
                </p>
                <div className="ml-auto flex w-[55%] items-center justify-between">
                  <p className="transition  font-inter dark:text-white text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] !text-black">{t("home.chains.buy")}</p>
                  <p className="transition  font-inter dark:text-white text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] !text-black">{t("home.chains.sell")}</p>
                  <p className="transition  font-inter dark:text-white text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] !text-black">{t("home.chains.swap")}</p>
                  <p className="transition  font-inter dark:text-white text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] !text-black">{t("home.chains.earn")}</p>
                  <p className="transition  font-inter dark:text-white text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] !text-black">{t("home.chains.dapps")}</p>
                </div>
              </div>
              <div className="h-auto overflow-hidden">
                <ul className="transition grid h-full min-h-[1px] max-w-[850px] gap-6">
                  {blockchainData.map((chain, index) => (
                    <li key={index} className="flex flex-col md:flex-row md:items-center">
                      <div className="flex items-center gap-5">
                        <Image alt={chain.symbol} src={chain.logo} width={45} height={45} className="rounded-full h-10 w-10" />
                        <span className="transition font-inter dark:text-white text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] inline-block !text-black !opacity-100">
                          {chain.name}
                        </span>
                      </div>
                      <div className="ml-auto hidden w-[55%] items-center justify-between md:flex">
                        {chain.features.buy ? <CircleCheck className="h-5 w-5 text-[#8B1DB8] dark:text-[#477DE9]" /> : <CircleX className="h-5 w-5 text-black" />}
                        {chain.features.sell ? <CircleCheck className="h-5 w-5 text-[#8B1DB8] dark:text-[#477DE9]" /> : <CircleX className="h-5 w-5 text-black" />}
                        {chain.features.swap ? <CircleCheck className="h-5 w-5 text-[#8B1DB8] dark:text-[#477DE9]" /> : <CircleX className="h-5 w-5 text-black" />}
                        {chain.features.earn ? <CircleCheck className="h-5 w-5 text-[#8B1DB8] dark:text-[#477DE9]" /> : <CircleX className="h-5 w-5 text-black" />}
                        {chain.features.dapps ? <CircleCheck className="h-5 w-5 text-[#8B1DB8] dark:text-[#477DE9]" /> : <CircleX className="h-5 w-5 text-black" />}
                      </div>
                      <div className="ml-[65px] grid gap-3 md:hidden">
                        <div className="flex items-center justify-between">
                          <span className="transition font-inter dark:text-white text-[1rem] leading-[1.125rem] !text-black">{t("home.chains.buy")}</span>
                          {chain.features.buy ? <CircleCheck className="h-5 w-5 text-[#8B1DB8] dark:text-[#477DE9]" /> : <CircleX className="h-5 w-5 text-black" />}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="transition font-inter dark:text-white text-[1rem] leading-[1.125rem] !text-black">{t("home.chains.sell")}</span>
                          {chain.features.sell ? <CircleCheck className="h-5 w-5 text-[#8B1DB8] dark:text-[#477DE9]" /> : <CircleX className="h-5 w-5 text-black" />}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="transition font-inter dark:text-white text-[1rem] leading-[1.125rem] !text-black">{t("home.chains.swap")}</span>
                          {chain.features.swap ? <CircleCheck className="h-5 w-5 text-[#8B1DB8] dark:text-[#477DE9]" /> : <CircleX className="h-5 w-5 text-black" />}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="transition font-inter dark:text-white text-[1rem] leading-[1.125rem] !text-black">{t("home.chains.earn")}</span>
                          {chain.features.earn ? <CircleCheck className="h-5 w-5 text-[#8B1DB8] dark:text-[#477DE9]" /> : <CircleX className="h-5 w-5 text-black" />}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="transition font-inter dark:text-white text-[1rem] leading-[1.125rem] !text-black">{t("home.chains.dapps")}</span>
                          {chain.features.dapps ? <CircleCheck className="h-5 w-5 text-[#8B1DB8] dark:text-[#477DE9]" /> : <CircleX className="h-5 w-5 text-black" />}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="md:w-full w-screen -mx-5 md:max-w-[1200px] rounded-[10px] bg-gradient-to-t from-[#ff77a8] to-[#a8e1ff] px-5  !py-10  !pb-20  !pt-32 md:rounded-[20px] md:!px-10 md:!py-20  md:!pt-32 md:!pb-16 z-10 -mt-32 md:-mt-32 ">
          <div className="mx-auto w-full max-w-[1000px]">
            <h2 className="default-transition text-black font-bold  text-[2.375rem] leading-[3.25rem] md:text-[3.25rem] md:leading-[3.25rem] 
            text-center  
          ">
              {t("home.simple.title")}
            </h2>
            <p className="transition font-inter text-[1.125rem] leading-[1.125rem] md:text-[1.125rem] md:leading-[1.625rem] mx-auto mb-10 mt-4 max-w-[70ch] text-center !text-black md:mt-6 max:mb-14">
              {t("home.simple.description")}
            </p>
            <div className="transition rounded-[20px] p-5 [transition-property:background-color,border-color] lg:rounded-[30px] lg:p-8  border border-[#8B1DB8] bg-white dark:bg-black dark:border-black relative m-auto mt-6 flex w-full max-w-[1200px] flex-col-reverse justify-between gap-7 text-left md:flex-row md:items-center md:!py-14">
              <div>
                <h3 className="transition text-black font-bold dark:text-white text-[1.625rem] leading-[2rem] md:text-[1.875rem] md:leading-[2.0625rem] max-w-[18ch]">{t("home.simple.deposit.title")}</h3>
                <p className="transition text-black font-inter dark:text-white text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] my-5 max-w-[40ch]">{t("home.simple.deposit.description")}</p>
                <Button asChild variant={"outline"} className="px-8 py-[1.75rem] md:py-5 md:px-10  border-[#8B1DB8] dark:border-[#477DE9] dark:hover:text-white text-[#8B1DB8] dark:text-[#477DE9] hover:bg-[#8B1DB8] dark:hover:bg-[#477DE9] hover:text-white  rounded-full text-sm md:text-[15px] ">
                  <Link href={"/swap"}>
                    {t("home.simple.deposit.cta")}
                  </Link>
                </Button>
              </div>

              <img alt="Blue Shield" loading="lazy" width={712} height={518} decoding="async" data-nimg={1} className="h-auto w-full rounded-[20px] bg-[#D9D9D9] dark:bg-black   md:w-[50%]   lg:max-w-[400px]    lg:!bg-[transparent] " src="/group-39.png" style={{ color: 'transparent' }} />


            </div>
          </div>
        </section>

        <section className="md:w-full w-screen -mx-5 md:max-w-[1200px] rounded-[20px] bg-gradient-to-t from-[#00ffcc] to-[#ff00ff] px-5 !py-10 !pb-20 !pt-32 md:rounded-[30px] md:!px-10 md:!py-20 md:!pt-32 md:!pb-16 -mt-32 md:-mt-32 ">
          <div className="mx-auto w-full max-w-[1000px]">
            <h2 className="default-transition text-black font-bold  text-[2.375rem] leading-[3.25rem] md:text-[3.25rem] md:leading-[3.25rem] 
            text-center  
          ">
              {t("home.security.title")}
            </h2>
            <p className="transition font-inter text-[1rem] leading-[1.125rem] md:text-[1.125rem] md:leading-[1.625rem] mx-auto mb-10 mt-4 max-w-[70ch] text-center !text-black md:mt-6 max:mb-14">
              {t("home.security.description")}
            </p>
            <div className="transition rounded-[20px] p-5 [transition-property:background-color,border-color] lg:rounded-[30px] lg:p-8  border border-[#8B1DB8] bg-white dark:bg-black dark:border-black relative m-auto mt-6 flex w-full max-w-[1200px] flex-col-reverse justify-between gap-7 text-left md:flex-row md:items-center md:!py-14">
              <div>
                <h3 className="transition text-black font-bold dark:text-white text-[1.625rem] leading-[2rem] md:text-[1.875rem] md:leading-[2.0625rem] max-w-[18ch]">{t("home.security.ownership.title")}</h3>
                <p className="transition text-black font-inter dark:text-white text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem] my-5 max-w-[40ch]">{t("home.security.ownership.description")}</p>
                <Button asChild variant={"default"} className="px-8 py-[1.75rem] md:py-5 md:px-10 bg-[#8B1DB8] dark:bg-[#477DE9] hover:bg-[#477DE9] dark:hover:bg-[#8B1DB8] text-white rounded-full text-[15px] ">
                  <Link href={"/download"}>
                    {t("home.security.ownership.cta")}
                  </Link>
                </Button>
              </div>
              <img alt="Blue Shield" loading="lazy" width={284} height={249} decoding="async" data-nimg={1} className="mx-auto h-auto w-full max-w-[380px]" src="/collect-illustration.svg" style={{ color: 'transparent' }} />

            </div>
            <div className="mx-auto mt-6 flex max-w-[1200px] flex-wrap items-stretch justify-center gap-6">

              <CardSpotlight className="h-auto w-80    rounded-3xl md:rounded-[30px]   flex-1  flex-col items-center justify-between  ">
                <h4 className="transition font-bold text-white text-[1.375rem] leading-[1.875rem] md:text-[1.5625rem] md:leading-[1.6875rem]  relative z-20">
                  {t("home.security.features.encryption.title")}
                </h4>
                <img src="/check-graphic.svg" alt="" className="m-auto h-[160px] w-auto md:h-[130px]  relative z-20 mt-10" />
                <p className=" mt-10 transition font-inter text-start text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.625rem]  text-white  relative z-20">
                  {t("home.security.features.encryption.description")}
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-auto w-80    rounded-3xl md:rounded-[30px]   flex-1  flex-col items-center justify-between  ">
                <h4 className=" relative z-20 transition font-bold text-white text-[1.375rem] leading-[1.875rem] md:text-[1.5625rem] md:leading-[1.6875rem]">
                  {t("home.security.features.tracking.title")}
                </h4>
                <img src="/stream-graphic.svg" alt="" className=" relative z-20 m-auto h-[160px] w-auto md:h-[130px] mt-10" />
                <p className=" relative z-20 mt-10 transition font-inter text-start text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.625rem]  text-white ">
                  {t("home.security.features.tracking.description")}
                </p>
              </CardSpotlight>
              <CardSpotlight className="h-auto w-80    rounded-3xl md:rounded-[30px]   flex-1  flex-col items-center justify-between  ">
                <h4 className=" relative z-20 transition font-bold text-white text-[1.375rem] leading-[1.875rem] md:text-[1.5625rem] md:leading-[1.6875rem]">
                  {t("home.security.features.alerts.title")}
                </h4>
                <img src="/archive-graphic.svg" alt="" className=" relative z-20 m-auto h-[160px] w-auto md:h-[130px] mt-10" />
                <p className=" relative z-20 mt-10 transition font-inter text-start text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.625rem]  text-white ">
                  {t("home.security.features.alerts.description")}
                </p>
              </CardSpotlight>
              {/* <li className="transition rounded-[20px] p-5 [transition-property:background-color,border-color] lg:rounded-[30px] lg:p-8  border border-[#8B1DB8] dark:border-[#477DE9] bg-white dark:bg-[#1b1b1c] grid w-full min-w-[250px] flex-1 gap-10 md:max-w-[510px] lg:max-w-none">
                <h4 className="transition text-black font-bold dark:text-white text-[1.375rem] leading-[1.875rem] md:text-[1.5625rem] md:leading-[1.6875rem]">
                  {t("home.security.features.encryption.title")}
                </h4>
                <img src="/check-graphic.svg" alt="" className="m-auto h-[160px] w-auto md:h-[130px]" />
                <p className="transition font-inter text-start text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.625rem]  text-black dark:text-white ">
                  {t("home.security.features.encryption.description")}
                </p>
              </li> */}
              {/* <li className="transition rounded-[20px] p-5 [transition-property:background-color,border-color] lg:rounded-[30px] lg:p-8  border border-[#8B1DB8] dark:border-[#477DE9] bg-white dark:bg-[#1b1b1c] grid w-full min-w-[250px] flex-1 gap-10 md:max-w-[510px] lg:max-w-none">
                <h4 className="transition text-black font-bold dark:text-white text-[1.375rem] leading-[1.875rem] md:text-[1.5625rem] md:leading-[1.6875rem]">
                  {t("home.security.features.tracking.title")}
                </h4>
                <img src="/stream-graphic.svg" alt="" className="m-auto h-[160px] w-auto md:h-[130px]" />
                <p className="transition font-inter text-start text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.625rem]  text-black dark:text-white ">
                  {t("home.security.features.tracking.description")}
                </p>
              </li>
              <li className="transition rounded-[20px] p-5 [transition-property:background-color,border-color] lg:rounded-[30px] lg:p-8  border border-[#8B1DB8] dark:border-[#477DE9] bg-white dark:bg-[#1b1b1c] grid w-full min-w-[250px] flex-1 gap-10 md:max-w-[510px] lg:max-w-none">
                <h4 className="transition text-black font-bold dark:text-white text-[1.375rem] leading-[1.875rem] md:text-[1.5625rem] md:leading-[1.6875rem]">
                  {t("home.security.features.alerts.title")}
                </h4>
                <img src="/archive-graphic.svg" alt="" className="m-auto h-[160px] w-auto md:h-[130px]" />
                <p className="transition font-inter text-start text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.625rem]  text-black dark:text-white ">
                  {t("home.security.features.alerts.description")}
                </p>
              </li> */}
            </div>

            <Link href={"/support"}>
              <button className="text-red hover:before:bg-redborder-red-500 relative w-fit rounded-full  px-8 py-[1.125rem] md:py-3 md:px-10 mx-auto mt-10 flex  overflow-hidden border border-black bg-white text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:shadow-black hover:before:left-0 hover:before:w-full">
                <span className="relative z-10">{t("home.security.learn_more")}</span>
              </button>
            </Link>

          </div>
        </section>

        <section className="grid w-full max-w-[1200px] gap-6 md:min-h-[450px] md:grid-cols-2">
          <div className="transition rounded-[20px] p-5 [transition-property:background-color,border-color] lg:rounded-[30px] lg:p-8 border border-blue-500 bg-white dark:border-white dark:bg-black flex flex-col gap-5 md:justify-center md:gap-7">
            <h3 className="transition text-black font-bold dark:text-white text-[1.625rem] leading-[2rem] md:text-[1.875rem] md:leading-[2.0625rem] max-w-[18ch]">
              {t("home.web3.title")}
            </h3>
            <p className="transition text-black font-inter dark:text-white text-[1rem] leading-[1.125rem] md:text-[.9375rem] md:leading-[1.375rem]">
              {t("home.web3.description")}
            </p>
            <Link href={"/download"}>
              <button className="text-red hover:before:bg-redborder-red-500 relative w-fit rounded-full  px-8 py-[1.125rem] md:py-3 md:px-10   flex  overflow-hidden border border-black bg-white text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black dark:before:bg-[#477DE9] before:transition-all before:duration-500 hover:text-white   hover:shadow-black hover:before:left-0 hover:before:w-full">
                <span className="relative z-10">{t("home.web3.cta")}</span>
              </button>
            </Link>
          </div>
          <div className="transition hidden overflow-hidden rounded-[20px] border border-blue-500 bg-[#171717] [transition-property:border-color] dark:border-white md:flex md:justify-center md:rounded-[30px]">
            <video
              src="/visa.mp4"
              preload="none"
              poster="/visa-poster.jpg"
              autoPlay={true}
              loop
              muted
              className="w-full h-full  object-cover"
            />,
          </div>
        </section>

        <section className="m-auto w-full flex-col-reverse justify-between rounded-[20px] bg-[#477DE9] px-5 py-10 md:flex-row md:items-center lg:rounded-[30px] lg:p-16 lg:px-[100px] flex max-w-[1200px] gap-9 [&>div>p]:!max-w-[60ch]">
          <div>
            <h2 className="transition font-bold text-white text-[2rem] leading-[2.5rem] md:text-[2.375rem] md:leading-[2.6875rem]  ">
              {t("home.your.title")}
            </h2>
            <p className="transition font-inter text-white text-[1.125rem] leading-[1.625rem] md:text-[1.125rem] md:leading-[1.625rem] mt-6 max-w-[35ch]">
              {t("home.your.description")}
            </p>
            <Link href={"/download"}>
              <button className="text-red hover:before:bg-redborder-red-500 relative w-fit rounded-full  px-8 py-[1.125rem] md:py-3 md:px-10   flex  overflow-hidden border border-black hover:border-white bg-white text-black shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black dark:before:bg-[#8B1DB8] before:transition-all before:duration-500 hover:text-white   hover:shadow-black hover:before:left-0 hover:before:w-full mt-6">
                <span className="relative z-10">{t("home.your.cta")}</span>
              </button>
            </Link>
          </div>
          <span className="mx-auto md:mx-[unset]">
            <img alt="Blue Shield" loading="lazy" width={137} height={189} decoding="async" data-nimg={1} className="h-auto w-[200px] md:w-[220px]" style={{ color: 'transparent' }} src="/trust-graphic.svg" />
          </span>
        </section>

        <section id="vault" className="scroll-mt-28 w-full max-w-[1200px] overflow-hidden rounded-[28px] border border-black/10 bg-white dark:border-white/10 dark:bg-[#121214]">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center px-6 py-10 md:px-12 md:py-14">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8B1DB8] dark:text-[#7aa2ff]">
                {t("home.vault.eyebrow")}
              </p>
              <h2 className="mt-3 max-w-[16ch] text-3xl font-bold leading-tight text-black dark:text-white md:text-5xl">
                {t("home.vault.title")}
              </h2>
              <p className="mt-5 max-w-[52ch] text-base leading-7 text-black/70 dark:text-white/75">
                {t("home.vault.description")}
              </p>
              <ul className="mt-8 grid gap-4">
                {(["custody", "solana", "clear"] as const).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8B1DB8]/10 text-[#8B1DB8] dark:bg-[#477DE9]/20 dark:text-[#9db7ff]">
                      <CircleCheck className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-semibold text-black dark:text-white">{t(`home.vault.highlights.${item}.title`)}</span>
                      <span className="mt-1 block text-sm leading-6 text-black/65 dark:text-white/70">{t(`home.vault.highlights.${item}.description`)}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/download" className="rounded-full bg-[#8B1DB8] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#6d1590] dark:bg-[#477DE9] dark:hover:bg-[#3568c9]">
                  {t("home.vault.cta")}
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2a0a40] via-[#6b21a8] to-[#1d4ed8] px-6 py-12">
              <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#14F195]/30 blur-3xl" />
              <div className="relative w-full max-w-[320px] rounded-[32px] border border-white/20 bg-black/40 p-4 shadow-2xl backdrop-blur-md">
                <div className="mb-4 flex items-center justify-between text-white">
                  <span className="text-sm font-medium">{t("home.vault.preview.title")}</span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs">{t("home.vault.preview.flexible")}</span>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 text-white">
                  <p className="text-xs text-white/70">{t("home.vault.preview.balance_label")}</p>
                  <p className="mt-1 text-3xl font-semibold tracking-tight">$2,480.00</p>
                </div>
                <div className="mt-3 grid gap-2">
                  <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-3 text-black">
                    <div className="flex items-center gap-3">
                      <Image src="/network/sol.webp" alt="Solana" width={36} height={36} className="h-9 w-9 rounded-full" />
                      <div>
                        <p className="text-sm font-semibold">SOL</p>
                        <p className="text-xs text-black/55">{t("home.vault.preview.flexible")}</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold">{t("home.vault.preview.variable")}</p>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-3 text-black">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2775CA] text-xs font-bold text-white">$</span>
                      <div>
                        <p className="text-sm font-semibold">USDC</p>
                        <p className="text-xs text-black/55">{t("home.vault.preview.flexible")}</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold">{t("home.vault.preview.variable")}</p>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-3 text-black">
                    <div className="flex items-center gap-3">
                      <Image src="/network/eth.webp" alt="Ethereum" width={36} height={36} className="h-9 w-9 rounded-full" />
                      <div>
                        <p className="text-sm font-semibold">ETH</p>
                        <p className="text-xs text-black/55">{t("home.vault.preview.flexible")}</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold">{t("home.vault.preview.variable")}</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <span className="rounded-full bg-white py-2.5 text-center text-sm font-medium text-[#5b178f]">{t("home.vault.preview.deposit")}</span>
                  <span className="rounded-full border border-white/40 py-2.5 text-center text-sm font-medium text-white">{t("home.vault.preview.withdraw")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 pb-10 pt-4 md:px-12 md:pb-14">
            <div className="max-w-[640px]">
              <h3 className="text-2xl font-bold text-black dark:text-white md:text-3xl">{t("home.vault.how_title")}</h3>
              <p className="mt-3 text-black/65 dark:text-white/70">{t("home.vault.how_description")}</p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {vaultSteps.map((step, index) => (
                <article key={step} className="rounded-[24px] border border-black/10 bg-[#f7f7f8] p-5 dark:border-white/10 dark:bg-[#1b1b1e]">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8B1DB8] to-[#477DE9] text-lg font-semibold text-white">
                    0{index + 1}
                  </div>
                  <h4 className="text-lg font-semibold text-black dark:text-white">{t(`home.vault.steps.${step}.title`)}</h4>
                  <p className="mt-2 text-sm leading-6 text-black/65 dark:text-white/70">{t(`home.vault.steps.${step}.description`)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full max-w-[1200px] rounded-[28px] border border-black/10 bg-white px-6 py-10 dark:border-white/10 dark:bg-[#121214] md:px-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8B1DB8] dark:text-[#7aa2ff]">{t("home.company.title")}</p>
              <h2 className="mt-3 text-3xl font-bold text-black dark:text-white md:text-4xl">{t("home.company.name")}</h2>
              <p className="mt-4 max-w-[52ch] text-base leading-7 text-black/70 dark:text-white/70">{t("home.company.note")}</p>
            </div>
            <div className="grid gap-3 text-sm text-black dark:text-white">
              <p className="rounded-2xl bg-[#f6f6f8] px-4 py-3 dark:bg-white/5">{t("home.company.number")}</p>
              <p className="rounded-2xl bg-[#f6f6f8] px-4 py-3 dark:bg-white/5">{t("home.company.country")}</p>
              <a href="mailto:hello@yourwallet.io" className="rounded-2xl bg-[#f6f6f8] px-4 py-3 font-medium text-[#8B1DB8] dark:bg-white/5 dark:text-[#9db7ff]">{t("home.company.email")}</a>
            </div>
          </div>
        </section>

        <section className="w-full max-w-[1200px] py-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-black dark:text-white md:text-4xl">
              {t("home.partnerships.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-black/60 dark:text-white/65">
              {t("home.partnerships.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnershipsData.map((partner) => (
              <Link
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                key={partner.name}
                className="group flex flex-col rounded-[24px] border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:border-[#8B1DB8]/40 hover:shadow-xl dark:border-white/10 dark:bg-[#161618] dark:hover:border-[#477DE9]/50"
              >
                <div className="flex h-24 items-center justify-center rounded-2xl bg-[#0e0e10]">
                  <img src={partner.logo} alt={partner.alt} className="h-14 w-14 object-contain" />
                </div>
                <span className="mt-4 text-lg font-semibold text-black dark:text-white">{partner.name}</span>
                <span className="mt-1 text-sm leading-6 text-black/60 dark:text-white/65">{t(partner.taglineKey)}</span>
              </Link>
            ))}
          </div>
        </section>

      </main>

    </>
  );
}
