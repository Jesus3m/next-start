import React, { FC } from 'react'
import { HomeProps } from './home.types'
import { Title } from './home.styled'

export const HomeC: FC<HomeProps> = ({ toggleTheme }) => {
    return (
        <div>
            <Title>Inicio - Pagina de inicio</Title>
        </div>
    )
}
