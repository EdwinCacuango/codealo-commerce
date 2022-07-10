import React from 'react'
import Card from '../UI/Card'
const CardProduct = ({ urlImage,imageName, title, description, price, className}) => {
    return (
        <Card className={className}>
            <div>
                <img src={urlImage} alt={imageName} />
            </div>
            <div>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p>Precio: {price}</p>
            </div>
        </Card>
    )
}

export default CardProduct