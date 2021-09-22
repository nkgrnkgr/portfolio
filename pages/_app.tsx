import type { AppProps } from 'next/app'
import React from 'react'

const App: React.VFC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default App
