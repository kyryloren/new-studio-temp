import { StyledCustomLink } from './styles'

export default function CustomLink({
  href,
  fallback = 'div',
  onClick,
  ref,
  ...props
}) {
  if (!href || typeof href !== 'string') {
    const Tag = fallback

    return <Tag ref={ref} onClick={onClick} {...props} href={href} />
  }

  const isExternal =
    href.startsWith('http') ||
    href.startsWith('mailto') ||
    href.startsWith('tel')

  const internalLinkProps = {
    ...props,
    target: isExternal ? '_blank' : undefined,
    rel: isExternal ? 'noopener noreferrer' : undefined,
  }

  return (
    <StyledCustomLink
      ref={ref}
      onClick={(e) => {
        onClick?.(e)
      }}
      {...internalLinkProps}
      href={href}
    />
  )
}
