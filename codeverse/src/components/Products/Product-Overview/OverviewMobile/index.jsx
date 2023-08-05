import { useContext, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import { ProductsContext } from '../../../../contexts/products';

import styles from './styles.module.scss';

import BtnAddToBag from '../../../BtnAddToBag';
import BtnAddToWishlist from '../../../BtnAddToWishlist';
import DropdowBtn from '../../../DropdowBtn';
import MobileFixedBottomBar from '../../../MobileFixedBottomBar';
import MobileSeparator from '../../../MobileSeparator';
import ProductDescription from '../../../ProductDescription';
import ProductRating from '../../../ProductRating';
import ProductsCarousel from '../../../ProductsCarousel';
import InviteAFriend from '../../InviteAfriend';


const OverviewMobile = () => {
    const { listProducts } = useContext(ProductsContext);
    const [productCategory, setProductCategory] = useState('');
    const [productId, setProductId] = useState('');
    const location = useLocation();

   useEffect(() => {
    if (listProducts) {
        const productId = window.location.pathname.split("/products/").pop();
        const product = listProducts.find((item) => item.id === productId);
        if (product) {
            setProductCategory(product.category);
            setProductId(product.id)
        }
    }
   }, [listProducts, location]);

  return (
    <div className={styles.wrapper}>
        <MobileSeparator />
        <DropdowBtn title='Product Description'>
            <ProductDescription />
        </DropdowBtn>
        <MobileSeparator />
        <DropdowBtn title='Ratings & Reviews'>
            <ProductRating />
        </DropdowBtn>
        <MobileSeparator />
        <InviteAFriend />
        <MobileSeparator />
        <div className={styles.carousel}>
            <ProductsCarousel
                title='You Might Also Like'
                showViewAll={false}
                keyToFilter='category'
                expectedOutcome={productCategory}
                maxItems={6}
            />
        </div>
        <MobileFixedBottomBar>
            <div className={styles.btns}>
                <BtnAddToWishlist type='medium' id={productId}/>
                <BtnAddToBag theme='dark' id={productId}/>
            </div>
        </MobileFixedBottomBar>
    </div>
  )
}

export default OverviewMobile