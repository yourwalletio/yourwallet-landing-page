export interface ILinks {
    title_key: string;
    path: string;
    target?: string;
}

export const navigationLinks: ILinks[] = [
    {
        title_key: "about",
        path: "/about-us",
    },
    {
        title_key: "wallet",
        path: "/download"
    },
    {
        title_key: "swap",
        path: "/swap",
    },
    {
        title_key: "stake",
        path: "https://stake.yourwallet.io",
        target: "_blank",
    },
    {
        title_key: "user_guide",
        path: "/user-guide",
    },
    {
        title_key: "faq",
        path: "/faq",
    },
    {
        title_key: "security_tips",
        path: "/security-tips",
    },
] 