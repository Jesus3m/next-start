import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globals'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Global as GlobalContextProvider } from '@context/global.context'
import { Theme as ThemeContextProvider } from '@context/theme.context'
import { Session as SessionContextProvider } from '@context/session.context'
import { Layout } from '@components/layouts/global/layout.component'

// Componente definido por next para renderizar las pages
function MyApp ({ Component, pageProps, router }: AppProps) {
  library.add(fas) // añado la libreria de iconos
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
                        <Layout router={router}>
                            <Component {...pageProps} router={router} />
                        </Layout>
                    </ThemeContextProvider >
                </SessionContextProvider>
            </GlobalContextProvider>

        </>
  )
}

export default MyApp
