import React, { useContext, useState } from "react";

const cartContext = React.createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(cartContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};

export { useCart, CartContextProvider };
