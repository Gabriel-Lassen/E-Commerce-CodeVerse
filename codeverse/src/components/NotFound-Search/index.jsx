import styles from "./styles.module.scss";
import search from "../../assets/imgs/search.png";
import option from "../../assets/imgs/ellipses.svg";

import ArrowSvg from "../ArrowSvg";

const NotFound = ({ active }) => {
  const close = () => {
    active(false);
  };
  return (
    <div className={styles.container}>
      <header className={styles.topBar}>
        <div>
          <button onClick={close}>
            <ArrowSvg color="var(--Primary)" direction="left" />
          </button>
          <h1>Search Results</h1>
        </div>
        <img src={option} alt="" />
      </header>
      <div className={styles.section}>
        <img src={search} />
        <h2>Whoops!</h2>
        <p>We coudn’t find what you’re looking for. Try something else.</p>
        <button>Back to home</button>
      </div>
    </div>
  );
};

export default NotFound;
