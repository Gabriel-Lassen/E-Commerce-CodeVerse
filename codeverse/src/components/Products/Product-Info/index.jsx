import styles from "./styles.module.scss";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../../contexts/products";

const ProductsInfo = () => {
  const { listProducts } = useContext(ProductsContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [discount, setDiscount] = useState("");

  useEffect(() => {
    if (listProducts) {
      const productId = window.location.pathname.split("/products/").pop();

      const product = listProducts.find((item) => item.id === productId);

      if (product) {
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setQty(product.qty);
        setDiscount(product.discount);
      }
    }
  }, [listProducts]);
  return (
    <div className={styles.container}>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className={styles.priceContainer}>
        <h2>{price}</h2>
        <p></p>
        <p>{discount}</p>
        <div className={styles.rating}></div>
      </div>
    </div>
  );
};

export default ProductsInfo;
