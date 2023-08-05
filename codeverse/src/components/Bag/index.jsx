import styles from "./styles.module.scss";
import background from "../../assets/imgs/frame-6.png";
import teste from "../../assets/imgs/imgUser.jpg";
const Bag = () => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <span>Product Name</span>
        <div>
          <span>Price</span>
          <span>Qty</span>
          <span>Subtotal</span>
        </div>
      </div>
      <section className={styles.products}>
        <div className={styles.cards}>
          <div className={styles.imgAndDesc}>
            <img src={teste} alt="" />

            <div className={styles.prodDesc}>
              <span className={styles.name}>Coach</span>
              <span className={styles.desc}>Leather Coach Bag</span>
              <div className={styles.qtyContainer}>
                <p className={styles.qty}>Qty:</p>
                <span>1</span>
              </div>
              <div className={styles.priceContainer}>
                <h2>$54.69</h2>
                <span className={styles.originPrice}>
                  <s>$69.99</s>
                </span>
                <p className={styles.off}>20% OFF</p>
              </div>
              {/*<div className={styles.priceContainer}>
              <h2>${(price * (1 - discount)).toFixed(2)}</h2>
              <span>
                <s>${price}</s>
              </span>
              <p>{discount * 100}% OFF</p>
            </div>*/}
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.btns}>
            <button className={styles.wish}>Move to Wishlist</button>
            <div className={styles.column}></div>
            <button className={styles.remove}>Remove</button>
          </div>
        </div>
      </section>
      <img src={background} alt="" className={styles.bg} />
      <div className={styles.order}>
        <h2>Order Details</h2>
        <div>
          <p>Sub Total</p>
          <span>$119.69</span>
        </div>
        <div>
          <p>Discount</p>
          <span>-$13.40</span>
        </div>
        <div>
          <p>Delivery</p>
          <span>-$0.00</span>
        </div>
        <div>
          <h2>Grand Total</h2>
          <span>$106.29</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <p>Total Bag Amount</p>
          <span>$106.29</span>
        </div>
        <button>Place Order</button>
      </div>
    </div>
  );
};

export default Bag;
