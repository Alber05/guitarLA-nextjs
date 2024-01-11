'use client'

import { createContext, useState, useEffect } from 'react'
import React from 'react'

// Crear un contexto para la API
export const ApiContext = createContext({})

// Definir el componente GuitarLaContext
function GuitarLaContext({ children }) {
  // Obtener el carrito almacenado en el localStorage o inicializarlo como un array vacío
  const lsCart =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('storagedCart')) ?? []
      : []

  // Estado para almacenar el carrito
  const [cart, setCart] = useState(lsCart)

  // Estado para indicar si la página está lista
  const [readyPage, setReadyPage] = useState(false)

  // Efecto para marcar la página como lista cuando el componente se monta
  useEffect(() => {
    setReadyPage(true)
  }, [])

  // Efecto para actualizar el localStorage cuando cambia el carrito
  useEffect(() => {
    localStorage.setItem('storagedCart', JSON.stringify(cart))
  }, [cart])

  // Función para agregar un producto al carrito
  const addToCart = (guitar) => {
    // Comprobar si la guitarra ya está en el carrito
    if (cart.some((guitarState) => guitarState.id === guitar.id)) {
      // Iterar para actualizar la cantidad
      const updatedCart = cart.map((guitarState) => {
        if (guitarState.id === guitar.id) {
          guitarState.amount = guitar.amount
        }
        return guitarState
      })
      // Actualizar el estado del carrito y el localStorage
      setCart([...updatedCart])
      localStorage.setItem('storagedCart', JSON.stringify(cart))
    } else {
      // Si el producto no existe en el carrito, agregarlo
      setCart([...cart, guitar])
      localStorage.setItem('storagedCart', JSON.stringify(cart))
    }
  }

  // Función para eliminar un producto del carrito
  const deleteProduct = (id) => {
    const updatedCart = cart?.filter((producto) => producto.id !== id)
    setCart(updatedCart)
    window.localStorage.setItem('storagedCart', JSON.stringify(cart))
  }

  // Función para actualizar la cantidad de un producto en el carrito
  const updateAmount = (guitar) => {
    const updatedCart = cart?.map((guitarState) => {
      if (guitarState.id === guitar.id) {
        guitarState.amount = parseInt(guitar.amount)
      }
      return guitarState
    })
    setCart(updatedCart)
    window.localStorage.setItem('storagedCart', JSON.stringify(cart))
  }

  // Renderizar el contexto de la API si la página está lista, de lo contrario, renderizar null
  return readyPage ? (
    <ApiContext.Provider
      value={{ cart, setCart, addToCart, updateAmount, deleteProduct }}
    >
      {children}
    </ApiContext.Provider>
  ) : null
}

// Exportar el componente GuitarLaContext como componente predeterminado
export default GuitarLaContext
