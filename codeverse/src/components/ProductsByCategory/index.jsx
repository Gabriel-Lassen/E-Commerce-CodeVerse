import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import FilterActionsProvider from '../../contexts/filterActions';
import ProductsByCategoyDesktop from './ProductsByCategoryDesktop';
import ProductsByCategoyMobile from './ProductsByCategoryMobile';

const ProductsByCategoy = () => {
  const [category, setCategory] = useState('');
  const location = useLocation();

  useEffect(() => {
    const categoryUrl = window.location.pathname.split("/categories/").pop();
    setCategory(categoryUrl)
  }, [location]);

  return (
    <FilterActionsProvider category={category} >
      <ProductsByCategoyMobile />
      <ProductsByCategoyDesktop />
    </FilterActionsProvider>
  )
}

export default ProductsByCategoy