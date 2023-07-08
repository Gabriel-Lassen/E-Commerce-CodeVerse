import styles from "./styles.module.scss";
import imagem1 from "../../assets/imgs/Rectangle531.png";
import imagem2 from "../../assets/imgs/Rectangle532.png";
import imagem3 from "../../assets/imgs/Rectangle533.png";

function ContentAbout() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles.about}>
          <h1>About</h1>
          <p>
            Welcome to CORA'L! We are an e-commerce company based in the United
            States, dedicated to providing an exceptional shopping experience.
            Since our inception, we have been committed to offering a wide range
            of high-quality products to our customers worldwide. Our passion for
            fashion, styles, and beauty drives us to provide a carefully curated
            selection of products in the categories of Handbags, Watches,
            Skincare, Jewellery, and Apparels.
          </p>
        </div>
      </div>
      <div className={styles.descriptionImage}>
        <div className={styles.text}>
          <h1>About</h1>
          <p>
            The history of CORA'L dates back to years of dedication and hard
            work. We started as a small family business with a clear vision of
            bringing the latest fashion trends and affordable luxury products to
            everyone. Over the years, we have grown and expanded, building
            strong relationships with trusted suppliers and maintaining the
            highest standards of quality. Our experienced team is always on the
            lookout for the most renowned brands and the most unique products,
            ensuring that our customers have access to an exceptional selection
            of items.
          </p>
        </div>
        <img src={imagem1} alt="" />
      </div>

      <div className={`${styles.descriptionImage} ${styles.invertImage}`}>
        <img src={imagem2} alt="" />
        <div className={styles.text}>
          <h1>About</h1>
          <p>
            At CORA'L, customer satisfaction is our top priority. We strive to
            provide a seamless shopping experience, from intuitive navigation on
            our website to fast and secure delivery of your products. We value
            the trust placed in us by our customers and work hard to exceed
            their expectations. Additionally, we offer exceptional customer
            service, ready to assist you at every step of the purchasing
            process.
          </p>
        </div>
      </div>
      <div className={styles.descriptionImage}>
        <div className={styles.text}>
          <h1>About</h1>
          <p>
            Our dedication to quality and service is reflected in our product
            selection. Whether you're looking for a stylish handbag, a
            sophisticated watch, high-quality skincare products, stunning
            jewelry, or fashionable apparel, CORA'L has what you need. We only
            work with renowned brands and authentic products to ensure the
            satisfaction of our customers. We invite you to explore our catalog
            and discover the variety and excellence that CORA'L has to offer.
          </p>
        </div>
        <img src={imagem3} alt="" />
      </div>
    </div>
  );
}
export default ContentAbout;
