import style from "../content-about/style.module.scss";
import img1 from "../../assets/imgs/Rectangle531.jpg";
import img2 from "../../assets/imgs/Rectangle532.jpg";
import img3 from "../../assets/imgs/Rectangle533.jpg";

function Content() {
  return (
    <div className={container}>
      <div className={about}>
        <div className={description}>
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
      <div className={change.img1}>
        <img src={img1} alt="" />
        <div className={description1}>
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
      <div className={change.img2}>
        <img src={img2} alt="" />
        <div className={description2}>
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
      <div className={change.img3}>
        <img src={img3} alt="" />
        <div className={description3}>
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
