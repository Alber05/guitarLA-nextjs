import { Outfit } from 'next/font/google'
import './globals.css'
import Header from './ui/header'
import Footer from './ui/footer'
import GuitarLaContext from './ApiContext'

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '700', '800'] })

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${outfit.className}`}>
        <GuitarLaContext>
          <Header />
          {children}
          <Footer />
        </GuitarLaContext>
      </body>
    </html>
  )
}
