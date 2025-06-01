import { Button } from "@/components/ui/button";
import { CircleCheck, CircleX, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { CardSpotlight } from "@/components/ui/card-spotlight";

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
];

const partnershipsData = [
  {
    name: "TheX Bank",
    logo: "/partnerships/thex-bank-logo.png",
    alt: "TheX Bank Logo",
    width: 150,
    height: 60,
    link: "https://thexbank.io"
  },
  {
    name: "The Octopus Labs",
    logo: "/partnerships/theoctopuslabs-logo.png",
    alt: "The Octopus Labs Logo",
    width: 150,
    height: 60,
    link: "https://theoctopuslabs.com?utm_source=yourwallet&utm_medium=referral"
  },
];

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
          url: 'https://yourwallet.tr/preview.png',
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
      images: ['https://yourwallet.tr/preview.png'],
    },
  }
}

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <main className="md:px-10 px-5 mx-auto mb-6 mt-12 grid justify-items-center gap-y-10 md:mb-20 md:gap-y-20 lg:mt-28">
        <section className="grid w-full max-w-[1200px]  gap-6 md:grid-cols-2 md:gap-8 md:gap-y-14">
          <div className="flex-col justify-center md:flex">
            <h1 className="transition text-black font-bold dark:text-white text-4xl md:leading-[3.75rem] leading-[2.8125rem]   md:text-[3.25rem] ">
              {t("home.hero.title")}
            </h1>
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
            <div className="absolute -top-14 blur-2xl w-[400px] h-[400px] rounded-full bg-[#8B1DB8]  dark:bg-[#477DE9]  opacity-35 -z-10" />
            <img src="/hero-section.png" width={892} height={841} alt="Your Wallet Mobile App" className=" mt-5 h-auto w-full max-w-[668px] self-center md:-mt-5" />
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
            <input type="text" placeholder="Bir zincir arayın..." className="transition h-[60px] w-full rounded-full bg-white px-16 text-[1.125rem] leading-[1.625rem] text-black " />
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
              <div className="h-auto overflow-hidden  ">
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
                          <span className="transition font-inter dark:text-white text-[1rem] leading-[1.125rem] !text-black">Alış</span>
                          {chain.features.buy ? <CircleCheck className="h-5 w-5 text-[#8B1DB8] dark:text-[#477DE9]" /> : <CircleX className="h-5 w-5 text-black" />}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="transition font-inter dark:text-white text-[1rem] leading-[1.125rem] !text-black">Satış</span>
                          {chain.features.sell ? <CircleCheck className="h-5 w-5 text-[#8B1DB8] dark:text-[#477DE9]" /> : <CircleX className="h-5 w-5 text-black" />}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="transition font-inter dark:text-white text-[1rem] leading-[1.125rem] !text-black">Takas</span>
                          {chain.features.swap ? <CircleCheck className="h-5 w-5 text-[#8B1DB8] dark:text-[#477DE9]" /> : <CircleX className="h-5 w-5 text-black" />}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="transition font-inter dark:text-white text-[1rem] leading-[1.125rem] !text-black">Earn</span>
                          {chain.features.earn ? <CircleCheck className="h-5 w-5 text-[#8B1DB8] dark:text-[#477DE9]" /> : <CircleX className="h-5 w-5 text-black" />}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="transition font-inter dark:text-white text-[1rem] leading-[1.125rem] !text-black">DApp'ler</span>
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

              <img alt="Blue Shield" loading="lazy" width={712} height={518} decoding="async" data-nimg={1} className="h-auto w-full rounded-[20px] bg-[#D9D9D9] dark:bg-black   md:w-[50%]   lg:max-w-[400px]    lg:!bg-[transparent] " src="/phone-grapic.svg" style={{ color: 'transparent' }} />


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

        {/* Partnerships Section */}
        <section className="w-full max-w-[1200px] py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("home.partnerships.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("home.partnerships.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4  items-center justify-items-center">
            {partnershipsData.map((partner, index) => (
              <Link href={partner.link} target="_blank" key={index} className="w-full max-w-[200px] p-4 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain rounded-lg"
                />
              </Link>
            ))}
          </div>
        </section>

      </main>

    </>
  );
}
