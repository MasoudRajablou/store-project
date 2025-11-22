import { createContext, useContext, useEffect, useState } from "react";

import api from "../services/config";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

// Custom Hook
const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

export { useProducts };
export default ProductProvider;
