import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { formatDate } from '../../../../utils/helpers'

function Course({ course }) {
  const { title, content, publishedAt, image } = course

  return (
    <article className='mx-auto w-full relative'>
      <img
        src={image.data[0].attributes.formats.medium.url}
        className='w-full '
      />
      <div className='absolute inset-0 bg-black opacity-80'></div>

      <div className='absolute top-0 right-0 w-full h-full flex flex-col justify-center px-4 lg:max-w-[650px]'>
        <h3 className='mt-1 text-lg font-black text-[#D88506] text-center md:text-2xl lg:text-4xl'>
          {title}
        </h3>
        <p className='mt-1 line-clamp-4 overflow-hidden whitespace-pre-wrap text-white text-center text-sm md:text-lg lg:text-xl'>
          {content}
        </p>
        {/* <Link
          href={`posts/${url}`}
          className='mt-2 block w-full bg-black px-1 text-center text-lg font-bold text-white  no-underline transition-colors duration-300 hover:bg-[#D88506]'
        >
          Leer más
        </Link> */}
      </div>
    </article>
  )
}

export default Course
