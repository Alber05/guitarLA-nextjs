'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

function DesktopNav() {
  const pathName = usePathname()

  return (
    <nav className='hidden gap-8 text-xl font-black md:flex items-center'>
      <Link
        href='/'
        className={`${
          pathName === '/' ? 'text-[#D88506]' : 'text-white'
        } transition-colors duration-200 hover:text-[#D88506]`}
      >
        Inicio
      </Link>
      <Link
        href='/nosotros'
        className={`${
          pathName === '/nosotros' ? 'text-[#D88506]' : 'text-white'
        } transition-colors duration-300 hover:text-[#D88506]`}
      >
        Nosotros
      </Link>
      <Link
        href='/tienda'
        className={`${
          pathName === '/tienda' ? 'text-[#D88506]' : 'text-white'
        } transition-colors duration-200 hover:text-[#D88506]`}
      >
        Tienda
      </Link>
      <Link
        href='/blog'
        className={`${
          pathName === '/blog' ? 'text-[#D88506]' : 'text-white'
        } transition-colors duration-200 hover:text-[#D88506]`}
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
          width={30}
          height={25}
          className={`${
            pathName === '/carrito' ? 'text-[#D88506]' : 'text-white'
          } transition-colors duration-200 `}
        />
      </Link>
    </nav>
  )
}

export default DesktopNav
