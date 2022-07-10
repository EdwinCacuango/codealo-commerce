import { useAPIProducts } from "../Services/ProductsContext"
import CardProduct from "../Products/CardProduct"
import { Link } from "react-router-dom"

const Home = () => {
  const { products } = useAPIProducts()
  const listToShow = products.slice(0, 3)
  const urlAPI = "https://codealo-commerce-cms.onrender.com";

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl mt-3 mb-12">Principales productos</h1>
      <div className="lg:mx-20 grid md:grid-cols-3 gap-4 lg:gap-16  justify-items-around ">
        {
          listToShow.map(product => {
            return <CardProduct key={product.id}
              className="max-w-xs"
              urlImage={`${urlAPI}${product.image.url}`}
              imageName={product.image.name}
              title={product.title}
              price={`$ ${product.price}`} 
              slug={product.slug}/>
          })
        }
      </div>
      <button className="bg-white max-w-xs text-center p-4 text-xl mx-4 my-8 rounded-lg bg-orange-400 text-slate-50">
        <Link to="products">Ver todos los productos</Link>
      </button>
    </div>

  )
}

export default Home