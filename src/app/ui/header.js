import Image from 'next/image'

import React from 'react'
import DesktopNav from '../components/header/destkopNav'
import MobileNav from '../components/header/mobileNav'
import Link from 'next/link'

function Header() {
  return (
    <header className='w-full flex h-[120px] bg-black bg-header-bg bg-center  bg-no-repeat'>
      <div className='w-[90%] h-full flex items-center justify-between mx-auto'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            width={200}
            height={40}
            alt='Logo of Guitar LA'
          />
        </Link>
        <MobileNav />
        <DesktopNav />
      </div>
    </header>
  )
}

export default Header
