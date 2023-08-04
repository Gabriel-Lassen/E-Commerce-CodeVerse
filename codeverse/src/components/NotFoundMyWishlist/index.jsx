import styles from "./styles.module.scss";
import BtnBackForPage from "../BtnBackForPage";
import ArrowSvg from "../ArrowSvg";
import imgWishlist from "../../assets/imgs/imgWishlist.png";

const MyWishlistNotFound = () => {
  return (
    <div className={styles.container}>
      <BtnBackForPage
        svg={<ArrowSvg color="var(--Primary)" direction="left" />}
        text="My Bag"
      />
      <div className={styles.section}>
        <img src={imgWishlist} />
        <h2>Well...</h2>
        <p>It seems you have not added any products to for wishlist. </p>
        <button>Start Shopping</button>
      </div>
    </div>
  );
};

export default MyWishlistNotFound;
