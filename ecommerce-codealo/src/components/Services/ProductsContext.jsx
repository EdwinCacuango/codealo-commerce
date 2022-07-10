import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";


const ProductsContext = React.createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = "https://codealo-commerce-cms.onrender.com/products";
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                setProducts(response)
            });
    }, []);

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};

const useAPIProducts = () => {
    const context = useContext(ProductsContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider")
    }
    return context
}

export { useAPIProducts, ProductsProvider }