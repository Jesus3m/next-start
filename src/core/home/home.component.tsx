import React, { FC } from 'react'
import { HomeProps } from './home.types'
import { Title } from './home.styled'

export const HomeC: FC<HomeProps> = ({ toggleTheme }) => {
    return (
        <div>
            <Title>Home</Title>
            <button onClick={() => toggleTheme()} >Cambiar tema</button>
        </div>
    )
}
