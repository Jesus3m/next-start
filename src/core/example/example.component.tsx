import { FC } from 'react'
import { ExampleProps } from './example.types'
import { Title } from './example.styled'

export const ExampleC: FC<ExampleProps> = ({ toggleTheme }) => {
  return (
        <div>
            <Title>Ejemplo</Title>
            <br />
            <button onClick={() => toggleTheme && toggleTheme()} >Cambiar tema</button>
        </div>
  )
}
