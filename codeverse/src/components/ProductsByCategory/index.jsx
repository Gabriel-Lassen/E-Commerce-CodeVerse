import FilterActionsProvider from '../../contexts/filterActions';
import ProductsByCategoyMobile from './ProductsByCategoryMobile';

const ProductsByCategoy = () => {
  return (
    <FilterActionsProvider>
      <ProductsByCategoyMobile />
    </FilterActionsProvider>
  )
}

export default ProductsByCategoy