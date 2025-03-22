import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata.privacy')
  
  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://yourwallet.tr/privacy-policy',
      images: [
        {
          url: 'https://yourwallet.tr/preview.png',
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 