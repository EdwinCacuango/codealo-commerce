import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAPIProducts } from './Services/ProductsContext'

const DetailProduct = () => {
  const { slug } = useParams()
  const { products } = useAPIProducts()

  const urlAPI = "https://codealo-commerce-cms.onrender.com";

  // Get product
  const productFilter = products.filter(item => item.slug === slug)
  const product = productFilter[0]

  const [counter, setCounter] = useState(0)

  console.log(product)
  return (
    <div className='flex w-full py-8 justify-around'>
      <div>
        <img src={`${urlAPI}${product.image.url}`} alt={product.image.name} />
      </div>
      <div>
        <ul className='flex'>
          {product.categories.map(item=> <li key={item.id}>{item.name}</li>)}
        </ul>
        <h1 className='text-left text-5xl py-4'>{product.title}</h1>
        <p className='text-left text-2xl'>{product.description}</p>
        <p className='text-left text-xl py-4'>Precio: ${product.price}</p>
        <div className='flex justify-around'>
          <div className='py-4 flex gap-4'>
            <button onClick={() => {
              if (counter === 0) return
              setCounter(counter - 1)
            }}>-</button>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>+</button>
          </div>
          <button>Agregar al carrito</button>
        </div>
      </div>

    </div>
  )
}

export default DetailProduct