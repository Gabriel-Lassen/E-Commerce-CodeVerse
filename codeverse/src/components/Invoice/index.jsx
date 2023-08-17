import styles from "./styles.module.scss";
import download from "../../assets/imgs/downloadIcon.svg";

import { OrdersActionsContext } from "../../contexts/ordersActions";
import { useState, useContext, useEffect } from "react";
import MobileSeparator from "../MobileSeparator";
import OrderDetails from "../OrderDetails";
import MobileFixedBottomBar from "../MobileFixedBottomBar";
import BtnGeneric from "../BtnGeneric";

const Invoice = ({ id }) => {
  const { userOrders, handleExecuteOrder } = useContext(OrdersActionsContext);
  const [itemsOrdered, setItemsOrdered] = useState([]);
  const [order, setOrder] = useState();
  const [pay, setPay] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleHidden = () => {
      setHidden(window.innerWidth >= 769);
    };

    handleHidden();

    window.addEventListener("resize", handleHidden);
  });

  useEffect(() => {
    const order = userOrders.find((item) => {
      return item.orderId == id;
    });
    if (order) {
      setOrder(order);
      setItemsOrdered(order.productsOrdered);
      setPay(order.orderTotalPrice);
    }
  }, [userOrders, id]);

  function dados() {
    var dados_user = document.getElementById("dados").innerHTML;

    var janela = window.open("", "_blank", "width=800, height=600");
    janela.document.write("<html><head>");
    janela.document.write(
      '<title style="font-size: 24px;">Download Invoice</title>'
    );
    janela.document.write("<style>");
    janela.document.write(
      'body { margin: 20px; font-family: "Inter", sans-serif; font-size: 16px; }'
    );
    janela.document.write("</style></head>");
    janela.document.write("<body>");
    janela.document.write(dados_user);
    janela.document.write("</body></html>");
    janela.document.close();
    janela.print();
  }

  return (
    <>
    <div id="dados">
      {order && (
        <div className={styles.container}>
          <div className={styles.card}>
            <span className={styles.id}>#{order.orderId}</span>
            <div>
              <span className={styles.text}>Placed On</span>
              <span className={styles.date}>{order.orderDate}</span>
            </div>
          </div>
          <span className={styles.qty}>
            {order.productsOrdered.length} Item(s)
          </span>
          <div className={styles.productContainer}>
            {itemsOrdered &&
              itemsOrdered.map((item) => {
                return (
                  <div className={styles.products} key={item.productId}>
                    <div>
                      <span className={styles.name}>{item.productName}</span>
                      <span className={styles.info}>{item.productInfo}</span>
                    </div>
                    <span className={styles.price}>{item.productPrice}</span>
                    <span>Qty- 1</span>
                    <div className={styles.separator}></div>
                  </div>
                );
              })}
          </div>
          <MobileSeparator />
          <div className={styles.details}>
            <OrderDetails totalPrice={pay} />
            {hidden && (
              <div className={styles.webButton}>
                <BtnGeneric
                  theme={"dark"}
                  icon={download}
                  text={"Download Invoice"}
                  onClick={dados}
                />
              </div>
            )}
          </div>
           
        </div>
      )}
    </div>
    
     <MobileFixedBottomBar>
     <div className={styles.button}>
       <BtnGeneric
         theme={"dark"}
         icon={download}
         text={"Download Invoice"}
         onClick={dados}
       />
     </div>
   </MobileFixedBottomBar>
   </>
  );
};

export default Invoice;
