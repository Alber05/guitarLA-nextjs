'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Guitar({ guitar }) {
  const { name, description, price, url, image } = guitar.attributes

  return (
    <article className='mx-auto grid max-w-[600px] grid-cols-5 gap-2'>
      <div className='relative col-span-2'>
        <Image
          src={image.data.attributes.formats.medium.url}
          width={400}
          height={900}
          alt={`Image of ${name} guitar`}
        />
      </div>
      <div className='col-span-3 flex h-full flex-col justify-evenly text-lg leading-7'>
        <h3 className='text-4xl text-[#D88506]'>{name}</h3>
        <p className='line-clamp-6 overflow-hidden text-lg'>{description}</p>
        <p className='text-4xl font-black text-[#D88506]'>{price} €</p>
        <Link
          href={`/guitars/${url}`}
          className='w-full bg-black py-2 text-center text-lg font-bold uppercase text-white no-underline transition-colors duration-300 hover:bg-[#D88506]'
        >
          Ver producto
        </Link>
      </div>
    </article>
  )
}

export default Guitar
