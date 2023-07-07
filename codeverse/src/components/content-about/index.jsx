import style from "./style.module.scss";
import imagem1 from "../../assets/imgs/Rectangle531.png";
import imagem2 from "../../assets/imgs/Rectangle532.png";
import imagem3 from "../../assets/imgs/Rectangle533.png";

function ContentAbout() {
  return (
    <div className={style.container}>
      <div className={style.description}>
        <div className={style.about}>
          <h1>About</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing. Lorem Ipsum is simply dummy text
            of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing.
          </p>
        </div>
      </div>
      <div className={style.description1}>
        <div className={style.img1}>
          <img src={imagem1} alt="" />
        </div>
        <div className={style.frame1}>
          <h1>About</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing. Lorem Ipsum is simply dummy text
            of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing.
          </p>
        </div>
      </div>
      <div className={style.description2}>
        <div className={style.img2}>
          <img src={imagem2} alt="" />
        </div>
        <div className={style.frame2}>
          <h1>About</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing. Lorem Ipsum is simply dummy text
            of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing.
          </p>
        </div>
      </div>
      <div className={style.description3}>
        <div className={style.img3}>
          <img src={imagem3} alt="" />
        </div>
        <div className={style.frame3}>
          <h1>About</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing. Lorem Ipsum is simply dummy text
            of the printing. Lorem Ipsum is simply dummy text of the printing.
            Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is
            simply dummy text of the printing.
          </p>
        </div>
      </div>
    </div>
  );
}
export default ContentAbout;
