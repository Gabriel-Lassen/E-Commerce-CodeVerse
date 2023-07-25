import BtnAddToBag from '../../../BtnAddToBag';
import BtnAddToWishlist from '../../../BtnAddToWishlist';
import DropdowBtn from '../../../DropdowBtn';
import MobileFixedBottomBar from '../../../MobileFixedBottomBar';
import MobileSeparator from '../../../MobileSeparator';
import ProductDescription from '../../../ProductDescription';
import ProductRating from '../../../ProductRating';
import ProductsCarousel from '../../../productsCarousel';
import styles from './styles.module.scss';

const OverviewMobile = () => {
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
        <div className={styles.carousel}>
            <ProductsCarousel
                title='You Might Also Like'
                showViewAll={false}
                keyToFilter='category'
                expectedOutcome='Handbags'
                maxItems={6}
            />
        </div>
        <MobileFixedBottomBar>
            <BtnAddToWishlist />
            <BtnAddToBag theme='dark'/>
        </MobileFixedBottomBar>
    </div>
  )
}

export default OverviewMobile