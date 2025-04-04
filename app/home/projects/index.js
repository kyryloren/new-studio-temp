'use client'

import { useRef } from 'react'
import { Container, GridWrapper, NormalText } from 'styles'
import {
  AllProjectsWrapper,
  CenterLink,
  CustomVideo,
  ImageWrapper,
  LeftLink,
  ProjectsSection,
  RightLink,
  TitleLine,
  VideoWrapper,
} from './styles'
import { CustomLink, Parallax } from 'components'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Projects = ({ data }) => {
  const sectionEl = useRef(null)
  const videoEl = useRef(null)
  const { contextSafe } = useGSAP({ scope: sectionEl, dependencies: [videoEl] })

  const handleMouseEnter = contextSafe((e) => {
    gsap.to(videoEl.current, {
      clipPath: 'inset(0%)',
      duration: 1,
      ease: 'power3.out',
    })
  })

  const handleMouseLeave = contextSafe((e) => {
    gsap.to(videoEl.current, {
      clipPath: 'inset(20%)',
      duration: 1,
      ease: 'power3.out',
    })
  })

  return (
    <ProjectsSection ref={sectionEl}>
      <Container>
        <GridWrapper>
          <TitleLine>
            <NormalText>Project Highlights</NormalText>
            <CustomLink href="/work">See all work</CustomLink>
          </TitleLine>
          <LeftLink href={`/${data?.one?.slug}`}>
            <ImageWrapper
              $ar={`${data?.one?.thumbnail?.width}/${data?.one?.thumbnail?.height}`}
            >
              <Image
                src={
                  process.env.NEXT_PUBLIC_STRAPI_API_URL +
                  data?.one?.thumbnail?.url
                }
                alt={data?.one?.thumbnail?.alternativeText}
                fill
              />
            </ImageWrapper>
            <NormalText>{data?.one?.title}</NormalText>
          </LeftLink>
          <RightLink href={`/${data?.two?.slug}`}>
            <ImageWrapper
              $ar={`${data?.two?.thumbnail?.width}/${data?.two?.thumbnail?.height}`}
            >
              <Image
                src={
                  process.env.NEXT_PUBLIC_STRAPI_API_URL +
                  data?.two?.thumbnail?.url
                }
                alt={data?.two?.thumbnail?.alternativeText}
                fill
              />
            </ImageWrapper>
            <NormalText>{data?.two?.title}</NormalText>
          </RightLink>
          <CenterLink href={`/${data?.three?.slug}`}>
            <ImageWrapper
              $ar={`${data?.three?.thumbnail?.width}/${data?.three?.thumbnail?.height}`}
            >
              <Image
                src={
                  process.env.NEXT_PUBLIC_STRAPI_API_URL +
                  data?.three?.thumbnail?.url
                }
                alt={data?.three?.thumbnail?.alternativeText}
                fill
              />
            </ImageWrapper>
            <NormalText>{data?.three?.title}</NormalText>
          </CenterLink>
          <AllProjectsWrapper>
            <VideoWrapper
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={videoEl}
              href={'/work'}
            >
              <NormalText>View All Projects</NormalText>
              <Parallax>
                <CustomVideo playsInline autoPlay muted loop>
                  <source
                    src={
                      process.env.NEXT_PUBLIC_STRAPI_API_URL +
                      data?.more_projects?.url
                    }
                  />
                </CustomVideo>
              </Parallax>
            </VideoWrapper>
          </AllProjectsWrapper>
        </GridWrapper>
      </Container>
    </ProjectsSection>
  )
}

export default Projects
