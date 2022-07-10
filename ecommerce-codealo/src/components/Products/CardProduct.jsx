import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../UI/Card'
const CardProduct = ({ slug, urlImage,imageName, title, description, price, className}) => {
    return (
        <Card className={className}>
            <div>
                <img src={urlImage} alt={imageName} />
            </div>
            <div>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p>Precio: {price}</p>
            </div>
            <Link to={`/products/${slug}`}>Más detalles  →</Link>
        </Card>
    )
}

export default CardProduct