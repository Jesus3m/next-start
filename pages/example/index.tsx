import type { AppProps } from 'next/app'
import { FC } from 'react'
import { Example as ExampleContainer } from '@core/example/example.container'

const Example: FC<AppProps> = (props) => {
  return <ExampleContainer {...props} />
}
export default Example
