import { StyledComponentsRegistry } from 'lib'
import { f } from 'styles'

const title = 'New Studio | Transforming Brands, Building Futures'
const description = `New Studio is a business transformation studio specializing in strategy, branding, and digital experiences. We help companies evolve, adapt, and lead—building brands designed for the future.`

export const metadata = {
  title: {
    template: '%s | New Studio',
    default: title,
  },
  description: description,
  keywords: [
    'Business transformation studio',
    'Brand strategy agency',
    'Corporate branding',
    'Digital design studio',
    'Future-focused branding',
    'Strategic branding',
    'Adaptive branding solutions',
    'Branding for high-growth companies',
    'Brand identity for B2B firms',
  ],
  openGraph: {
    title: title,
    description: description,
    url: 'https://www.wearenew.studio',
    locale: 'en_US',
    type: 'website',
    images: {
      url: `${
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://www.wearenew.studio'
      }/images/og-image.jpg`,
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    creator: '@newstudio',
    images: [
      `${
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://www.wearenew.studio'
      }/images/og-image.jpg`,
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="referrer" content="no-referrer" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="US" />

        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="New Studio" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body suppressHydrationWarning className={f.variable}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
