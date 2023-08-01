import styles from "./styles.module.scss";
import arrow from "../../assets/imgs/arrow.svg";
import search from "../../assets/imgs/search.png";
import option from "../../assets/imgs/ellipses.svg";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={arrow} />
        <h1>Search results</h1>
        <div>
          <img src={option} />
        </div>
        <div>
          <img src={search} />
          <h2>Whoops!</h2>
          <p>We coudn’t find what you’re looking for. Try something else.</p>
          <button>Back to home</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
