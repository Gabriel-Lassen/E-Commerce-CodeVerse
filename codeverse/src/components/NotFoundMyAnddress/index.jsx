import styles from "./styles.module.scss";
import BtnBackForPage from "../BtnBackForPage";
import ArrowSvg from "../ArrowSvg";
import address from "../../assets/imgs/address.png";

const MyAnddress = () => {
  return (
    <div className={styles.container}>
      <BtnBackForPage
        svg={<ArrowSvg color="var(--Primary)" direction="left" />}
        text="My Address Book"
      />
      <div className={styles.section}>
        <img src={address} alt="" />
        <h2>No Address</h2>
        <p>It seems you have not updated your address yet.</p>
        <button>Add Address</button>
      </div>
    </div>
  );
};

export default MyAnddress;
