import { useContext, useState } from "react";
import { WishlistActionsContext } from "../../contexts/wishlistActions";
import { ProductsContext } from "../../contexts/products";

import styles from "./styles.module.scss";
import BtnAddToBag from "../BtnAddToBag";
import BtnAddToWishlist from "../BtnAddToWishlist";
import ProductCard from "../ProductCard";

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
      {userWishlist.map((item, idx) => {
       return <ProductCard
       key={idx}
       id={item.id}
       name={item.name}
       info={item.info}
       price={item.price}
       discount={item.discount}
       averageStars={item.rating.averageStars}
       totalRatings={item.rating.totalRatings}
       url={item.url}
       popularity={item.popularity}
       reviews={item.reviews}
       addToBagBtn={true}
       rating={true}
   />
        
      })}
    </div>
  );
};

export default MyWishlist;
