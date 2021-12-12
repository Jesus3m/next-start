import React, { FC, useContext } from 'react'
import { GlobalContext } from '../../shared/context/global.context'
import { ThemeContext } from '../../shared/context/theme.context'
import { ExampleC } from './example.component'


export const Example: FC = (props) => {
    const { toggleTheme } = useContext(ThemeContext)
    const { example } = useContext(GlobalContext)
    return (
        <ExampleC toggleTheme={toggleTheme} />
    )
}
