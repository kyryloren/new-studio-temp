'use client'

import { useRef } from 'react'
import { Container, GridWrapper } from 'styles'
import {
  AboutSection,
  CustomHugeText,
  CustomMainText,
  CustomSideText,
  Line,
} from './styles'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { CustomLink } from 'components'

gsap.registerPlugin(ScrollTrigger)

const About = ({ data }) => {
  const sectionEl = useRef(null)
  const animText = useRef([])
  const animBottomText = useRef([])
  const lineEl = useRef(null)

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl.current,
          start: 'top bottom-=10%',
          toggleActions: 'play none none none',
        },
      })

      tl.from(
        animText.current,
        {
          yPercent: 120,
          ease: 'power3.out',
          duration: 1.5,
          stagger: 0.01,
        },
        0,
      )
        .from(
          lineEl.current,
          { scaleX: 0, duration: 1.5, ease: 'power3.inOut' },
          0,
        )
        .from(
          animBottomText.current,
          {
            yPercent: 120,
            ease: 'power3.out',
            duration: 1.5,
            stagger: 0.01,
          },
          0.5,
        )
    },
    { dependencies: [sectionEl, animText, animBottomText, lineEl] },
  )

  return (
    <AboutSection ref={sectionEl}>
      <Container>
        <GridWrapper>
          <CustomHugeText>
            {data?.short_text.split(' ').map((word, index) => (
              <span key={index} className="overflow">
                <span
                  ref={(el) => animText.current.push(el)}
                  className="anim-text"
                >
                  {word}&nbsp;
                </span>
              </span>
            ))}
          </CustomHugeText>
          <Line ref={lineEl} />
          <CustomSideText>
            {data?.label.split(' ').map((word, index) => (
              <span className="overflow" key={index}>
                <span
                  ref={(el) => animBottomText.current.push(el)}
                  className="anim-text"
                >
                  {word}&nbsp;
                </span>
              </span>
            ))}
          </CustomSideText>
          <CustomMainText>
            {data?.long_text.split('\n').map((paragraph, index) => (
              <span key={index}>
                {paragraph.split(' ').map((word, wordIndex) => (
                  <span key={wordIndex} className="overflow">
                    <span
                      ref={(el) => animBottomText.current.push(el)}
                      className="anim-text"
                    >
                      {word}&nbsp;
                    </span>
                  </span>
                ))}
                <br />
              </span>
            ))}
            <br />
            <span className="overflow">
              <span
                ref={(el) => animBottomText.current.push(el)}
                className="anim-text"
              >
                <CustomLink href="/about">Learn More</CustomLink>
              </span>
            </span>
          </CustomMainText>
        </GridWrapper>
      </Container>
    </AboutSection>
  )
}

export default About
