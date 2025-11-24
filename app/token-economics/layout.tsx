import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata.token_economics')

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://yourwallet.tr/token-economics',
      images: [
        {
          url: 'https://yourwallet.tr/og-preview.png',
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: 'https://yourwallet.tr',
      title: t('title'),
      description: t('description'),
      images: ['https://yourwallet.tr/og-preview.png'],
    },
  }
}

export default function TokenEconomicsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

