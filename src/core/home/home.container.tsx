import { FC, useState } from 'react'
import { HomeC } from './home.component'
import { useTitle } from '../../shared/hooks/useTitle'

export const Home: FC = () => {
  const [countTitle, setCountTitle] = useState(0)
  useTitle(`mi titulo: ${countTitle}`)
  return (
        <HomeC setCountTitle={() => setCountTitle(prev => prev + 1)}/>
  )
}
