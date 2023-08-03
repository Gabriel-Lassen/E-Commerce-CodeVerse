import { createContext, useEffect, useState } from "react";
import db from "../data/db.json";

export const ProductsContext = createContext({});

function ProductsProvider({ children }) {
  const [listProducts, setListProducts] = useState();
  const [listBrands, setListBrands] = useState();

  useEffect(() => {
    const products = db.products;
    setListProducts(products);

    const brands = db.brands;
    setListBrands(brands);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        listProducts,
        listBrands,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
