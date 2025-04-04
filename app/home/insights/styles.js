'use client'

import styled from 'styled-components'
import { pxCutOff, SectionWrapper } from 'styles'

export const InsightsSection = styled(SectionWrapper)`
  padding: var(--space-3xl) 0;

  .marquee {
    grid-column: 1 / -1;
    margin: unset;
    position: relative;
  }
`
export const TitleLineWrapper = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: var(--space-l);
`
export const Line = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => `rgb(${theme.newGray})`};
  transform-origin: left;
`
export const FillerBox = styled.div`
  position: relative;
  width: ${pxCutOff(200)};
  height: ${pxCutOff(200)};
  background-color: ${({ theme }) => `rgb(${theme.newGray})`};
  margin-right: var(--space-m);
  /* margin-right: var(--space-s); */
`
