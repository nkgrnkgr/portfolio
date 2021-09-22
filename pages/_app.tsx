import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

const App: React.VFC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Nokogiri</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
