import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import SEO from '../../next-seo.config'
import Header from '../components/Layouts/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <>
        <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/higakijin.png" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <DefaultSeo {...SEO} />
      </>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
