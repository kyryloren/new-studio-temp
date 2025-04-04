import { useRef, useEffect, useState, useLayoutEffect } from 'react'
import { useIntersection } from 'react-use'
import { styled } from 'styled-components'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const StyledMarquee = styled.div`
  display: flex;
  overflow: hidden;
  z-index: 1;
  text-transform: uppercase;
  width: 100%;
`

// Ensure items are laid out in a single row with no wrapping.
const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  min-width: 100%;
`

const Marquee = ({
  children,
  repeat = 2, // initial default; this value will be recalculated on mount/resize
  duration = 5,
  offset = 0, // not used in this example but could be incorporated for an initial shift
  $inverted = false,
  animationStart = true,
  style,
  ...props
}) => {
  const containerRef = useRef(null)
  // sampleRef is attached to the first rendered child to measure its width
  const sampleRef = useRef(null)
  const tweenRef = useRef(null)
  const intersection = useIntersection(containerRef, { threshold: 0 })

  // State to track how many copies are needed to fill the container
  const [repeatCount, setRepeatCount] = useState(repeat)

  // Calculate required repeats based on container and content width.
  useLayoutEffect(() => {
    const updateRepeats = () => {
      if (containerRef.current && sampleRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        const sampleWidth = sampleRef.current.offsetWidth
        if (sampleWidth > 0) {
          // Ensure we have enough copies to fill the container plus one extra for a seamless loop.
          const neededRepeats = Math.ceil(containerWidth / sampleWidth) + 1
          setRepeatCount(neededRepeats)
        }
      }
    }
    updateRepeats()
    window.addEventListener('resize', updateRepeats)
    return () => window.removeEventListener('resize', updateRepeats)
  }, [children])

  // Set up the GSAP tween for continuous marquee animation.
  // The tween moves the inner container by the width of one copy.
  useGSAP(() => {
    if (!containerRef.current) return
    const inner = containerRef.current.querySelector('.inner')
    if (!inner || !sampleRef.current) return

    const sampleWidth = sampleRef.current.offsetWidth
    // For inverted direction, animate to the right; otherwise, to the left.
    const targetX = $inverted ? sampleWidth : -sampleWidth

    const tween = gsap.fromTo(
      inner,
      { x: 0 },
      {
        x: targetX,
        duration: duration,
        ease: 'linear',
        repeat: -1,
        paused: true, // we'll control play/pause via intersection
      },
    )
    tweenRef.current = tween
    return () => tween.kill()
  }, [duration, repeatCount, $inverted])

  // Control animation playback based on visibility and the animationStart prop.
  useEffect(() => {
    if (tweenRef.current) {
      if (intersection?.isIntersecting && animationStart) {
        tweenRef.current.resume()
      } else {
        tweenRef.current.pause()
      }
    }
  }, [intersection?.isIntersecting, animationStart])

  return (
    <StyledMarquee ref={containerRef} style={style} {...props}>
      <InnerContainer className="inner">
        {/* Render the first copy with a ref for measuring its width */}
        <div ref={sampleRef}>{children}</div>
        {/* Render additional copies */}
        {new Array(repeatCount - 1).fill(null).map((_, i) => (
          <div key={i}>{children}</div>
        ))}
      </InnerContainer>
    </StyledMarquee>
  )
}

export default Marquee
