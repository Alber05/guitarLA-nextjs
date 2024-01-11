import Image from 'next/image'
import React from 'react'

function Course({ course }) {
  const { title, content, image } = course

  return (
    <article className='mx-auto w-full relative'>
      <Image
        src={image.data[0].attributes.formats.medium.url}
        className='w-full '
        width={1280}
        height={1024}
        alt='Image of masterclass'
      />
      <div className='absolute inset-0 bg-black opacity-80'></div>

      <div className='absolute top-0 right-0 w-full h-full flex flex-col justify-center px-4 lg:max-w-[650px]'>
        <h3 className='mt-1 text-lg font-black text-[#D88506] text-center md:text-2xl lg:text-4xl'>
          {title}
        </h3>
        <p className='mt-1 line-clamp-4 overflow-hidden whitespace-pre-wrap text-white text-center text-sm md:text-lg lg:text-xl'>
          {content}
        </p>
      </div>
    </article>
  )
}

export default Course
