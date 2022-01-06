import { IconProp } from '@fortawesome/fontawesome-svg-core'

export const routes: {path: string, name: string, icon: IconProp, subModule?: any[]}[] = [
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
