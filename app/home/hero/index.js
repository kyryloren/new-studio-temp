'use client'

import { useRef } from 'react'
import { ContentContainer, HeroSection, TextWrapper } from './styles'
import UnicornScene from './bg'
import { CONTAINER_VALUES, DisplayText } from 'styles'
import { Icon, Parallax } from 'components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = ({ data }) => {
  const sectionEl = useRef(null)
  const animText = useRef([])
  const topText = data?.top_text || 'Transforming Brands,'
  const bottomText = data?.bottom_text || 'Building Futures.'

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#hero-wrapper',
          start: 'top top',
          end: 'bottom top',
          pin: true,
          scrub: true,
        },
        defaults: { ease: 'none' },
      })

      tl.to(sectionEl.current, { yPercent: -100 }, 0).to(
        '#video-section',
        {
          clipPath: `inset(0 ${CONTAINER_VALUES.desktop.right} 0 ${CONTAINER_VALUES.desktop.left})`,
        },
        0,
      )
    },
    { dependencies: [sectionEl] },
  )

  useGSAP(
    () => {
      gsap.from(animText.current, {
        yPercent: 120,
        ease: 'power3.inOut',
        duration: 1.5,
        stagger: 0.05,
      })
    },
    { dependencies: [animText] },
  )

  return (
    <HeroSection ref={sectionEl} id="hero">
      <ContentContainer>
        <TextWrapper>
          <Parallax speed={-1} trigger={sectionEl}>
            <DisplayText>
              {topText.split(' ').map((word, index) => (
                <span key={index} className="overflow">
                  <span
                    ref={(el) => animText.current.push(el)}
                    className="anim-text"
                  >
                    {word}&nbsp;
                  </span>
                </span>
              ))}
            </DisplayText>
          </Parallax>
          <Parallax speed={-1} trigger={sectionEl}>
            <DisplayText>
              {bottomText.split(' ').map((word, index) => (
                <span key={index} className="overflow">
                  <span
                    ref={(el) => animText.current.push(el)}
                    className="anim-text"
                  >
                    {word}&nbsp;
                  </span>
                </span>
              ))}
            </DisplayText>
          </Parallax>
        </TextWrapper>
        <Parallax speed={-1} trigger={sectionEl}>
          <Icon name="arrow-down" />
        </Parallax>
        <UnicornScene
          className="bg-scene"
          jsonFilePath={'/gradient.json'}
          fps={120}
        />
      </ContentContainer>
    </HeroSection>
  )
}

export default Hero
