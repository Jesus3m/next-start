import React, { Context, FC, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../../../styles/theme'
import { ThemeContextTypes } from './contexts.types'

// Proveedor del tema de la aplicacion, con styled components, manejado desde el contexto de react
export const ThemeContext: Context<ThemeContextTypes> = React.createContext({})
export const Theme: FC = ({ children }) => {
    // Estado que define el tema en uso
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }
    return (
        <>
            {/* Proveedor del contexto de react, para manejar el tema desde cualquier parte de la aplicacion */}
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {/* Configuracion del tema que usara styledComponent */}
                <ThemeProvider theme={theme !== 'dark' ? lightTheme : darkTheme}>
                    {/* Renderizado de todas los componentes(pages) */}
                    {children}
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    )
}
