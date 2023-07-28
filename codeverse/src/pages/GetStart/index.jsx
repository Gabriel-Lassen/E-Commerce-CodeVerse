import styles from "./styles.module.scss";
import bg from "../../assets/imgs/bg-getstarted.png";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const GetStart = () => {
  const navigate = useNavigate();
  const handleResize = () => {
    const windowWidth = window.innerWidth;

    const breakpointWidth = 769;

    if (windowWidth >= breakpointWidth) {
      navigate("/login");
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.bg}>
        <img src={bg} alt="" />
      </div>
      <div className={styles.linearBg}>
        <div className={styles.component}>
          <h1>The shopping destination you need</h1>
          <Link to="/signup">
            <button>Get Started</button>
          </Link>
          <Link to="/Login">
            <p>I already have an account</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
