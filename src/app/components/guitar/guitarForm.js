'use client'
import { useState, useContext } from 'react'
import { ApiContext } from '../../ApiContext'

function GuitarForm({ guitar }) {
  const [amount, setAmount] = useState(0)

  const { addToCart, cart } = useContext(ApiContext)

  const { name, description, image, price } = guitar.attributes

  const handleSubmit = (e) => {
    e.preventDefault()

    if (amount < 1) {
      alert('Cantidad no válida')
      return
    }

    const selectedGuitar = {
      id: guitar.id,
      image: image.data.attributes.formats.medium.url,
      name: name,
      description: description,
      price: price,
      amount
    }

    addToCart(selectedGuitar)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <label htmlFor='amount' className='text-2xl'>
        Cantidad
      </label>
      <select
        id='amount'
        className='border border-solid border-black text-center p-4 rounded-2xl'
        onChange={(e) => setAmount(+e.target.value)}
      >
        <option value='0'>-- Seleccione --</option>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
      <input
        type='submit'
        value='Agregar al carrito'
        className='cursor-pointer font-black p-2 text-white bg-black hover:bg-[#D88506] transition-colors duration-300'
      />
    </form>
  )
}

export default GuitarForm
