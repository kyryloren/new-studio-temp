'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import { useRef } from 'react'
import { useTempus } from 'tempus/react'

import 'lenis/dist/lenis.css'

export default function Lenis({ root, options }) {
  const lenisRef = useRef(null)

  useTempus((time) => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.raf(time)
    }
  })

  return (
    <ReactLenis
      ref={lenisRef}
      root={root}
      options={{
        ...options,
        autoRaf: false,
        anchors: true,
      }}
    />
  )
}
