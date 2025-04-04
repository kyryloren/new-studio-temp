'use client'

import { useEffect, useRef, useState } from 'react'
import { useRect } from 'hooks'
import { useLenis } from 'lenis/react'
import { TempusQueue, Maths } from 'lib'
import { ScrollbarWrapper } from './styles'

function Scrollbar() {
  const thumbRef = useRef(null)
  const scrollbarRef = useRef(null)
  const lenis = useLenis()
  const [innerMeasureRef, { height: innerHeight }] = useRect()
  const [thumbMeasureRef, { height: thumbHeight }] = useRect()
  const [isActive, setIsActive] = useState(false)

  useLenis(
    ({ scroll, limit }) => {
      if (thumbRef.current) {
        const progress = scroll / limit
        thumbRef.current.style.transform = `translate3d(-50%, ${
          progress * (innerHeight - thumbHeight)
        }px, 0)`
      }
    },
    [innerHeight, thumbHeight],
  )

  useEffect(() => {
    let start = null

    function onPointerMove(e) {
      if (start === null || !lenis) return

      const scroll = Maths.mapRange(
        e.clientY - start,
        0,
        innerHeight - (thumbHeight - start),
        0,
        lenis.limit,
      )
      TempusQueue.mutate(() => {
        lenis?.scrollTo(scroll, { immediate: true })
      })
    }

    function onPointerDown(e) {
      start = e.offsetY
    }

    function onPointerUp() {
      start = null
    }

    thumbRef.current?.addEventListener('pointerdown', onPointerDown, false)
    window.addEventListener('pointermove', onPointerMove, false)
    window.addEventListener('pointerup', onPointerUp, false)

    return () => {
      thumbRef.current?.removeEventListener('pointerdown', onPointerDown, false)
      window.removeEventListener('pointermove', onPointerMove, false)
      window.removeEventListener('pointerup', onPointerUp, false)
    }
  }, [lenis, innerHeight, thumbHeight])

  return (
    <ScrollbarWrapper
      ref={scrollbarRef}
      className={`scrollbar-wrapper ${isActive ? 'active' : ''}`}
    >
      <div ref={innerMeasureRef} className="inner">
        <div
          className="thumb"
          ref={(node) => {
            thumbRef.current = node
            thumbMeasureRef(node)
          }}
        />
      </div>
    </ScrollbarWrapper>
  )
}

export default Scrollbar
