'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

function BackButton() {
  const router = useRouter()

  return (
    <div className='py-5 flex items-center'>
      <button
        className='cursor-pointer duration-200 hover:scale-125 active:scale-100 block '
        title='Go Back'
        onClick={() => router.back()}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='50px'
          height='50px'
          viewBox='0 0 24 24'
          className='stroke-[#D88506]'
        >
          <path
            strokeLinejoin='round'
            strokeLinecap='round'
            strokeWidth='1.5'
            d='M11 6L5 12M5 12L11 18M5 12H19'
          ></path>
        </svg>
      </button>
      <p className='font-black text-lg'>Volver a la página anterior</p>
    </div>
  )
}

export default BackButton
