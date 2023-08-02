import Arrow from "../../assets/imgs/chevron-right-small.svg";
import styles from "./styles.module.scss";

import { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductsContext } from "../../contexts/products";

const RouteHistProd = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/");

  const { listProducts } = useContext(ProductsContext);
  const [productCategory, setProductCategory] = useState("");

  useEffect(() => {
    if (listProducts) {
      const productId = window.location.pathname.split("/products/").pop();

      const product = listProducts.find((item) => item.id === productId);

      if (product) {
        setProductCategory(product.category);
      }
    }
  }, [listProducts]);

  const breadcrumbLabels = {
    "": "Home",
    products:
      productCategory.charAt(0).toUpperCase() + productCategory.slice(1),
  };

  const breadcrumbItems = pathnames.map((pathname, index) => {
    const routeTo = `/${pathnames.slice(1, index + 1).join("/")}`;
    const label = breadcrumbLabels[pathname] || pathname;

    return { label, link: routeTo };
  });

  return (
    <nav>
      <ul className={styles.bread}>
        {breadcrumbItems.map((step, index) => (
          <li key={index}>
            <Link
              to={step.link}
              className={step.label === "Home" ? styles.home : styles.link}
            >
              {step.label}

              {index !== breadcrumbItems.length - 1 && (
                <img src={Arrow} alt="" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RouteHistProd;
