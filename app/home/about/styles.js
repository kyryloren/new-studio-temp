'use client'

import styled from 'styled-components'
import { HugeText, NormalText, pxCutOff, SectionWrapper } from 'styles'

export const AboutSection = styled(SectionWrapper)`
  padding-bottom: var(--space-3xl);
`
export const CustomHugeText = styled(HugeText)`
  grid-column: 1 / -1;
  padding: var(--space-l) 0;

  .overflow:first-child {
    text-indent: ${pxCutOff(220)};
  }

  .overflow > span {
    text-indent: initial;
  }
`
export const Line = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => `rgb(${theme.newGray})`};
  transform-origin: left;
`
export const CustomSideText = styled(NormalText)`
  grid-column: 1 / 7;
`
export const CustomMainText = styled(NormalText)`
  grid-column: 7 / 11;
`
