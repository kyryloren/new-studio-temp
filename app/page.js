import Head from 'next/head'
import { fetchAPI } from 'lib'
import { jsonLdScriptProps } from 'react-schemaorg'
import { Hero, Video, About, Projects, InsightsSection } from './home'

async function Home() {
  const data = await fetchAPI('/homepage', {
    populate: {
      hero: {
        populate: '*',
      },
      about: {
        populate: '*',
      },
      highlights: {
        populate: {
          one: {
            fields: ['title', 'slug'],
            populate: 'thumbnail',
          },
          two: {
            fields: ['title', 'slug'],
            populate: 'thumbnail',
          },
          three: {
            fields: ['title', 'slug'],
            populate: 'thumbnail',
          },
          more_projects: true,
        },
      },
    },
  })
  const doc = data?.data

  return (
    <>
      <Head>
        <script
          {...jsonLdScriptProps({
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: doc?.hero.reel.alternativeText,
            description: doc?.hero.description,
            uploadDate: doc?.hero.reel.updatedAt,
            contentUrl: 'https://www.wearenew.studio',
            embedUrl: doc?.hero.reel.url,
          })}
        />
      </Head>
      <div id="hero-wrapper">
        <Hero data={doc?.hero} />
        <Video data={doc?.hero} />
      </div>
      <About data={doc?.about} />
      <Projects data={doc?.highlights} />
      <InsightsSection />
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
    </>
  )
}

export default Home
