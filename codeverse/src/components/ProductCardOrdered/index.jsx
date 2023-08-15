import styles from './styles.module.scss';
import BtnAddToBag from '../BtnAddToBag';

const ProductCardOrdered = ({id, imgUrl, name, info, price}) => {
  return (
    <div className={styles.wrapper}>
        <div style={{backgroundImage: `url(${imgUrl})`}} className={styles.img}></div>
        <div className={styles.nameInfo}>
            <div className={styles.productName}>
                <span>{name}</span>
                <span>{info}</span>
            </div>
            <div className={styles.productPrice}>
                <div className={styles.price}>
                    <span>${price}</span>
                </div>
                <div className={styles.qty}>
                    <span className={styles.qtyString}>Qty- </span>
                    <span>1</span>
                </div>
                <div className={styles.subtotal}>
                    <span>${price}</span>
                </div>
                <div className={styles.button}>
                    <BtnAddToBag theme='light' id={id}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCardOrdered