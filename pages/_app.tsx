import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppBar from '../components/AppBar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
