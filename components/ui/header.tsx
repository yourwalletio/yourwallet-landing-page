"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { ModeToggle } from './theme-toggle'
import LanguageToggle from './language-toggle'
import { Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { YourWalletIcon } from './icons'
import { useTranslations } from 'next-intl'
import { navigationLinks } from "@/constants/navigation"

const links = navigationLinks;

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { theme } = useTheme();
    const t = useTranslations();

    return (
        <header className='transition-all duration-75 lg:py-7 bg-white dark:bg-[#1b1b1c] px-5 md:px-10 sticky top-0 z-50 w-full flex-col '>
            <div className='transition relative z-20 flex items-center justify-between pb-3 pt-4 [transition-property:background-color] data-[isopen=true]:bg-white dark:bg-[#1b1b1c] lg:hidden'>
                <Link href={"/"} onClick={() => setIsMenuOpen(false)} className='flex items-center  gap-3 md:text-sm lg:text-base mr-auto  text-2xl text-[#7421F7] dark:text-[#477DE9] '>
                    <YourWalletIcon className="h-auto w-[160px] " />
                </Link>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='transition flex w-10 flex-col gap-1.5 duration-300'
                >
                    {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobil Menü */}
            <div className={`lg:hidden fixed left-0 right-0 bottom-0 top-[60px] overflow-hidden bg-white dark:bg-[#1b1b1c] transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className='h-full flex flex-col justify-between overflow-y-auto'>
                    <div className='flex flex-col p-5'>
                        {links.map((item,index) => (
                            <Link 
                                href={item.path} 
                                key={index} 
                                onClick={() => setIsMenuOpen(false)}
                                className='flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-800'>
                                <span className='text-[#1b1b1c] dark:text-white text-base font-[500]'>{t(`navigation.${item.title_key}`)}</span>
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        ))}
                    </div>
                    <div className='p-5 space-y-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4'>
                                <ModeToggle />
                                <span className='text-sm text-gray-600 dark:text-gray-400'>{theme === "dark" ? t('theme.dark') : t('theme.light')}</span>
                            </div>
                            <LanguageToggle />
                        </div>
                        <Link href={"/download"} className='w-full py-4 transition relative z-10 overflow-hidden flex items-center justify-center gap-3 rounded-lg text-center font-medium bg-blue-600 hover:bg-blue-700 text-white'>
                            {t('download.your_wallet')}
                        </Link>
                    </div>
                </div>
            </div>

            <div className='z-20 hidden items-center justify-between lg:flex'>
                <Link href={"/"} className='flex items-center  gap-3 md:text-sm lg:text-base mr-auto  text-2xl text-[#7421F7] dark:text-[#477DE9] '>
                    <YourWalletIcon className="h-auto w-[240px]" />
                </Link>
                <div className='flex items-center'>
                    {links.map((item, index) => (
                        <Link href={item.path} key={index} className='transition text-[#1b1b1c] font-inter dark:text-white  text-xs md:text-sm cursor-pointer px-5 py-[0.625rem] font-[500] !opacity-100'>
                            {t(`navigation.${item.title_key}`)}
                        </Link>
                    ))}

                    <ModeToggle />
                    <LanguageToggle />
                    <Link href={"/download"} className='px-5 py-2.5 h-9 bg-[#8B1DB8] dark:bg-[#477DE9] text-white transition relative z-10 overflow-hidden flex items-center justify-center gap-3 rounded-full text-center font-medium  ml-2.5  '>
                        {t('download.button')}
                    </Link>
                </div>
            </div>
        </header>
    )
}
