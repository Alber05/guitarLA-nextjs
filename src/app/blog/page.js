import React from 'react'
import Post from '../components/post/post'
import BackButton from '../components/backButton'

// Metadatos para la página de Blog
export const metadata = {
  title: 'Guitar La - Blog',
  description: 'Blog de música, venta de guitarras, consejos y más'
}

// Función principal para el componente de la página de Blog
export default async function Blog() {
  // Obtener datos de los posts mediante la función getPosts
  const { data: posts } = await getPosts()

  // Renderizar la estructura principal de la página de Blog
  return (
    <main className='w-[90%] mx-auto min-h-[calc(100vh-200px)] flex flex-col justify-evenly'>
      <BackButton />
      {/* Encabezado de la página */}
      <h1 className='text-center text-4xl my-10 text-[#D88506] font-[700]'>
        Blog
      </h1>
      {/* Sección de grid para mostrar los posts */}
      <section className='grid mb-10 md:grid-cols-2 xl:grid-cols-3 gap-6'>
        {/* Mapear y renderizar cada post en la sección */}
        {posts.map((post) => (
          <Post key={post.id} post={post.attributes} />
        ))}
      </section>
    </main>
  )
}

// Función asincrónica para obtener datos de todos los posts desde la API
export async function getPosts() {
  const response = await fetch(`${process.env.API_URL}/posts?populate=image`)

  // Verificar si la solicitud fue exitosa
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  // Extraer y devolver los datos en formato JSON
  const data = await response.json()
  return data
}
