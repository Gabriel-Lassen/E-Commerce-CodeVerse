import styles from './styles.module.scss';

const OrderDetails = ({totalPrice}) => {
  return (
    <div className={styles.wrapper}>
        <span className={styles.title}>Order Details</span>
        <div className={styles.details}>
            <div className={styles.row}>
                <span className={styles.field}>Sub Total</span>
                <span className={styles.value}>${totalPrice}</span>
            </div>
            <div className={styles.row}>
                <span className={styles.field}>Discount</span>
                <span className={styles.value}>-$0.00</span>
            </div>
            <div className={styles.row}>
                <span className={styles.field}>Delivery Fee</span>
                <span className={styles.value}>-$0.00</span>
            </div>
            <div className={styles.row}>
                <span className={styles.grandFiled}>Grand Total</span>
                <span className={styles.grandValue}>${totalPrice}</span>
            </div>
        </div>
    </div>
  )
}

export default OrderDetails