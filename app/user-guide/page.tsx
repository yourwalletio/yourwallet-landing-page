
import { Metadata } from "next";
import { BookOpen, Smartphone, Zap, ArrowRight, Download, Video } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Kullanım Kılavuzu | Your Wallet",
  description: "Your Wallet mobil uygulamasının kullanım kılavuzu ve detaylı kullanım talimatları.",
};

const UserGuidePage = () => {
  const t = useTranslations("user_guide");

  const guides = [
    {
      icon: BookOpen,
      title: t("guides.getting_started.title"),
      sections: Object.values(t.raw("guides.getting_started.sections")).map((section: any) => ({
        subtitle: section.subtitle,
        content: section.content
      }))
    },
    {
      icon: Smartphone,
      title: t("guides.basic_features.title"),
      sections: Object.values(t.raw("guides.basic_features.sections")).map((section: any) => ({
        subtitle: section.subtitle,
        content: section.content
      }))
    },
    {
      icon: Zap,
      title: t("guides.advanced_features.title"),
      sections: Object.values(t.raw("guides.advanced_features.sections")).map((section: any) => ({
        subtitle: section.subtitle,
        content: section.content
      }))
    }
  ];

  return (
    <main className="md:px-10 px-5 mx-auto mb-6 mt-12 grid justify-items-center gap-y-10 md:mb-20 md:gap-y-20 lg:mt-28">
      <section className="md:w-full w-screen -mx-5 md:max-w-[1200px] rounded-[10px] bg-gradient-to-br from-[#31559f] via-[#007c63] to-[#7605a3] px-5 !py-10 !pb-20 !pt-32 md:rounded-[20px] md:!px-10 md:!py-20 md:!pt-32 md:!pb-16 relative overflow-hidden">
        {/* ... diğer JSX kısımları ... */}

        <div className="text-center mb-16">
          <h1 className="text-white font-bold text-[2.375rem] leading-[3.25rem] md:text-[3.25rem] md:leading-[3.25rem] mb-6 drop-shadow-lg">
            {t("title")}
          </h1>
          <p className="text-white font-inter text-lg md:text-xl max-w-[70ch] mx-auto drop-shadow">
            {t("description")}
          </p>
        </div>

        {/* Hızlı Erişim Kartları */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Link href="/download" className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl">{t("quick_links.download.title")}</h3>
            </div>
            <p className="text-white/90 mb-4">{t("quick_links.download.description")}</p>
            <span className="text-white flex items-center gap-2 group-hover:gap-3 transition-all">
              {t("quick_links.download.cta")} <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link href="#video-tutorials" className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-xl">{t("quick_links.videos.title")}</h3>
            </div>
            <p className="text-white/90 mb-4">{t("quick_links.videos.description")}</p>
            <span className="text-white flex items-center gap-2 group-hover:gap-3 transition-all">
              {t("quick_links.videos.cta")} <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {guides.map((guide, index) => {
            const IconComponent = guide.icon;
            return (
              <div key={index} className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 md:p-8 hover:bg-white/25 transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-white font-bold text-2xl drop-shadow">{guide.title}</h2>
                </div>
                <div className="space-y-6">
                  {guide.sections.map((section, sectionIndex) => (
                    <div
                      key={sectionIndex}
                      className="bg-white/10 rounded-xl p-5 hover:bg-white/15 transition-all duration-300"
                    >
                      <h3 className="text-white font-semibold text-lg mb-3 drop-shadow">
                        {section.subtitle}
                      </h3>
                      <div className="prose prose-invert max-w-none">
                        <p className="text-white/90 font-inter text-sm leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Rehberler Bölümü */}
        <div id="video-tutorials" className="mt-20">
          <h2 className="text-white font-bold text-3xl mb-8 text-center drop-shadow">
            {t("video_section.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t("video_section.videos").split("|").map((video, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-xl rounded-2xl p-6 aspect-video flex items-center justify-center">
                <p className="text-white text-center">{video}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserGuidePage; 