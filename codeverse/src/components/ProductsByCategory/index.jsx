import FilterActionsProvider from '../../contexts/filterActions';
import ProductsByCategoyDesktop from './ProductsByCategoryDesktop';
import ProductsByCategoyMobile from './ProductsByCategoryMobile';

const ProductsByCategoy = () => {
  return (
    <FilterActionsProvider>
      <ProductsByCategoyMobile />
      <ProductsByCategoyDesktop />
    </FilterActionsProvider>
  )
}

export default ProductsByCategoy