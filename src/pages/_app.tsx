import '@/shared/styles/globals.scss'
import '@/shared/styles/fonts.scss'
import { AppBar } from '@/widgets/common/appbar'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppBar />
      <Component {...pageProps} />
    </>
  )
}
