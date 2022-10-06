import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/Navbar.css'
import styles from 'styles/layout.css'
import Navbar from '../components/Navbar'

import { ThemeProvider } from 'styled-components'

import Head from 'next/head'

import Header from '@/layout/Header'
import Footer from '@/layout/Footer'

const theme = {
  colors: {
    primary: '#355C7D',
  },
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Head>
          <title> Blazo 's First Page</title>
          <meta name="description" content="Tutorial for NExt.js" />
        </Head>
        {/* <Header /> */}
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
