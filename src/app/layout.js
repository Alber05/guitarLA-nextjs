import { Outfit } from 'next/font/google'
import './globals.css'
import Header from './ui/header'
import Footer from './ui/footer'
import GuitarLaContext from './ApiContext'

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700', '800'] })

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${outfit.className} grid min-h-screen grid-rows-[120px,1fr,auto] md:grid-rows-[120px,1fr,120px]`}
      >
        <GuitarLaContext>
          <Header />
          {children}
          <Footer />
        </GuitarLaContext>
      </body>
    </html>
  )
}
