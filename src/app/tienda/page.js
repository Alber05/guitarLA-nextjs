import React, { Suspense } from 'react'
// Importar el componente Guitar
import Guitar from '../components/guitar/guitar'
import BackButton from '../components/backButton'

// Metadatos para la página de la tienda
export const metadata = {
  title: 'Guitar La - Tienda',
  description: 'Tienda de música, venta de guitarras y más'
}

// Función asincrónica para el componente de la página de la tienda (Tienda)
async function Tienda() {
  // Obtener datos de guitarras mediante la función getData
  const { data: guitars } = await getData()

  // Renderizar la estructura principal de la página de la tienda
  return (
    <main className='mx-auto flex w-[90%] flex-col justify-evenly'>
      <BackButton />
      {/* Encabezado de la página */}
      <h1 className='mb-10 text-center text-4xl font-[700] text-[#D88506]'>
        Nuestra colección
      </h1>

      {/* Sección de la colección de guitarras */}
      <section className='grid grid-cols-1 place-content-center mb-10 gap-10 lg:grid-cols-2 xl:grid-cols-3'>
        {/* Mapear y renderizar cada guitarra en la colección */}
        {guitars.map((guitar) => (
          <Guitar key={guitar.id} guitar={guitar} />
        ))}
      </section>
    </main>
  )
}

// Función asincrónica para obtener datos de la API
export async function getData() {
  // Realizar una solicitud para obtener datos de guitarras desde la API
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)

  // Verificar si la solicitud fue exitosa
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  // Extraer y devolver los datos en formato JSON
  const data = await response.json()
  return data
}

// Exportar la función Tienda como componente predeterminado de la página
export default Tienda
