import Arrow from "../../assets/imgs/chevron-right-small.svg";
4;

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

  const ShowImg = (index) => {
    return index !== breadcrumbItems.length - 1;
  };

  return (
    <nav>
      <ul>
        {breadcrumbItems.map((step, index) => (
          <li key={index}>
            {step.label !== "" && (
              <Link to={step.link}>
                {step.label}

                {ShowImg(index) && <img src={Arrow} alt="" />}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RouteHistProd;
