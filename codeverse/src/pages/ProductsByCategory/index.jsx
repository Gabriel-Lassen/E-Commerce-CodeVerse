import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BtnBackForPage from "../../components/BtnBackForPage";
import ShowProducts from "../../components/ShowProducts";

const ProductsByCategoy = () => {
  const location = useLocation();
  const [category, setCategory] = useState();

  useEffect(() => {
    const categoryUrl = window.location.pathname.split("/categories/").pop();
    const capitalized = categoryUrl[0].toUpperCase() + categoryUrl.substr(1);
    setCategory(capitalized)
  }, [location])


  return (
    <div>
      {/*<BtnBackForPage text={category} />*/}
      <ShowProducts category={category} />
    </div>
  )
}

export default ProductsByCategoy