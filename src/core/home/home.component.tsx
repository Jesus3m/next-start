import { FC } from 'react'
import { HomeProps } from './home.types'
import { Title } from './home.styled'

export const HomeC: FC<HomeProps> = ({ setCountTitle }) => {
  return (
        <div>
            <Title>Inicio - Pagina de inicio</Title>
            <button onClick={() => setCountTitle()}>Sumar al titulo</button>
        </div>
  )
}
