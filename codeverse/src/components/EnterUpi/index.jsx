import { useContext, useState } from 'react';
import { OrdersActionsContext } from '../../contexts/ordersActions';
import styles from './styles.module.scss'; 

const SVGContainer = () => {
  const { setUpiId } = useContext(OrdersActionsContext);
  const [isActivee, setIsActivee] = useState(false);

  const toggleSVG = () => {
    setIsActivee((Active) => !Active);
  };

  return (
    <div className={styles.center}>
      <div className={styles.contentUPI}>
        <div className={styles.inputWrapper}>
          <input type="text" placeholder="Enter your UPI Id" onChange={(e) => setUpiId(e.target.value)}/>
          <p>Eg: 1234567890@ybl</p>
          <div className={styles.checkbox} onClick={toggleSVG}>
            {isActivee ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect width="18" height="18" rx="2" fill="#1B4B66" />
                  <path
                    d="M7.33898 14.081C7.15177 14.2682 6.84823 14.2682 6.66102 14.081L2.70549 10.1255C2.31586 9.73586 2.31586 9.10414 2.70549 8.71451C3.09474 8.32526 3.7257 8.32482 4.11549 8.71353L7 11.59L13.88 4.71C14.2717 4.31829 14.9072 4.31941 15.2975 4.71251C15.6859 5.10365 15.6848 5.73524 15.295 6.125L7.33898 14.081Z"
                    fill="white"
                  />
                </svg>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="1" width="16" height="16" rx="1" stroke="#626262" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
            <span>Save this for future transactions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SVGContainer;
