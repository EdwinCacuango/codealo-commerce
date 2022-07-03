import React from 'react'
import Card from '../UI/Card'
const CardProduct = ({ url,imageName, title, description, price }) => {
    return (
        <Card>
            <div>
                <img src={url} alt={imageName} />
            </div>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </Card>
    )
}

export default CardProduct