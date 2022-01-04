import { FC, useContext } from 'react'
import { ThemeContext } from '../../shared/context/theme.context'
import { ExampleC } from './example.component'

export const Example: FC = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
        <ExampleC toggleTheme={toggleTheme} />
  )
}
