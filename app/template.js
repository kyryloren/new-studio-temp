'use client'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, newTheme } from 'styles'
import { Lenis, Scrollbar } from 'components'
import { useIsTouchDevice } from 'hooks'
import { Nav } from 'components'

export default function Template({ children }) {
  const touchDevice = useIsTouchDevice()

  return (
    <ThemeProvider theme={newTheme}>
      <GlobalStyle />
      {touchDevice ? null : <Scrollbar />}

      <main>
        <Nav />
        {children}
      </main>

      <Lenis root />
    </ThemeProvider>
  )
}
