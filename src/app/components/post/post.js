import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { formatDate } from '../../../../utils/helpers'

function Post({ post }) {
  const { title, contain, url, publishedAt, image } = post

  return (
    <article className='mx-auto max-w-[600px]'>
      <Image
        src={image.data[0].attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Imagen del post "${title}"`}
      />
      <div>
        <h3 className='mt-1 text-lg font-black text-[#D88506]'>{title}</h3>
        <p className='mt-1 text-sm'>{formatDate(publishedAt)}</p>
        <p className='mt-1 line-clamp-4 overflow-hidden'>{contain}</p>
        <Link
          href={`posts/${url}`}
          className='mt-2 block w-full bg-black px-1 text-center text-lg font-bold text-white  no-underline transition-colors duration-300 hover:bg-[#D88506]'
        >
          Leer más
        </Link>
      </div>
    </article>
  )
}

export default Post
