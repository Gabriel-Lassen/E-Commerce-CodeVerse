import { createContext, useContext, useState } from 'react';
import { setDoc, doc } from "@firebase/firestore";
import { db } from "../FirebaseConection";
import { AuthContext } from "./Auth";
import { BagActionsContext } from './bagActions';
import { ProductsContext } from './products';

export const OrdersActionsContext = createContext({});

const OrdersActionsProvider = ({children}) => {
    const { listProducts } = useContext(ProductsContext);
    const { user } = useContext(AuthContext);
    const { userBag, handleDeleteAllProductsUserBag } = useContext(BagActionsContext);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [userOrders, setUserOrders] = useState([{}]);

    function generateUniqueID() {
        const randomPart = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
        return `#${randomPart}`;
    }

    function getCurrentDate() {
        const curentDate = new Date();
        const year = curentDate.getFullYear();
        const month = String(curentDate.getMonth() + 1).padStart(2, '0');
        const day = String(curentDate.getDate()).padStart(2, '0');
        
        const formatedDate = `${year}-${month}-${day}`;
        return formatedDate;
    }

    function getUserBagProductsData(){
        if(user && userBag.length > 0){
            let bagProducts = [];
            let totalPrice = 0;
            userBag.forEach((item) => {
                const product = listProducts.find((product) => {return product.id === item.productId});
                const newProduct = {
                    productId: product.id,
                    productPrice: (product.price * (1 - product.discount)).toFixed(2)
                }
                bagProducts = [...bagProducts, newProduct];
                totalPrice = totalPrice + (product.price * (1 - product.discount)).toFixed(2);
            })

            return {bagProducts: bagProducts, totalPrice: totalPrice};
        }
    }

    async function handleExecuteOrder() {
        const orderId = generateUniqueID();
        const orderDate = getCurrentDate();
        const orderData = getUserBagProductsData();
        const productsOrdered = orderData.bagProducts;
        const orderTotalPrice = orderData.totalPrice;
        await setDoc(doc(db, `/users/${user.uid}/orders`, orderId), {
            orderId: orderId,
            orderDate: orderDate,
            orderAddress: user.address,
            productsOrdered: productsOrdered,
            orderTotalPrice: orderTotalPrice,
        })
    }

    function handleGetUserOrders() {

    }

  return (
    <OrdersActionsContext.Provider 
        value={{
            paymentMethod,
            setPaymentMethod,
            userOrders,
            handleExecuteOrder,
        }}
    >
        {children}
    </OrdersActionsContext.Provider>
  )
}

export default OrdersActionsProvider