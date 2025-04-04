'use client'

import styled, { css } from 'styled-components'
import media, { pxCutOff } from './media'

export const Normal = css`
  font-size: ${pxCutOff(22)};
  font-weight: 400;
  line-height: 1;

  ${media.desktopL`font-size: clamp(18px, 16.5366px + 0.3902vw, 22px);`}
`
export const NormalText = styled.p`
  ${Normal}
  margin: 0;
`
export const Huge = css`
  font-size: ${pxCutOff(72)};
  font-weight: 400;
  line-height: 0.9;

  ${media.desktopL`font-size: clamp(40px, 28.2927px + 3.122vw, 72px);`}
`
export const HugeText = styled.h2`
  ${Huge}
  margin: 0;
`
export const Display = css`
  font-size: ${pxCutOff(90)};
  font-weight: 400;
  line-height: 1;

  ${media.desktopL`font-size: clamp(45px, 28.5366px + 4.3902vw, 90px);`}
`
export const DisplayText = styled.h1`
  ${Display}
  margin: 0;
`
