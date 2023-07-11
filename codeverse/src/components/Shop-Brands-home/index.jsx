import styles from "./styles.module.scss";
import seta from "../../assets/imgs/seta.svg";
import zara from "../../assets/imgs/zara.png";
import DG from "../../assets/imgs/D&G.png";
import HM from "../../assets/imgs/H&M.png";
import BIBA from "../../assets/imgs/BIBA.png";
import CHANEL from "../../assets/imgs/chanel.png";
import prada from "../../assets/imgs/prada.png";


import zaraDesktop from "../../assets/imgs/zaraDesktop.png";
import bibaDesktop from "../../assets/imgs/BibaDesktop.png";
import chanelDesktop from "../../assets/imgs/chanelDesktop.png";
import DgDesktop from "../../assets/imgs/DgDesktop.png";
import HmDesktop from "../../assets/imgs/HmDesktop.png";
import pradaDesktop from "../../assets/imgs/pradaDesktop.png";


const Brands = () => {
  return (
    <div className={styles.brands}>
      <div className={styles.shop}>
        <h2>Shop by Brands</h2>
        <div>
          <p>View all</p>
          <img src={seta} alt="seta-brands" />
        </div>
      </div>

      <div className={styles.row}>
        <img src={zara} alt="zara" />
        <img src={DG} alt="D&G" />
        <img src={HM} alt="H&M" />
     
        <img src={BIBA} alt="BIBA" />
        <img src={CHANEL} alt="CHANEL" />
        <img src={prada} alt="PRADA" />
      </div>

      <div className={styles.row_desktop}>
        <img src={zaraDesktop} alt="zara" />
        <img src={DgDesktop} alt="D&G" />
        <img src={HmDesktop} alt="H&M" />
     
        <img src={chanelDesktop} alt="CHANEL" />
        <img src={pradaDesktop} alt="PRADA" />
        <img src={bibaDesktop} alt="BIBA" />
      </div>

    

    </div>
  );
};

export default Brands;
