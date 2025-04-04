'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { Normal } from 'styles'

export const StyledCustomLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: inherit;
  white-space: nowrap;
  cursor: pointer;
  ${Normal}

  &:before, &:after {
    position: absolute;
    width: 100%;
    height: 1px;
    background: currentColor;
    top: 100%;
    left: 0;
    pointer-events: none;
  }

  &:before {
    content: '';
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover::before {
    transform-origin: 0% 50%;
    transform: scale3d(1, 1, 1);
  }
`
