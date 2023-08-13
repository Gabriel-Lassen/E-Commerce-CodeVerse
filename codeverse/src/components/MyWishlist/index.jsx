import { useContext, useState } from "react";
import { WishlistActionsContext } from "../../contexts/wishlistActions";
import { ProductsContext } from "../../contexts/products";

import styles from "./styles.module.scss";
import ProductCard from "../ProductCard";
import MyWishlistNotFound from "../NotFoundMyWishlist";

const MyWishlist = () => {
  const { userWishlist } = useContext(WishlistActionsContext);
  const { listProducts } = useContext(ProductsContext);

  const getProductById = (productId) => {
    return listProducts.find((product) => product.id === productId);
  };

  if (userWishlist.length === 0) {
    return <MyWishlistNotFound />;
  }
  return (
    <div className={styles.wrapper}>
      <span className={styles.productsQty}>{userWishlist.length} products</span>
      <div className={userWishlist.length % 2 == 0 ? styles.productsPar : styles.productsImpar}>
        {userWishlist.map((item, idx) => {
          const product = getProductById(item.productId);
          return (
            <ProductCard
              key={idx}
              id={product.id}
              name={product.name}
              info={product.info}
              price={product.price}
              discount={product.discount}
              averageStars={product.rating.averageStars}
              totalRatings={product.rating.totalRatings}
              url={product.url}
              popularity={product.popularity}
              reviews={product.reviews}
              addToBagBtn={true}
              rating={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyWishlist;
