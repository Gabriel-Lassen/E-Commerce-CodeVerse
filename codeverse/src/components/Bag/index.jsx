import styles from "./styles.module.scss";
import background from "../../assets/imgs/frame-6.png";
import DropdowBtn from "../DropdowBtn";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Cupom from "../CupomInput";
import { ProductsContext } from "../../contexts/products";
import { BagActionsContext } from "../../contexts/bagActions";
import { WishlistActionsContext } from "../../contexts/wishlistActions";
import OrderSummary from "../OrderSummary";

const Bag = () => {
  const [hidden, setHidden] = useState(false);
  const [reverse, setReverse] = useState(true);
  const { listProducts } = useContext(ProductsContext);
  const { userBag, handleDeleteOneProductUserBag } =
    useContext(BagActionsContext);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [pay, setPay] = useState(0);
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

  useEffect(() => {
    const handleHidden = () => {
      setHidden(window.innerWidth >= 769);
      !setReverse(window.innerWidth <= 768);
    };

    handleHidden();

    window.addEventListener("resize", handleHidden);
  });

  const getProductById = (productId) => {
    return listProducts.find((product) => product.id === productId);
  };

  const discountedPrice = (productId) => {
    const product = getProductById(productId);
    return product.price * (1 - product.discount);
  };

  useEffect(() => {
    const Price = userBag.reduce(
      (totalPrice, item) => totalPrice + discountedPrice(item.productId),
      0
    );

    const cupom = 0;
    const delive = 0;
    const total = Price + delive;

    setSubTotal(Price);
    setDiscount(cupom);
    setDelivery(delive);
    setPay(total);
  }, [userBag]);

  return (
    <div className={styles.container}>
      <section className={styles.products}>
        <div className={styles.label}>
          <span>Product Name</span>
          <div>
            <span>Price</span>
            <span>Qty</span>
            <span>Subtotal</span>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.productsContainer}>
          {userBag.map((item) => {
            const product = getProductById(item.productId);
            if (!product) {
              return null;
            }

            const price = discountedPrice(item.productId);

            const handleRemoveFromBag = () => {
              handleDeleteOneProductUserBag(item.productId);
            };

            const isInWishlist = userWishlist.some(
              (wishlist) => wishlist.productId === item.productId
            );

            return (
              <div className={styles.cards} key={product.id}>
                <div className={styles.imgAndDesc}>
                  <img src={product.url} alt={product.name} />

                  <div className={styles.prodDesc}>
                    <div className={styles.info}>
                      <span className={styles.name}>{product.name}</span>
                      <span className={styles.desc}>{product.info}</span>
                      <div className={styles.qtyContainer}>
                        <p className={styles.qty}>Qty:</p>
                        <span>1</span>
                      </div>
                    </div>

                    <div className={styles.priceContainer}>
                      <h2>${price.toFixed(2)}</h2>
                      <span className={styles.originPrice}>
                        <s>{product.price}</s>
                      </span>

                      <p className={styles.off}>
                        {product.discount * 100}% OFF
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.separator}></div>
                <div className={styles.priceContainerWeb}>
                  <div className={styles.moneyContainer}>
                    <h2>${price.toFixed(2)}</h2>
                    <p className={styles.qtyWeb}>1</p>
                    <p className={styles.subTotalWeb}>${price.toFixed(2)}</p>
                  </div>
                  <div className={styles.btns}>
                    <button
                      className={styles.wish}
                      onClick={() => handleClick(item.productId)}
                    >
                      {isInWishlist
                        ? "Remove from wishlist"
                        : "Move to wishlist"}
                    </button>
                    <div className={styles.column}></div>
                    <button
                      className={styles.remove}
                      onClick={handleRemoveFromBag}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {reverse && <Cupom />}

        {hidden && (
          <DropdowBtn title="Apply Coupon Code" divisor={true}>
            <Cupom />
          </DropdowBtn>
        )}
      </section>
      <img src={background} alt="" className={styles.bg} />
      <OrderSummary
        titleWeb={"Order Details"}
        titleMob={"Order Summary"}
        pay={pay}
        discount={discount}
        delivery={delivery}
        button={true}
        subTotal={subTotal}
      />
    </div>
  );
};

export default Bag;
