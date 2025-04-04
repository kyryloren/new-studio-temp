import localFont from 'next/font/local'

const f = localFont({
  adjustFontFallback: 'Arial',
  variable: '--font',
  preload: true,
  src: [
    {
      path: '../public/fonts/f-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/f-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/f-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/f-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/f-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/f-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/f-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/f-RegularItalic.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/f-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/f-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/f-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/f-MediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/f-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/f-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/f-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/f-BoldItalic.woff',
      weight: '700',
      style: 'italic',
    },
  ],
})

export default f
