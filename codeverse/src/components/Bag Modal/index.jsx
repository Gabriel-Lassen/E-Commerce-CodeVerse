import styles from "./styles.module.scss";
import Arrow from "../../assets/arrowLong.svg";
import Qty from "../Products/Qty";

const BagModal = () => {
  return (
    <div className={styles.container}>
      <header>
        <img src={Arrow} alt="" />
        <h2>Back</h2>
      </header>
      <ul>
        {Bag.map(bag => <li key={bag.id}>{bag.title}
        {bag.description}
        <Qty/>
        {bag.price}
        )};
      </ul>
    </div>
  );
};

export default BagModal;
