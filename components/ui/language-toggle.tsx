"use client"

import * as React from "react"
import { Globe, Check } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLocale, useTranslations } from "next-intl"
import { DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
export default function LanguageToggle() {
    const locale = useLocale();
    const router = useRouter();
    const t = useTranslations();

    function handleLocaleChange(newLocale: any): void {
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
        router.refresh();
    }

    return (

        <Popover>
            <PopoverTrigger className="p-2 flex  transition relative z-10 overflow-hidden items-center justify-center gap-3 rounded-full text-center font-medium bg-transparent border border-[#8B1DB8] dark:border-[#477DE9] text-[#8B1DB8] dark:text-[#477DE9] ml-2.5">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
                {/* <span>{t('language.title')}</span> */}
                {/* <Button >
                </Button> */}
            </PopoverTrigger>
            <PopoverContent className="w-40 flex-col flex gap-2">
                <Button
                    variant={"outline"}
                    onClick={() => handleLocaleChange("en")}
                    className="flex justify-between items-center"
                >
                    English
                    {locale === "en" && (
                        <Check className="ml-2 h-4 w-4 text-[#8B1DB8] dark:text-[#477DE9]" />
                    )}
                </Button>
                <Button
                    variant={"outline"}
                    onClick={() => handleLocaleChange("tr")}
                    className="flex justify-between items-center"
                >
                    Türkçe
                    {locale === "tr" && (
                        <Check className="ml-2 h-4 w-4 text-[#8B1DB8] dark:text-[#477DE9]" />
                    )}
                </Button>
            </PopoverContent>
        </Popover>
    )
}
