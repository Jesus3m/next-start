import type { AppProps } from 'next/app'
import React, { FC } from 'react'
import { Home as HomeContainer } from '../../src/core/home/home.container'

const Home: FC<AppProps> = (props) => {
    return <HomeContainer {...props} />
}
export default Home
