// Importar la función notFound de next/navigation y el componente Image de Next.js
import { notFound } from 'next/navigation'
import Image from 'next/image'
import BackButton from '@/app/components/backButton'

// Función principal para el componente de la página de un solo post (Post)
export default async function Post({ params }) {
  // Obtener el post específico mediante la función getPost
  const {
    data: [post]
  } = await getPost(params.url)

  // Verificar si no se encuentra el post y mostrar una página 404 si es así
  if (!post) {
    notFound()
  }

  // Extraer propiedades del post
  const { title, contain, image } = post.attributes

  // Renderizar la estructura principal de la página de un solo post
  return (
    <main className='mx-auto flex min-h-[calc(100vh-200px)] w-[90%] flex-col justify-evenly'>
      <BackButton />
      {/* Artículo del post */}
      <article className='mx-auto mb-10 gap-2'>
        {/* Imagen del post */}
        <Image
          src={image.data[0].attributes.formats.medium.url}
          width={500}
          height={375}
          alt={`Image of ${title} post`}
          className='mx-auto'
        />
        {/* Título del post */}
        <h3 className='my-8 text-center text-4xl font-black text-[#D88506]'>
          {title}
        </h3>
        {/* Contenido del post */}
        <p className='max-w-[1000px] text-base whitespace-pre-wrap'>
          {contain}
        </p>
      </article>
    </main>
  )
}

// Función asincrónica para obtener un post específico de la API
export async function getPost(url) {
  const response = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=image`,
    { cache: 'no-store' }
  )

  // Verificar si la solicitud fue exitosa
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  // Extraer y devolver los datos en formato JSON
  const data = await response.json()
  return data
}

// Función asincrónica para generar los parámetros estáticos para la generación de páginas estáticas
export async function generateStaticParams() {
  // Realizar una solicitud para obtener datos de todos los posts
  const response = await fetch(`${process.env.API_URL}/posts?populate=image`)

  // Verificar si la solicitud fue exitosa
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  // Extraer y devolver los parámetros estáticos necesarios para cada post
  const data = await response.json()
  const { data: posts } = data
  return posts.map((post) => ({
    url: post.url
  }))
}

// Función asincrónica para generar metadatos para SEO
export async function generateMetadata({ params }) {
  // Obtener la URL del post a partir de los parámetros de la ruta
  const url = params.url

  // Realizar una solicitud para obtener datos del post específico
  const product = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=image`
  ).then((res) => res.json())

  // Extraer y devolver los metadatos necesarios para SEO
  const {
    data: [post]
  } = product
  return {
    title: post.attributes.title
  }
}
