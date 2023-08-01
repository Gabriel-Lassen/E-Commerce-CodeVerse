import styles from "./styles.module.scss";
import search from "../../assets/imgs/search.png";
import option from "../../assets/imgs/ellipses.svg";
import BtnBackForPage from "../BtnBackForPage";
import ArrowSvg from "../ArrowSvg";



const NotFound = () => {
  return (
    <div className={styles.container}>
      <BtnBackForPage
        svg={<ArrowSvg color="var(--Primary)" direction="left" />}
        text="Search results" 
        secondSvg={option} />
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
