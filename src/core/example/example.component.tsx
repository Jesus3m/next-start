import React, { FC, useEffect, useState } from 'react'
import { ExampleProps } from './example.types'
import { Title } from './example.styled'
import { FaAirFreshener } from 'react-icons/fa'

export const ExampleC: FC<ExampleProps> = ({ toggleTheme }) => {
    const [Icon, setIcon] = useState<any>(undefined)

    import('react-icons/fa').then((m) => {
        setIcon(m)
    })
    const renderIcon = () => {
        const MyIcon = Icon?.['FaAdversal']
        return MyIcon && <MyIcon/>
    }

    return (
        <div>
            <Title>Ejemplo</Title>
            <br />
            <button onClick={() => toggleTheme && toggleTheme()} >Cambiar tema</button>
            <FaAirFreshener/>
            {
                renderIcon()
            }
        </div>
    )
}
