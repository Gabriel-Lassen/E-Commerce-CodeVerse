import styles from './styles.module.scss';
import { ProductsContext } from '../../contexts/products';
import { useContext, useEffect, useState } from 'react'

const ProductDescription = ({id}) => {
    const { listProducts } = useContext(ProductsContext);
    const [productDescription, setProductDescription] = useState('')

    useEffect(() => {
        if (listProducts) {
            const productId = window.location.pathname.split("/products/").pop();

            const product = listProducts.find((item) => item.id === productId);

            if (product) {
            setProductDescription(product.details);
            }
        }
    }, [listProducts]);
    
  return (
    <div>
        <p>{productDescription}</p>
    </div>
  )
}

export default ProductDescription