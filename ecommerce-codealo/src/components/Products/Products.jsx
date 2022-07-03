import { useAPIProducts } from "../Services/ProductsContext"
import CardProduct from "./CardProduct"

const Products = () => {
  const { products } = useAPIProducts()
  console.log(products)
  return (
    <div>
      <h1>Todos los productos</h1>
      <div>
        {products.map(item => {
          return <CardProduct
          key={item.id}
          url={item.image.url}
          imageName={item.image.name}
          title={item.title}
          description={item.description}
          price={item.price}
        />
        })}
      </div>
    </div>
  )
}

export default Products