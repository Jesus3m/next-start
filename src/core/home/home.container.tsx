import React, { FC, useContext } from 'react'
import { GlobalContext } from '../../shared/context/global.context'
import { ThemeContext } from '../../shared/context/theme.context'
import { HomeC } from './home.component'


export const Home: FC = (props) => {
    const { toggleTheme } = useContext(ThemeContext)
    const { example } = useContext(GlobalContext)
    return (
        <HomeC toggleTheme={toggleTheme} />
    )
}
