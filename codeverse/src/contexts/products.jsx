import { createContext, useEffect, useState } from "react";
import db from "../data/db.json";

export const ProductsContext = createContext({});

function ProductsProvider({ children }) {
  const [listProducts, setListProducts] = useState();
  const [listBrands, setListBrands] = useState();
  const [listColors, setListColors] = useState()

  useEffect(() => {
    const products = db.products;
    setListProducts(products);

    const brands = db.brands;
    setListBrands(brands);

    const colors = db.colors;
    setListColors(colors);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        listProducts,
        listBrands,
        listColors,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
