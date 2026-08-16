import '../src/style.css';

const title = 'SIWONCOAT | AI Roof Coating & Painting Solutions';
const description =
  'Cool the roof, lower the load. Eco-friendly heat-reflective coating for buildings, hospitals, schools and apartments, made with Jeonnam marine shells.';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

const sitewideStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'SIWONCOAT',
      url: siteUrl,
      logo: `${siteUrl}/assets/siwoncoat-logo.png`,
      description,
      email: 'whp77@naver.com',
      telephone: '+82-61-722-3369',
      areaServed: ['KR', 'VN'],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+82-61-722-3369',
        email: 'whp77@naver.com',
        contactType: 'sales',
        availableLanguage: ['Korean', 'English'],
      },
      knowsAbout: [
        'Heat-reflective roof coatings',
        'Industrial roof painting',
        'Reclaimed marine-shell materials',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'SIWONCOAT',
      description,
      inLanguage: ['ko-KR', 'en'],
      publisher: { '@id': `${siteUrl}/#organization` },
    },
  ],
};

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  ),
  title,
  description,
  keywords: [
    'SiwonCoat',
    'coating',
    'painting',
    'k-tag',
    'ktag',
    'Korean technology',
    'Korean company',
    '2026',
    'shell cool coat',
    'Vietnam',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_US',
    siteName: 'SIWONCOAT',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'SIWONCOAT — Cool the Roof. Lower the Load.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sitewideStructuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
