import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { FC, MouseEvent } from 'react'
import { SubModuleMenu, SideSubMenu } from './aside.styled'
import { NavLink } from './navLink.component'

export const SubMenu: FC<{show: boolean, toggleShow: ()=>void, module: any}> = ({ show = false, toggleShow, module }) => {
  return (
        <SubModuleMenu show={show}>
           {
                module.subModule && module?.subModule?.map((route: any, i: number) => {
                  return !route.subModule
                    ? <Link key={i} href={route.path} passHref>
                            <NavLink route={route} show={show}/>
                         </Link>
                    : <NavLink route={route} show={show} key={i} onClick={(e: MouseEvent<HTMLElement>) => console.log(e, route)} />
                })
            }
          <SideSubMenu onClick={toggleShow}>
          {module.icon && <FontAwesomeIcon icon={module.icon} size="xs" color="white" style={{ width: '20px' }} />}
          </SideSubMenu>
        </SubModuleMenu>
  )
}
