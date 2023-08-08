import { useContext, useState } from "react";
import { WishlistActionsContext } from "../../contexts/wishlistActions";
import { ProductsContext } from "../../contexts/products";
import { BagActionsContext } from "../../contexts/bagActions";

import styles from "./styles.module.scss";

const MyWishlist = () => {
  const { listProducts } = useContext(ProductsContext);
  const {
    handleaddToUserWishlist,

    handleDeleteOneProductUserWishlist,

    userWishlist,
  } = useContext(WishlistActionsContext);

  const [isInWishlist, setIsinWishlist] = useState(true);

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

        return (
          <div key={item.productId}>
            <img src={product.url} alt={product.name} />
          </div>
        );
      })}
    </div>
  );
};

export default MyWishlist;
