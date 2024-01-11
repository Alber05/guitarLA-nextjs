import BackButton from './components/backButton'
import Course from './components/course/course'
import Guitar from './components/guitar/guitar'
import Post from './components/post/post'

// Metadatos para la página principal
export const metadata = {
  title: 'Guitar La',
  description: 'Blog de música, venta de guitarras y más'
}

// Función principal para el componente de la página principal (Home)
export default async function Home() {
  // Obtener datos para la página principal mediante la función getHomeData
  const { posts, guitars, courses } = await getHomeData()

  // Renderizar la estructura principal de la página
  return (
    <main className='mx-auto flex min-h-[calc(100vh-200px)] w-[90%] flex-col justify-evenly'>
      {/* Sección de la colección de guitarras */}
      <h1 className='my-10 text-center text-4xl font-black text-[#D88506] '>
        Nuestra colección
      </h1>
      <section className='mb-10 grid grid-cols-1 place-content-center gap-10 lg:grid-cols-2 xl:grid-cols-3'>
        {/* Mapear y renderizar cada guitarra en la colección */}
        {guitars.map((guitar) => (
          <Guitar key={guitar.id} guitar={guitar} />
        ))}
      </section>

      {/* Separador visual */}
      <div className='mb-10 h-[1px] w-[60%] mx-auto border border-black border-t-0'></div>

      {/* Sección de cursos */}
      <h2 className='mb-10 text-center text-4xl font-black text-[#D88506]'>
        Cursos
      </h2>
      <section className='mb-10 gap-10'>
        <Course key={courses.id} course={courses?.attributes} />
      </section>

      {/* Separador visual */}
      <div className='mb-10 h-[1px] w-[60%] mx-auto border border-black border-t-0'></div>

      {/* Sección del blog */}
      <h2 className='mb-10 text-center text-4xl font-black text-[#D88506]'>
        Blog
      </h2>
      <section className='grid place-content-center mb-10 gap-10 lg:grid-cols-2 xl:grid-cols-3'>
        {/* Mapear y renderizar cada entrada de blog */}
        {posts?.map((post) => (
          <Post key={post.id} post={post.attributes} />
        ))}
      </section>
    </main>
  )
}

// Función asincrónica para obtener datos para la página principal
export async function getHomeData() {
  // Construir las URL para obtener datos de posts, guitarras y cursos
  const urlPosts = `${process.env.API_URL}/posts?populate=image`
  const urlGuitars = `${process.env.API_URL}/guitars?populate=image`
  const urlCourses = `${process.env.API_URL}/curso?populate=image`

  // Realizar las solicitudes simultáneas para obtener datos de posts, guitarras y cursos
  const [resPosts, resGuitars, resCourses] = await Promise.all([
    fetch(urlPosts),
    fetch(urlGuitars),
    fetch(urlCourses)
  ])

  // Extraer datos de las respuestas JSON
  const [{ data: posts }, { data: guitars }, { data: courses }] =
    await Promise.all([resPosts.json(), resGuitars.json(), resCourses.json()])

  // Devolver los datos obtenidos
  return {
    posts,
    guitars,
    courses
  }
}
