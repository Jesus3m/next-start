import { FC, MouseEvent, useState } from 'react'
import Link from 'next/link'
import { AsideProps } from '../layout.types'
import { SideBar } from './aside.styled'
import { NavLink } from './navLink.component'
import { SubMenu } from './submenu.component'
import { getModulesRoutes } from '@services/modules'

export const Aside: FC<AsideProps> = ({ show, toggleAside }) => {
  const [showSubModule, setShowSubModule] = useState(false)
  const [subModule, setSubModule] = useState<any>({})
  const routes = getModulesRoutes()

  const toggleShowSubModule = (e: MouseEvent<HTMLElement> | null, module?: any) => {
    setShowSubModule(prev => !prev)
    showSubModule ? setSubModule({}) : setSubModule(module)
  }

  return (
    <>
        <SideBar show={show}>
            {
                routes.map((route, i) => {
                  return !route.subModule
                    ? <Link key={i} href={route.path} passHref>
                            <NavLink route={route} show={show}/>
                         </Link>
                    : <NavLink route={route} show={show} key={i} onClick={(e: MouseEvent<HTMLElement>) => { toggleShowSubModule(e, route); toggleAside() }} />
                })
            }
        </SideBar>
        <SubMenu module={subModule} toggleShow={() => toggleShowSubModule(null, {})} show={show && showSubModule}/>
    </>
  )
}
