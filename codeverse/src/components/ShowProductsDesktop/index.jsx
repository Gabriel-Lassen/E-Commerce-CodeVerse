import { useContext} from 'react';

import { FilterActionsContext } from '../../contexts/filterActions';

import ProductCard from '../ProductCard';

import styles from './styles.module.scss';

const ShowProductsDesktop = () => {

    const { productsPerPage, totalPages, currentProducts, handlePageChange, currentPage,  } = useContext(FilterActionsContext);

  return (
    <div className={styles.wrapper}>
        <div>
            <ul className={styles.list}>
                {productsPerPage > 0 && currentProducts.length > 0 &&
                    currentProducts.map((item, idx) => (
                        <li key={idx}>
                             <ProductCard
                                key={idx}
                                id={item.id}
                                name={item.name}
                                info={item.info}
                                price={item.price}
                                discount={item.discount}
                                averageStars={item.rating.averageStars}
                                totalRatings={item.rating.totalRatings}
                                url={item.url}
                                popularity={item.popularity}
                                reviews={item.reviews}
                                addToBagBtn={true}
                                rating={true}
                            />
                        </li>
                    ))
                }
            </ul>
            {productsPerPage > 0 &&
                <div className={styles.pageButtons}>
                    <div className={styles.pageCounters}>
                        {productsPerPage > 0 &&
                        Array.from({ length: totalPages }, (_, index) => (
                        <button key={index} onClick={() => handlePageChange(index + 1)} style={index + 1 == currentPage ? {backgroundColor: "var(--Primary)", color: "var(--Bright)"} : {}}>
                            {index + 1}
                        </button>
                        ))
                        }
                    </div>
                    <button className={styles.nextBtn} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                </div>
            }
        </div>
    </div>
  )
}

export default ShowProductsDesktop