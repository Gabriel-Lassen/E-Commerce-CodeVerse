import styles from "./styles.module.scss";
import bg from "../../assets/imgs/bg-getstarted.png";

const GetStart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <img src={bg} alt="" />
      </div>
      <div className={styles.linearBg}>
        <div className={styles.component}>
          <h1>The shopping destination you need</h1>
          <button>Get Started</button>
          <p>I already have an account</p>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
