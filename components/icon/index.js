import { forwardRef } from 'react'
import IconArrowDown from './arrow-down'
import LogoIcon from './logo'

const Icon = forwardRef((props, ref) => {
  switch (props.name) {
    case 'arrow-down':
      return <IconArrowDown ref={ref} {...props} />
    case 'logo':
      return <LogoIcon ref={ref} {...props} />
    default:
      return null
  }
})

export default Icon
