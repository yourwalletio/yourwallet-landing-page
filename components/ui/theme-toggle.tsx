import { useTheme } from "next-themes"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="px-6 py-[0.625rem] text-black dark:text-white">
            {theme === "dark" ?
                <svg xmlns="http://www.w3.org/2000/svg" width={19.2} height={19.2} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>

                :
                <svg xmlns="http://www.w3.org/2000/svg" width={19.2} height={19.2} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx={12} cy={12} r={4} /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>

            }
        </button>
    )
}
