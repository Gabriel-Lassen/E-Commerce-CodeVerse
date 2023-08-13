import styles from "./styles.module.scss";
import arrow from "../../assets/imgs/arrowLong.svg";
import X from "../../assets/imgs/icon-cross-small.svg";
import { Link, useNavigate } from "react-router-dom";
import Qty from "../Products/Qty";
import { ProductsContext } from "../../contexts/products";
import { BagActionsContext } from "../../contexts/bagActions";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/Auth";
import BtnGeneric from "../BtnGeneric";

const BagModal = ({ active }) => {
  const { user } = useContext(AuthContext);
  const { listProducts } = useContext(ProductsContext);
  const { userBag, handleDeleteOneProductUserBag } = useContext(BagActionsContext);
  const [productQty, setProductQty] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [taxToPay, setTaxToPay] = useState(0);
  const [pay, setPay] = useState(0);
  const navigate = useNavigate();

  const close = () => {
    active(false);
  };

  const getProductById = (productId) => {
    return listProducts.find((product) => product.id === productId);
  };

  const handleQtyChange = (productId, quantity) => {
    setProductQty((prevQty) => ({
      ...prevQty,
      [productId]: quantity,
    }));
  };

  const discountedPrice = (productId) => {
    const product = getProductById(productId);
    const quantity = productQty[productId] || 1;
    return product.price * (1 - product.discount) * quantity;
  };

  const tax = (userBag) => userBag.length;

  useEffect(() => {
    const Price = userBag.reduce(
      (totalPrice, item) => totalPrice + discountedPrice(item.productId),
      0
    );

    const Tax = tax(userBag) * 1;

    const total = Price + Tax;

    setSubTotal(Price);
    setTaxToPay(Tax);
    setPay(total);
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
      {user && userBag.length > 0 &&
        <>
          <div className={styles.cardContainer}>
            {userBag.map((item, idx) => {
              const product = getProductById(item.productId);
              if (!product) {
                return null;
              }

              const price = discountedPrice(item.productId);

              const handleRemoveFromBag = () => {
              handleDeleteOneProductUserBag(item.productId);
              };

              return (
                <div key={idx}>
                  <div className={styles.card}>
                    <Link to={`/products/${product.id}`}>
                      <img src={product.url} alt={product.name} />
                    </Link>
                    <div className={styles.prodDesc}>
                      <span>{product.name}</span>
                      <span>{product.info}</span>
                      <Qty
                        qty={product.qty}
                        quantity={productQty[item.productId] || 1}
                        onQuantityChange={(quantity) =>
                          handleQtyChange(item.productId, quantity)
                        }
                      />
                    </div>
                    <div className={styles.cardRight}>
                      <button onClick={handleRemoveFromBag}>
                        <img src={X} alt="Remove" />
                      </button>
                      <span>${price.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className={styles.separator}></div>
                </div>
              );
            })}
          </div>

          <div className={styles.price}>
            <div className={styles.subTotal}>
              <p>Subtotal: </p>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className={styles.tax}>
              <p>Tax: </p>
              <span>${taxToPay.toFixed(2)}</span>
            </div>
            <div className={styles.total}>
              <p>Total: </p>
              <span>${pay.toFixed(2)}</span>
            </div>
          </div>

          <div className={styles.coupon}>
            <input type="text" placeholder="Apply Coupon Code" />
            <button>CHECK</button>
          </div>

          <Link to="/profile/mycart">
            <button className={styles.order}>Place Order</button>
          </Link>

          <p className={styles.continueSP} onClick={close}>
            Continue Shopping
          </p>
        </>
      }
      {user && userBag.length == 0 &&
        <div className={styles.empty}>
          <div className={styles.title}>
            <h1>Your bag is empty :(</h1>
            <span className={styles.buy}>Buy deals of the day!</span>
          </div>
          <div className={styles.actions}>
            <BtnGeneric theme='light' text='Go shopping!' onClick={close} />
          </div>
        </div>
      }
      {!user &&
        <div className={styles.empty}>
          <div className={styles.title}>
            <h1>Your bag is empty :(</h1>
            <span className={styles.buy}>Buy deals of the day!</span>
          </div>
          <div className={styles.actions}>
            <BtnGeneric theme='dark' text='Get started' onClick={() => navigate('/signup')} />
            <Link to='/login'>
              <span>I already have an account</span>
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default BagModal;
