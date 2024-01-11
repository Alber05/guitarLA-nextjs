'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

function MobileNav() {
  const pathName = usePathname()

  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    setOpenMenu(false)
  }, [pathName])

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div className='flex h-10 w-10 items-center md:hidden'>
      <Image
        src='/bars.svg'
        alt='Ham Menu'
        className='cursor-pointer'
        width={40}
        height={40}
        onClick={handleMenu}
      />
      <nav
        className={`${
          openMenu ? 'translate-x-0' : '-translate-x-full'
        }  fixed left-0 top-0 z-10 flex h-screen w-full flex-col gap-8 bg-black bg-header-bg px-8 text-xl font-black transition-transform duration-200`}
      >
        <div className=' flex items-center justify-end pt-8'>
          <Image
            src='/close.svg'
            alt='Close menu item'
            className='h-full cursor-pointer'
            width={40}
            height={40}
            onClick={handleMenu}
          />
        </div>
        <Link
          href='/'
          className={`${
            pathName === '/' ? 'text-[#D88506]' : 'text-white'
          } transition-colors duration-200 hover:text-[#D88506]`}
          onClick={handleMenu}
        >
          Inicio
        </Link>
        <Link
          href='/nosotros'
          className={`${
            pathName === '/nosotros' ? 'text-[#D88506]' : 'text-white'
          } transition-colors duration-300 hover:text-[#D88506]`}
          onClick={handleMenu}
        >
          Nosotros
        </Link>
        <Link
          href='/tienda'
          className={`${
            pathName === '/tienda' ? 'text-[#D88506]' : 'text-white'
          } transition-colors duration-200 hover:text-[#D88506]`}
          onClick={handleMenu}
        >
          Tienda
        </Link>
        <Link
          href='/blog'
          className={`${
            pathName === '/blog' ? 'text-[#D88506]' : 'text-white'
          } transition-colors duration-200 hover:text-[#D88506]`}
          onClick={handleMenu}
        >
          Blog
        </Link>
        <Link
          href='/carrito'
          className={`${
            pathName === '/carrito' ? 'text-[#D88506]' : 'text-white'
          } transition-colors duration-200 hover:text-[#D88506]`}
        >
          <Image
            src='/carrito.png'
            alt='Cart shopping image'
            width={20}
            height={20}
            className={`${
              pathName === '/carrito' ? 'text-[#D88506]' : 'text-white'
            } transition-colors duration-200 `}
          />
        </Link>
      </nav>
    </div>
  )
}

export default MobileNav
