import { useContext, useState } from 'react'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globals'
import { Global as GlobalContextProvider } from '../src/shared/context/global.context'
import { Theme as ThemeContextProvider } from '../src/shared/context/theme.context'
import { Session as SessionContextProvider } from '../src/shared/context/session.context'

// Componente definido por next para renderizar las pages
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      {/* Estilos globales (StyledComponents) */}
      <GlobalStyle />
      {/* Proveedor del contexto global de la aplicacion */}
      <GlobalContextProvider>
        {/* Proveedor del contexto de la sesion */}
        <SessionContextProvider>
          {/* Proveedor del tema de la aplicacion */}
          <ThemeContextProvider>
            {/* Render de las pages */}
            <Component {...pageProps} router={router} />
          </ThemeContextProvider >
        </SessionContextProvider>
      </GlobalContextProvider>

    </>
  )
}

export default MyApp