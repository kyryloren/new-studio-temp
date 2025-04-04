'use client'

import styled from 'styled-components'
import { SectionWrapper } from 'styles'

export const VideoSection = styled(SectionWrapper)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: inset(0vw 0vw 0vw 0vw);
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
