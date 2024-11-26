import { Montserrat, Playfair_Display } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const ICON_URL = 'https://raw.githubusercontent.com/phosphor-icons/core/main/assets/bold/diamond-bold.svg';

// 網站結構化數據
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "OnlyXRania",
  "url": "https://only-x-rania.vercel.app/",
  "description": "Premium adult content and exclusive photos by Rania",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://only-x-rania.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// 組織結構化數據
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OnlyXRania",
  "url": "https://only-x-rania.vercel.app/",
  "logo": "https://only-x-rania.vercel.app/logo.png",
  "sameAs": [
    "https://www.youtube.com/@only_x_rania",
    "https://www.patreon.com/c/RaniaPrivateFantasies",
    "https://x.com/rania_chic"
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL('https://only-x-rania.vercel.app/'),
  title: 'OnlyXRania - Premium Adult Content & Exclusive Photos',
  description: 'Join OnlyXRania for exclusive premium adult content, artistic photos, and intimate experiences. High-quality content updated weekly.',
  keywords: 'OnlyXRania, premium content, adult content, exclusive photos, Rania model',
  verification: {
    google: 'qL0xwJSzlkolxPXg97ibNyTlLeS6BodlT79a8w7WdFw',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://only-x-rania.vercel.app/',
    siteName: 'OnlyXRania',
    title: 'OnlyXRania - Premium Adult Content & Exclusive Photos',
    description: 'Exclusive premium adult content and artistic photos by Rania',
    images: [
      {
        url: '/images/hero/1k_ins_02167_.png',
        width: 1200,
        height: 630,
        alt: 'OnlyXRania Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rania_chic',
    creator: '@rania_chic'
  },
  alternates: {
    canonical: 'https://only-x-rania.vercel.app/'
  }
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href={ICON_URL}
          type="image/svg+xml"
        />
        <link
          rel="apple-touch-icon"
          href={ICON_URL}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteSchema, organizationSchema])
          }}
        />
        <link
          rel="preload"
          href="/images/hero/1k_ins_03090_.png"
          as="image"
        />
        <link
          rel="preload"
          href="/images/hero/1k_ins_04118_.png"
          as="image"
        />
        <link
          rel="preload"
          href="/images/hero/1k_ins_02167_.png"
          as="image"
        />
      </head>
      <body className={`${montserrat.variable} ${playfair.variable} font-sans`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
