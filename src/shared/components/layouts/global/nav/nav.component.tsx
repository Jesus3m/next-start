import { FC } from 'react'
import { NavProps } from '../layout.types'
import { ToggleButton, TopNav } from './nav.styled'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Nav: FC<NavProps> = ({ show, toggleAside }) => {
  return (
        <TopNav show={show}>
            <ToggleButton onClick={toggleAside}>
              <FontAwesomeIcon icon={faBars} color="#000" size="2x"/>
            </ToggleButton>
        </TopNav>
  )
}
