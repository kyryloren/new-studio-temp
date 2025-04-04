'use client'

import styled from 'styled-components'
import { Container, SectionWrapper, Z_INDEX } from 'styles'

export const HeroSection = styled(SectionWrapper)`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  z-index: ${Z_INDEX.section + 1};

  .bg-scene {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .container {
    z-index: 2;
  }
  svg {
    z-index: 2;
  }
`
export const ContentContainer = styled(Container)`
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: var(--space-m);
  padding-bottom: var(--space-m);
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => `rgb(${theme.newWhite})`};
  z-index: 1;
`
