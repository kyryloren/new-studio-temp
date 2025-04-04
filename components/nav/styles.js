'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { pxCutOff, Z_INDEX } from 'styles'

export const Header = styled.header`
  position: fixed;
  z-index: ${Z_INDEX.nav};
  top: 2vw;
  right: 0;
  width: 100%;
  mix-blend-mode: ${({ $scrolledPast }) =>
    $scrolledPast ? 'difference' : 'normal'};
  color: ${({ theme }) => `rgb(${theme.newWhite})`};
`
export const InnerNav = styled.nav`
  grid-column: 7 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LinkList = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxCutOff(20)};
`
export const LogoWrapper = styled(Link)`
  grid-column: 1 / 7;
  color: ${({ theme }) => `rgb(${theme.newWhite})`};

  svg {
    width: ${pxCutOff(120)};
  }
`
