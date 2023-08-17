import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { OrdersActionsContext } from '../../contexts/ordersActions';

import styles from "./styles.module.scss";

import Header from "../../components/Header";
import ShowFooter from "../../components/ShowFooter";
import SideBarProfile from "../../components/SideBar-Profile";
import RouteHistory from "../../components/Route-history";
import ItemsOrdered from "../../components/ItemsOrdered";
import Invoice from "../../components/Invoice";
import ArrowSvg from "../../components/ArrowSvg";

import Options from '../../assets/imgs/trailing-icon.svg';
import ModalBottomMobile from "../../components/ModalBottomMobile/indes";
import MobileFixedBottomBar from "../../components/MobileFixedBottomBar";
import BtnGeneric from "../../components/BtnGeneric";

const OrderDetail = () => {
  const { userOrders, handleReorder } = useContext(OrdersActionsContext);
  const navigate = useNavigate()

  const [hidden, setHidden] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [componentInView, setComponentInview] = useState('Items');
  const [btnActive, setBtnActive] = useState('Items');
  const [order, setOrder] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleHidden = () => {
      setHidden(window.innerWidth >= 769);
    };
    handleHidden();
    window.addEventListener("resize", handleHidden);
  });

  useEffect(() => {
    const orderId = window.location.pathname.split("/profile/myorders/").pop();
    setOrderId(orderId);
  }, [])

  useEffect(() => {
      const order = userOrders.find((item) => {return item.orderId == orderId});
      if(order) {
        setOrder(order);
      }
  }, [userOrders, orderId]);
  
  function handleclick(text){
    setComponentInview(text);
    setBtnActive(text);
  }
  
  return (
    <div style={{display: "flex", flexDirection:"column", justifyContent: 'space-between', height: "100%"}}>
      <div>
        {hidden && <Header />}
        {hidden && <RouteHistory />}

        <div className={styles.title}>
          <h1>Order#{orderId}</h1>
        </div>

        {!hidden &&
          <div className={styles.topMobile}>
            <div className={styles.topBar}>
              <div className={styles.leftTopBar}>
                <button onClick={() => navigate(-1)}>
                  <ArrowSvg color='#13101E' direction='left' />
                </button>
                <span>{componentInView === 'Items' ? 'Items Ordered' : componentInView === 'Invoice' ? 'Invoice' : 'Order Shipment'}</span>
              </div>
              <button onClick={() => setShowModal(true)}>
                <img src={Options} alt="Options" />
              </button>
            </div>

            {componentInView === 'Items' &&
              <div className={styles.orderCard}>
                <span className={styles.cardTitle}>Order #{orderId}</span>
                <div className={styles.cardContent}>
                  <div className={styles.placed}>
                    <span>Placed On</span>
                    <span>{order && order.orderDate}</span>
                  </div>
                  <div className={styles.status}>
                    <span>Completed</span>
                  </div>
                </div>
              </div>
            }
          </div>
        }

        <div className={styles.container}>
          {hidden && <SideBarProfile />}
          
          <div className={styles.wrapper}>
            <div className={styles.btns}>
              <button onClick={() => handleclick('Items')} className={btnActive == 'Items' ? styles.btnActive : ''} >
                Items Ordered
              </button>
              <button onClick={() => handleclick('Invoice')} className={btnActive == 'Invoice' ? styles.btnActive : ''} >
                Invoice
              </button>
              <button onClick={() => handleclick('Order')} className={btnActive == 'Order' ? styles.btnActive : ''} >
                Order Shipment
              </button>
            </div>
            <div className={styles.inView}>
              { componentInView === 'Items' &&
                <>
                <ItemsOrdered />
                <MobileFixedBottomBar>
                  <div className={styles.botttomBtn}>
                    <BtnGeneric theme='dark' text='Reorder' onClick={() => handleReorder(order)} />
                  </div>
                </MobileFixedBottomBar>
                {hidden &&
                  <div className={styles.desktopBtn}>
                    <div className={styles.btn}>
                      <BtnGeneric theme='dark' text='Reorder' onClick={() => handleReorder(order)} />
                    </div>
                  </div>
                }
                </>
              }
              { componentInView === 'Invoice' &&
                <Invoice id={orderId}/>
              }
              { componentInView === 'Order' &&
                <></>
              }
            </div>
          </div>
        </div>

        {showModal &&
          <ModalBottomMobile setShowModal={setShowModal} >
            <div className={styles.modalWrapper}>
              <button onClick={() => handleclick('Items')}>
                <span>Item Ordered</span>
              </button>
              <button onClick={() => handleclick('Invoice')}>
                <span>Invoices</span>
              </button>
              <button onClick={() => handleclick('Order')}>
                <span>Order Shipment</span>
              </button>
            </div>
          </ModalBottomMobile>
        }
      </div>
      {hidden && <ShowFooter />}
    </div>
  )
}

export default OrderDetail