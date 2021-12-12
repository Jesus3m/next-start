import type { AppProps } from 'next/app'
import React, { FC } from 'react'
import { Example as ExampleContainer } from '../../src/core/example/example.container'

const Example: FC<AppProps> = (props) => {
    return <ExampleContainer {...props} />
}
export default Example
