"use client"
import { Shield, Lock, Key, Smartphone, Eye, AlertTriangle, ArrowRight, FileCheck, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const SecurityTipsPage = () => {
  const t = useTranslations("security_tips");
  
  const securityTips = [
    {
      icon: Shield,
      title: t("tips.recovery_phrase.title"),
      description: t("tips.recovery_phrase.description"),
      tips: t("tips.recovery_phrase.tips").split('|')
    },
    {
      icon: Lock,
      title: t("tips.strong_password.title"),
      description: t("tips.strong_password.description"),
      tips: t("tips.strong_password.tips").split('|')
    },
    {
      icon: Smartphone,
      title: t("tips.device_security.title"),
      description: t("tips.device_security.description"),
      tips: t("tips.device_security.tips").split('|')
    },
    {
      icon: Eye,
      title: t("tips.privacy_settings.title"),
      description: t("tips.privacy_settings.description"),
      tips: t("tips.privacy_settings.tips").split('|')
    },
    {
      icon: AlertTriangle,
      title: t("tips.fraud_prevention.title"),
      description: t("tips.fraud_prevention.description"),
      tips: t("tips.fraud_prevention.tips").split('|')
    },
    {
      icon: Key,
      title: t("tips.backup_recovery.title"),
      description: t("tips.backup_recovery.description"),
      tips: t("tips.backup_recovery.tips").split('|')
    }
  ];

  return (
    <main className="md:px-10 px-5 mx-auto mb-6 mt-12 grid justify-items-center gap-y-10 md:mb-20 md:gap-y-20 lg:mt-28">
      <section className="md:w-full w-screen -mx-5 md:max-w-[1200px] rounded-[10px] bg-gradient-to-br from-[#8B1DB8] via-[#477DE9] to-[#00ffcc] px-5 !py-10 !pb-20 !pt-32 md:rounded-[20px] md:!px-10 md:!py-20 md:!pt-32 md:!pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
        </div>

        <div className="mx-auto w-full max-w-[1000px] relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-white font-bold text-[2.375rem] leading-[3.25rem] md:text-[3.25rem] md:leading-[3.25rem] mb-6 drop-shadow-lg">
              {t("title")}
            </h1>
            <p className="text-white font-inter text-lg md:text-xl max-w-[70ch] mx-auto drop-shadow">
              {t("subtitle")}
            </p>
          </div>

          {/* Quick Access Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Link href="/security-tips" className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl">{t("card_titles.checklist")}</h3>
              </div>
              <p className="text-white/90 mb-4">{t("card_descriptions.checklist")}</p>
              <span className="text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                {t("cta.go_to")} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/faq" className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl">{t("card_titles.faq")}</h3>
              </div>
              <p className="text-white/90 mb-4">{t("card_descriptions.faq")}</p>
              <span className="text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                {t("cta.go_to_faq")} <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {securityTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/20 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/25 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-xl drop-shadow">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-white font-inter text-sm leading-relaxed mb-6">
                    {tip.description}
                  </p>
                  <ul className="space-y-3">
                    {tip.tips.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-white/60 rounded-full group-hover:bg-white/80 transition-all duration-300" />
                        <span className="text-white/90 font-inter text-sm group-hover:text-white transition-all duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Security Notice */}
          <div className="mt-16 bg-white/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-bold text-xl mb-2">{t("security_notice.title")}</h3>
                <p className="text-white/90 font-inter leading-relaxed">
                  {t("security_notice.content")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SecurityTipsPage;