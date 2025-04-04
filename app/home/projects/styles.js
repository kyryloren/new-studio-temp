'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { pxCutOff, SectionWrapper } from 'styles'

export const ProjectsSection = styled(SectionWrapper)`
  padding: var(--space-3xl) 0;
`
const ProjectItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  color: ${({ theme }) => `rgb(${theme.newBlack})`};
  text-decoration: none;
`
export const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const LeftLink = styled(ProjectItemWrapper)`
  grid-column: 1 / 7;
`
export const RightLink = styled(ProjectItemWrapper)`
  grid-column: 7 / -1;
`
export const CenterLink = styled(ProjectItemWrapper)`
  grid-column: 1 / -1;
`
export const TitleLine = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const AllProjectsWrapper = styled.div`
  grid-column: 1 / -1;
  /* height: ${pxCutOff(400)}; */
  overflow: hidden;
  aspect-ratio: 4 / 1;
`
export const VideoWrapper = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-decoration: none;
  color: ${({ theme }) => `rgb(${theme.newWhite})`};
  clip-path: inset(20%);

  p {
    z-index: 2;
    text-decoration: underline;
  }
`
export const CustomVideo = styled.video`
  /* Make video to at least 100% wide and tall */
  min-width: 101%;
  min-height: 101%;

  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;

  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
