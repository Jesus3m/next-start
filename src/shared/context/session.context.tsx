import { Context, FC, useState, createContext } from 'react'
import { SessionContextTypes } from './contexts.types'

// Proveedor de los datos de sesion
export const SessionContext: Context<SessionContextTypes> = createContext({})
export const Session: FC = ({ children }) => {
  // Definicion del estado de la sesion
  const [session, setSession] = useState(false)

  return (
        <>
            {/* Proveedor del contexto de react para manejo de los datos de sesion */}
            <SessionContext.Provider value={{ session, setSession }}>
                {/* Renderizado de todos los hijos */}
                {children}
            </SessionContext.Provider>
        </>
  )
}
