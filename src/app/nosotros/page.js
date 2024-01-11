import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BackButton from '../components/backButton'

export const metadata = {
  title: 'Guitar La - Nosotros',
  description: 'Blog de música, venta de guitarras y más'
}

function Nosotros() {
  return (
    <main className='mx-auto flex min-h-[calc(100vh-200px)] w-[90%] flex-col justify-evenly mb-10'>
      <div>
        <BackButton />
      </div>
      <h1 className='mb-10 text-center text-4xl font-[700] text-[#D88506]'>
        Nosotros
      </h1>
      <div className='grid w-full place-content-center items-center gap-8 lg:grid-cols-2'>
        <Image
          src='/nosotros.jpg'
          width={1200}
          height={800}
          className='mx-auto inline-block w-full rounded-md shadow-2xl'
          alt='Imagen de una guitarra en la página de nosotros'
        />

        <div className='w-full'>
          <p className='mb-8'>
            ¡Hola! Soy Alberto Sánchez, un autodidacta del desarrollo web. Me
            lancé al mundo del código búscando dar un giro a mi carrera
            profesional y aquí estoy, disfrutando de cada línea que escribo. Soy
            un amante del desarrollo web y siempre estoy buscando maneras
            creativas de hacer las cosas. Desde diseñar interfaces hasta
            resolver problemas complejos, encuentro diversión en cada desafío.
            Lo mío va más allá de las simples líneas de código; se trata de
            construir cosas increíbles y, al mismo tiempo, aprender algo nuevo
            cada día. Me encanta experimentar con nuevas tecnologías y encontrar
            soluciones prácticas.
          </p>
          <p>
            Next.js 14, un framework de React, destaca por su rendimiento y
            numerosas facilidades de desarrollo. Entre sus características más
            notables se incluyen la renderización flexible (SSR y CSR),
            enrutamiento automático, pre-renderización estática para mejor
            rendimiento, recarga en caliente (HMR), optimización automática de
            imágenes, soporte nativo para TypeScript, facilidad de desarrollo de
            API, extensibilidad y un despliegue sencillo en la nube. Para los
            estilos, utilicé Tailwind CSS, una herramienta que agiliza la
            creación de interfaces con clases predefinidas. En cuanto a los
            datos, implementé una API utilizando Strapi, una solución de
            headless CMS. Esto me permite gestionar y actualizar fácilmente el
            contenido de la página. En resumen, la tecnología detrás de esta web
            incluye Next.js para la estructura, Tailwind CSS para el estilo, y
            Strapi para la gestión de la API.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
