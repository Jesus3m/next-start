import { FC, MouseEvent, useState } from 'react'
import Link from 'next/link'
import { AsideProps } from '../layout.types'
import { SideBar } from './aside.styled'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { NavLink } from './navLink.component'
import { SubMenu } from './submenu.component'

const routes: {path: string, name: string, icon: IconProp, subModule?: any[]}[] = [
  {
    path: '/home',
    name: 'Inicio',
    icon: 'coffee'
  },
  {
    path: '#',
    name: 'Ruta de ejemplo 1',
    icon: 'warehouse',
    subModule: [
      {
        path: '#',
        name: 'Sub modulo 1',
        icon: 'home'
      },
      {
        path: '#',
        name: 'Sub modulo 2',
        icon: 'angle-right'
      }
    ]
  },
  {
    path: '/example',
    name: 'Ejemplo',
    icon: 'home'
  },
  {
    path: '#',
    name: 'Ruta de ejemplo 2',
    icon: 'umbrella',
    subModule: [
      {
        path: '#',
        name: 'Sub modulo 1',
        icon: 'virus'
      },
      {
        path: '#',
        name: 'Sub modulo 2',
        icon: 'barcode'
      },
      {
        path: '#',
        name: 'Sub modulo 3',
        icon: 'unlock'
      },
      {
        path: '#',
        name: 'Sub modulo 4',
        icon: 'users'
      }
    ]
  }
]
export const Aside: FC<AsideProps> = ({ width }) => {
  const [show, setShow] = useState(false)
  const [subModule, setSubModule] = useState<any>({})

  const toggleShowSubModule = (e: MouseEvent<HTMLElement> | null, module?: any) => {
    setShow(prev => !prev)
    show ? setSubModule({}) : setSubModule(module)
  }

  return (
    <>
        <SideBar width={width}>
            {
                routes.map((route, i) => {
                  return !route.subModule
                    ? <Link key={i} href={route.path} passHref>
                            <NavLink route={route} width={width}/>
                         </Link>
                    : <NavLink route={route} width={width} key={i} onClick={(e: MouseEvent<HTMLElement>) => toggleShowSubModule(e, route)} />
                })
            }
        </SideBar>
        <SubMenu width={width} module={subModule} toggleShow={() => toggleShowSubModule(null, {})} show={width > 60 && show}/>
    </>
  )
}
