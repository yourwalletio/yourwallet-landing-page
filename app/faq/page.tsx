"use client"
// import { Metadata } from "next";
import { ChevronDown, Search, ArrowRight, MessageCircleQuestion, BookOpen, Wallet, Settings, Shield, CreditCard, Coins } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

// export const metadata: Metadata = {
//   title: "Sıkça Sorulan Sorular | Your Wallet",
//   description: "Your Wallet mobil uygulaması hakkında sıkça sorulan sorular ve cevapları.",
// };

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  [key: string]: {
    question: string;
    answer: string;
  };
}

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const t = useTranslations("faq");

  const categories = [
    { id: "all", name: t("categories.all"), icon: Wallet },
    { id: "general", name: t("categories.general"), icon: Settings },
    { id: "security", name: t("categories.security"), icon: Shield },
    { id: "payment", name: t("categories.payment"), icon: CreditCard },
    { id: "crypto", name: t("categories.crypto"), icon: Coins },
  ];

  const getFAQItems = (): FAQItem[] => {
    const faqCategories: ("general" | "security" | "payment" | "crypto")[] = [
      "general",
      "security",
      "payment",
      "crypto"
    ];

    return faqCategories.flatMap((category) => {
      const items = t.raw(category) as FAQCategory;
      return Object.values(items).map((item) => ({
        category,
        question: item.question,
        answer: item.answer
      }));
    });
  };

  const faqs = getFAQItems();

  const filteredFaqs = faqs.filter((faq) =>
    (selectedCategory === "all" || faq.category === selectedCategory) &&
    (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );



  return (
    <main className="md:px-10 px-5 mx-auto mb-6 mt-12 grid justify-items-center gap-y-10 md:mb-20 md:gap-y-20 lg:mt-28">
      <section className="md:w-full w-screen -mx-5 md:max-w-[1200px] rounded-[10px] bg-gradient-to-br from-[#8B1DB8] via-[#ff77a8] to-[#477DE9] px-5 !py-10 !pb-20 !pt-32 md:rounded-[20px] md:!px-10 md:!py-20 md:!pt-32 md:!pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="mx-auto w-full max-w-[1000px] relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-white font-bold text-[2.375rem] leading-[3.25rem] md:text-[3.25rem] md:leading-[3.25rem] mb-6 drop-shadow-lg">
              {t("title")}
            </h1>
            <p className="text-white font-inter text-lg md:text-xl max-w-[70ch] mx-auto drop-shadow">
              {t("description")}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-xl transition-all duration-300 ${selectedCategory === category.id
                      ? "bg-white/30 text-white"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>

          <div className="relative max-w-2xl mx-auto mb-12">
            <input
              type="text"
              placeholder={t("search_placeholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pr-12 bg-white/20 backdrop-blur-lg rounded-xl text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white/30"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
          </div>

          <div className="mx-auto w-full max-w-[800px] space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-xl rounded-2xl transition-all duration-300 hover:bg-white/25"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left"
                >
                  <h3 className="text-white font-semibold text-lg md:text-xl pr-4 drop-shadow">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-white transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "transform rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                >
                  <p className="px-6 pb-6 md:px-8 md:pb-8 text-white font-inter leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Yeni Destek Bölümü */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <Link href="/support" className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <MessageCircleQuestion className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl">{t("support_section.live_support.title")}</h3>
              </div>
              <p className="text-white/90 mb-4">{t("support_section.live_support.description")}</p>
              <span className="text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                {t("support_section.live_support.cta")} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/user-guide" className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl">{t("support_section.user_guide.title")}</h3>
              </div>
              <p className="text-white/90 mb-4">{t("support_section.user_guide.description")}</p>
              <span className="text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                {t("support_section.user_guide.cta")} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
