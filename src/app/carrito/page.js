'use client'
import { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../ApiContext'
import Image from 'next/image'
import BackButton from '../components/backButton'

// Definir el componente Carrito
function Carrito() {
  // Obtener datos del contexto de la API
  const { cart, updateAmount, deleteProduct } = useContext(ApiContext)

  // Estado para almacenar el total del carrito
  const [total, setTotal] = useState(0)

  // Efecto para actualizar el total cuando cambia el carrito
  useEffect(() => {
    const totalAmount = cart?.reduce(
      (total, producto) => total + producto.amount * producto.price,
      0
    )
    setTotal(totalAmount)
  }, [cart])

  return (
    <main className='mx-auto w-[90%] max-w-[1280px] mb-10'>
      <BackButton />
      {/* Encabezado de la página */}
      <h1 className='mb-10 text-center text-4xl font-[700] text-[#D88506]'>
        Carrito
      </h1>
      {/* Sección de productos en el carrito */}
      <section className='grid items-start gap-20 md:grid-cols-5'>
        <div className='md:col-span-3 py-12'>
          <h2 className='font-black text-xl mb-5'>Articulos</h2>
          {/* Renderizar productos en el carrito o mensaje si está vacío */}
          {cart?.length === 0
            ? 'Carrito vacío'
            : cart?.map((product) => (
                <article key={product.id} className='producto-carrito'>
                  {/* Imagen del producto en el carrito */}
                  <div className='col-span-1'>
                    <Image
                      width={250}
                      height={480}
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  {/* Detalles del producto en el carrito */}
                  <div className='col-span-3'>
                    {/* Botón para eliminar el producto del carrito */}
                    <div className='flex justify-end'>
                      <button
                        className='font-black text-xl'
                        type='button'
                        onClick={() => deleteProduct(product.id)}
                      >
                        X
                      </button>
                    </div>
                    {/* Nombre del producto */}
                    <p className='mb-2 font-bold text-2xl'>{product.name}</p>
                    <div>
                      {/* Selector de cantidad */}
                      <p>Cantidad:</p>
                      <select
                        id='amount'
                        className='border border-solid border-black text-center w-full rounded-md mb-2'
                        onChange={(e) =>
                          updateAmount({
                            id: product.id,
                            amount: e.target.value
                          })
                        }
                        value={product.amount}
                      >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                      </select>
                    </div>

                    {/* Precio unitario del producto */}
                    <p className='mb-2 font-bold text-[#D88506]'>
                      Precio unitario:{' '}
                      <span className='font-black text-xl'>
                        {product.price} €
                      </span>
                    </p>
                    {/* Subtotal del producto */}
                    <p className=''>
                      Subtotal:{' '}
                      <span className='font-black text-xl'>
                        {product.amount * product.price} €
                      </span>
                    </p>
                  </div>
                </article>
              ))}
        </div>
        {/* Resumen del pedido en un aside */}
        <aside className='md:col-span-2 bg-[#F9FAFB] py-12 px-8 rounded-lg sticky top-12'>
          <h3 className='font-black text-lg'>Resumen del pedido</h3>
          {/* Total a pagar */}
          <p>
            Total a pagar: <span className='font-black'>{total} €</span>{' '}
          </p>
        </aside>
      </section>
    </main>
  )
}

// Exportar el componente Carrito como predeterminado
export default Carrito
