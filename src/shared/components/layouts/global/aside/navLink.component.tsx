import { FC, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink as NavigationLink, TextNav } from './aside.styled'

export const NavLink: FC<{route?: any, width: number, onClick?: (e: MouseEvent<HTMLElement>)=>void}> = ({ route, width, onClick }) => {
  return (
        <NavigationLink onClick={onClick}>
               { route && <FontAwesomeIcon icon={route.icon} size="xs" style={{ width: '25px' }} />}
                <TextNav width={width}>
                    {route.name}
                    {route.subModule && <FontAwesomeIcon icon="angle-right" size="xs" style={{ width: '10px', position: 'absolute', right: '15px' }} />}
                </TextNav>
        </NavigationLink>
  )
}
