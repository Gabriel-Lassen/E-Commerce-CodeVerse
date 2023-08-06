import styles from "./styles.module.scss";
import arrow from "../../assets/imgs/arrowLong.svg";
import X from "../../assets/imgs/icon-cross-small.svg";
import { Link } from "react-router-dom";
import Qty from "../Products/Qty";
import { ProductsContext } from "../../contexts/products";
import { BagActionsContext } from "../../contexts/bagActions";
import { useContext, useState, useEffect } from "react";

const BagModal = ({ active }) => {
  const { listProducts } = useContext(ProductsContext);
  const { userBag, handleDeleteOneProductUserBag } =
    useContext(BagActionsContext);
  const [productQty, setProductQty] = useState({});

  const close = () => {
    active(false);
  };

  const getProductById = (productId) => {
    return listProducts.find((product) => product.id === productId);
  };

  const handleProductQuantityChange = (productId, quantity) => {
    setProductQty((prevQty) => ({
      ...prevQty,
      [productId]: quantity,
    }));
  };

  const getProductTotalPrice = (productId) => {
    const product = getProductById(productId);
    const quantity = productQty[productId] || 1;
    return product.price * quantity;
  };

  useEffect(() => {
    const totalPrice = userBag.reduce(
      (totalPrice, item) => totalPrice + getProductTotalPrice(item.productId),
      0
    );
  }, [userBag, productQty]);

  return (
    <div className={styles.container}>
      <header>
        <nav>
          <button onClick={close}>
            <img src={arrow} alt="" />
          </button>
          <h1>Back</h1>
        </nav>
      </header>
      <div className={styles.cardContainer}>
        {userBag.map((item) => {
          const product = getProductById(item.productId);
          if (!product) {
            return null;
          }

          const productTotalPrice = getProductTotalPrice(item.productId);

          const handleRemoveFromBag = () => {
            handleDeleteOneProductUserBag(item.productId);
          };
          const discountedPrice = productTotalPrice * (1 - product.discount);

          return (
            <>
              <div className={styles.card} key={item.productId}>
                <Link to={`/products/${product.id}`}>
                  <img src={product.url} alt={product.name} />
                </Link>
                <div className={styles.prodDesc}>
                  <span>{product.brand}</span>
                  <span>{product.name}</span>
                  <Qty
                    qty={product.qty}
                    quantity={productQty[item.productId] || 1}
                    onQuantityChange={(quantity) =>
                      handleProductQuantityChange(item.productId, quantity)
                    }
                  />
                </div>
                <div className={styles.cardRight}>
                  <button onClick={handleRemoveFromBag}>
                    <img src={X} alt="Remove" />
                  </button>
                  <span>${discountedPrice.toFixed(2)}</span>
                </div>
              </div>
              <div className={styles.separator}></div>
            </>
          );
        })}
      </div>

      <div className={styles.price}>
        <div className={styles.subTotal}>
          <p>Subtotal: </p>
          <span>$109.38</span>
        </div>
        <div className={styles.tax}>
          <p>Tax: </p>
          <span>$2.00</span>
        </div>
        <div className={styles.total}>
          <p>Total: </p>
          <span>$111.38</span>
        </div>
      </div>

      <div className={styles.coupon}>
        <input type="text" placeholder="Apply Coupon Code" />
        <button>CHECK</button>
      </div>

      <Link to="/mycart">
        <button className={styles.order}>Place Order</button>
      </Link>

      <p className={styles.continueSP} onClick={close}>
        Continue Shopping
      </p>
    </div>
  );
};

export default BagModal;
