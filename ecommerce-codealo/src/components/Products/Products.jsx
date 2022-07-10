import { useState } from "react";
import { useEffect } from "react";
import { useAPIProducts } from "../Services/ProductsContext";
import CardProduct from "./CardProduct";

const Products = () => {
  const { products } = useAPIProducts();
  const [Products, setProducts] = useState(products);
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState("all");
  const urlAPI = "https://codealo-commerce-cms.onrender.com";

  //Solicitar lista de categorías
  useEffect(() => {
    const url = "https://codealo-commerce-cms.onrender.com/categories";
    fetch(url).then((response) =>
      response.json().then((response) => setCategories(response))
    );
  }, []);

  const changeHadler = (e) => {
    setCategorySelected(e.target.value);
  };

  //Filtrar según la lista desplegable
  useEffect(() => {
    if (categorySelected === "all") {
      setProducts(products)
    } else {
      let result = [];
      for (let i = 0; i < products.length; i++) {
        let preview = products[i].categories.filter(
          (element) => element.name === categorySelected
        );
        if (preview.length > 0) result.push(products[i]);
      }
      setProducts(result);
    }
  }, [categorySelected]);
  return (
    <>
      <h1 className="text-4xl mt-3 mb-8">Todos los productos</h1>
      <div className=" text-right my-4 flex gap-3">
        <p>Buscar por: </p>
        <select name="category" id="category" onChange={changeHadler}>
          <option value="all">Todos</option>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mx-6 grid md:grid-cols-3  lg:grid-cols-6 gap-x-8 gap-y-4">
        {Products.map((item) => {
          return (
            <CardProduct
              key={item.id}
              urlImage={`${urlAPI}${item.image.url}`}
              imageName={item.image.name}
              title={item.title}
              price={`$ ${item.price}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
