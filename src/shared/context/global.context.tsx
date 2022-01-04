import { Context, FC, useState, createContext } from 'react'
import { GlobalContextTypes } from './contexts.types'

// Proveedor del contexto global
export const GlobalContext: Context<GlobalContextTypes> = createContext({})
export const Global: FC = ({ children }) => {
  const [example, setExample] = useState(true)

  return (
        <>
            <GlobalContext.Provider value={{ example, setExample }}>
                {children}
            </GlobalContext.Provider>
        </>
  )
}
