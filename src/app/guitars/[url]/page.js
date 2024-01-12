import { notFound } from 'next/navigation'
import Image from 'next/image'
// Importar el componente GuitarForm
import GuitarForm from '@/app/components/guitar/guitarForm'
import BackButton from '@/app/components/backButton'

// Función principal para el componente de la página de un solo producto (Guitar)
export default async function Guitar({ params }) {
  // Obtener la guitarra específica mediante la función getGuitar
  const {
    data: [guitar]
  } = await getGuitar(params.url)

  // Verificar si no se encuentra la guitarra y mostrar una página 404 si es así
  if (!guitar) {
    notFound()
  }

  // Extraer propiedades de la guitarra
  const { name, description, image, price } = guitar.attributes

  // Renderizar la estructura principal de la página de un solo producto (Guitar)
  return (
    <main className='mx-auto flex w-[90%] flex-col mb-10'>
      <BackButton />
      {/* Artículo de la guitarra */}
      <article className='mx-auto grid max-w-[600px] grid-cols-5 gap-2'>
        {/* Imagen de la guitarra */}
        <div className='relative col-span-2'>
          <Image
            src={image.data.attributes.formats.medium.url}
            width={400}
            height={900}
            alt={`Image of ${name} guitar`}
          />
        </div>
        {/* Información de la guitarra */}
        <div className='col-span-3 flex h-full flex-col justify-evenly text-lg'>
          {/* Nombre de la guitarra */}
          <h3 className='text-4xl text-[#D88506]'>{name}</h3>
          {/* Descripción de la guitarra */}
          <p className='text-lg'>{description}</p>
          {/* Precio de la guitarra */}
          <p className='text-4xl font-black text-[#D88506]'>{price} €</p>
          {/* Formulario de la guitarra */}
          <GuitarForm
            guitar={guitar}
            image={image.data.attributes.formats.medium.url}
          />
        </div>
      </article>
    </main>
  )
}

// Función asincrónica para obtener una guitarra específica de la API
export async function getGuitar(url) {
  const response = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
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
  // Realizar una solicitud para obtener datos de todas las guitarras
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)

  // Verificar si la solicitud fue exitosa
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  // Extraer y devolver los parámetros estáticos necesarios para cada guitarra
  const data = await response.json()
  const { data: guitars } = data
  return guitars.map((guitar) => ({
    url: guitar.url
  }))
}

// Función asincrónica para generar metadatos para SEO
export async function generateMetadata({ params }) {
  // Obtener la URL de la guitarra a partir de los parámetros de la ruta
  const url = params.url

  // Realizar una solicitud para obtener datos de la guitarra específica
  const product = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
  ).then((res) => res.json())

  // Extraer y devolver los metadatos necesarios para SEO
  const {
    data: [guitar]
  } = product
  return {
    title: guitar.attributes.name
  }
}
