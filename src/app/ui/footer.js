import React from 'react'
import FooterNav from '../components/footer/footerNav'

function Footer() {
  return (
    <footer className='w-full md:h-20 flex flex-col md:flex-row items-center justify-center gap-4 md:justify-around py-4 bg-black '>
      <FooterNav />
    </footer>
  )
}

export default Footer
