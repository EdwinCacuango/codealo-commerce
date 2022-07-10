import React from 'react'
import { useState } from 'react'

const DetailProduct = ({imageURL, imageName, title, description, price}) => {
  const [counter, setCounter]=useState(0)

  return (
    <div className='flex w-full py-8 justify-around'>
      <div>
        <img src={imageURL} alt="imagen.png"/>
      </div>
      <div>
        <h1 className='text-left text-5xl py-4'>Nombre del producto</h1>
        <p className='text-left text-2xl'>Descripción del producto</p>
        <p className='text-left text-xl py-4'>Precio: $1,84</p>
        <div className='flex justify-around'>
        <div className='py-4 flex gap-4'>
          <button onClick={()=>{
            if (counter === 0) return
            setCounter(counter-1)
          }}>-</button>
          <p>{counter}</p>
          <button onClick={()=>setCounter(counter+1)}>+</button>
        </div>
        <button>Agregar al carrito</button>
        </div>
      </div>

    </div>
  )
}

export default DetailProduct