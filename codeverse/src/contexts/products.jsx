import { createContext, useEffect, useState } from "react";
import db from '../data/db.json'

export const ProductsContext = createContext({});

function ProductsProvider({children}){

    const [listProducts, setListProducts] = useState();

    useEffect(() => {
        const products = db.products;
        setListProducts(products);
        console
    }, [])

    return (
        <ProductsContext.Provider
            value={{
                listProducts,
            }}
        >
            {children}
        </ProductsContext.Provider>
      )
}

export default ProductsProvider