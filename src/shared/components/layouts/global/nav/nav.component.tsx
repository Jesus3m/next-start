import React, { FC } from 'react'
import { NavProps } from '../layout.types'
import { TopNav } from './nav.styled'

export const Nav: FC<NavProps> = ({width, toggleAside}) => {
    return (
        <TopNav width={width}>
            <button onClick={() => toggleAside()}>
                Desplegar navegacion
            </button>
        </TopNav>
    )
}
