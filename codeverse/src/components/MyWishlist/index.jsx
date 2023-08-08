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

  const [isInWishlist, setIsinWishlist] = useState(false);

  function handleClick(productId) {
    if (userWishlist.some((wishlist) => wishlist.productId === productId)) {
      handleDeleteOneProductUserWishlist(productId);

      setIsinWishlist(false);
    } else {
      handleaddToUserWishlist(productId);

      setIsinWishlist(true);
    }
  }
  const getProductById = (productId) => {
    return listProducts.find((product) => product.id === productId);
  };

  const discountedPrice = (productId) => {
    const product = getProductById(productId);

    const quantity = productQty[productId] || 1;

    return product.price * (1 - product.discount) * quantity;
  };

  return (
    <div className={styles.container}>
      {userbag.map((item) => {
        const product = getProductById(item.productId);
        if (!product) {
          return null;
        }

        const price = discountedPrice(item.productId);

        const handleAddBag = () => {
          handleDeleteOneProductUserBag(item.productId);
        };

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
