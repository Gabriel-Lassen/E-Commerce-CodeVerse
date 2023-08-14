import styles from "./styles.module.scss";
import { useState } from "react";

const MyOrdersComponente = () => {
  const [componentInView, setComponentInView] = useState("Completed");
  const [btnActive, setBtnActive] = useState("Completed");

  function handleClick(text) {
    setComponentInView(text);
    setBtnActive(text);
  }

  return (
    <div className={styles.container}>
      <div className={styles.btns}>
        <button
          onClick={() => handleClick("Completed")}
          className={btnActive == "Completed" ? styles.btnActive : ""}
        >
          Completed
        </button>
        <button
          onClick={() => handleClick("Processing")}
          className={btnActive == "Processing" ? styles.btnActive : ""}
        >
          Processing
        </button>
        <button
          onClick={() => handleClick("Cancelled")}
          className={btnActive == "Cancelled" ? styles.btnActive : ""}
        >
          Cancelled
        </button>
      </div>
      <div className={styles.inView}>
        {componentInView === "Completed" && <Pr>}
        {componentInView === "Processing" && <div>Processing Component</div>}
        {componentInView === "Cancelled" && <div>Cancelled Component</div>}
      </div>
    </div>
  );
};

export default MyOrdersComponente;
