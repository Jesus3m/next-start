import { FC, forwardRef, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink as NavigationLink, TextNav } from './aside.styled'

export const NavLink: FC<{route?: any, show: boolean, onClick?: (e: MouseEvent<HTMLElement>)=>void}> = forwardRef(function NavRef ({ route, show, onClick }, ref) {
  return (
    <NavigationLink onClick={onClick}>
           { route && <FontAwesomeIcon icon={route.icon} size="xs" style={{ width: '25px' }} />}
            <TextNav show={show}>
                {route.name}
                {route.subModule && show && <FontAwesomeIcon icon="angle-right" size="xs" style={{ width: '10px', position: 'absolute', right: '15px' }} />}
            </TextNav>
    </NavigationLink>
  )
})
