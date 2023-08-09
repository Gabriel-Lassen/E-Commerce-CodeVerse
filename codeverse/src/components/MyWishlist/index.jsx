import { useContext, useState } from "react";
import { WishlistActionsContext } from "../../contexts/wishlistActions";
import { ProductsContext } from "../../contexts/products";

import styles from "./styles.module.scss";
import BtnAddToBag from "../BtnAddToBag";

const MyWishlist = () => {
  const { listProducts } = useContext(ProductsContext);
  const {
    handleaddToUserWishlist,

    handleDeleteOneProductUserWishlist,

    userWishlist,
  } = useContext(WishlistActionsContext);

  const [isInWishlist, setIsinWishlist] = useState(true);

  const discountedPrice = (productId) => {
    const product = getProductById(productId);

    return product.price * (1 - product.discount);
  };

  function handleClick(productId) {
    if (userWishlist.some((wishlist) => wishlist.productId === productId)) {
      handleDeleteOneProductUserWishlist(productId);

      setIsinWishlist(true);
    } else {
      handleaddToUserWishlist(productId);
      setIsinWishlist(false);
    }
  }
  const getProductById = (productId) => {
    return listProducts.find((product) => product.id === productId);
  };

  return (
    <div className={styles.container}>
      {userWishlist.map((item) => {
        const product = getProductById(item.productId);
        if (!product) {
          return null;
        }
        const price = discountedPrice(item.productId);

        return (
          <div className={styles.all} key={item.productId}>
            <img
              src={product.url}
              className={styles.prodImg}
              alt={product.name}
            />
            <div className={styles.prodDesc}>
              <div className={styles.info}>
                <span className={styles.name}>{product.name}</span>
                <span className={styles.desc}>{product.info}</span>
              </div>
              <div className={styles.priceContainer}>
                <h2>${price.toFixed(2)}</h2>
                <span className={styles.originPrice}>
                  <s>{product.price}</s>
                </span>
                <p className={styles.off}>{product.discount * 100}% OFF</p>
              </div>
              <div className={styles.button}>
                <BtnAddToBag
                  theme={"light"}
                  id={item.productId}
                  width={"400px"}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyWishlist;
