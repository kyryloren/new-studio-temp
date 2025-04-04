'use client'

import { useRef, useState } from 'react'
import { Container, GridWrapper } from 'styles'
import { Header, InnerNav, LinkList, LogoWrapper } from './styles'
import Icon from 'components/icon'
import CustomLink from 'components/link'
import { useLenis } from 'lenis/react'
import { usePathname, useRouter } from 'next/navigation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Nav = () => {
  const [scrolledPast, setScrolledPast] = useState(false)
  const footerEl = useRef(null)
  const lenis = useLenis()
  const pathname = usePathname()
  const router = useRouter()

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: '#hero',
        start: `bottom-=${footerEl.current?.offsetHeight + footerEl.current?.offsetTop} top`,
        onEnter: () => setScrolledPast(true),
        onLeaveBack: () => setScrolledPast(false),
      })
    },
    { dependencies: [footerEl] },
  )

  return (
    <Header ref={footerEl} $scrolledPast={scrolledPast}>
      <Container>
        <GridWrapper>
          <LogoWrapper
            href={'/'}
            onClick={(e) => {
              e.preventDefault()
              if (pathname === '/') {
                lenis.scrollTo(0)
              } else {
                router.push('/')
              }
            }}
          >
            <Icon name="logo" />
          </LogoWrapper>
          <InnerNav>
            <LinkList>
              <CustomLink href={'/work'}>Work</CustomLink>
              <CustomLink href={'/about'}>About</CustomLink>
              <CustomLink href={'/insights'}>Insights</CustomLink>
              <CustomLink href={'/contact'}>Contact</CustomLink>
            </LinkList>
            <CustomLink href={'mailto:hello@wearenew.studio'}>
              Let's Talk
            </CustomLink>
          </InnerNav>
        </GridWrapper>
      </Container>
    </Header>
  )
}

export default Nav
