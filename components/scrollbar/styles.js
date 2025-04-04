'use client'

import styled from 'styled-components'
import { Z_INDEX } from 'styles'

export const ScrollbarWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 100vh;
  width: 10px;
  z-index: ${Z_INDEX.scrollbar};
  background-color: ${({ theme }) => `rgb(${theme.newWhite})`};
  opacity: 0;
  transition: opacity 0.3s;

  &:hover,
  &.active,
  .inner:hover,
  .thumb:hover {
    opacity: 1;
  }

  .inner {
    height: 100%;
    position: relative;
  }

  .thumb {
    min-height: 50px;
    width: 10px;
    background-color: ${({ theme }) => `rgb(${theme.newBlack})`};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: grab;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
