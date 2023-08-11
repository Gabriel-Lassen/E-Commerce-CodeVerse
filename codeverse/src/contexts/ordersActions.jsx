import { createContext, useEffect, useContext, useState } from 'react';
import { setDoc, doc, collection, getDocs, query, deleteDoc } from "@firebase/firestore";
import { db } from "../FirebaseConection";
import { AuthContext } from "./Auth";
import { toast } from "react-toastify";

export const OrdersActionsContext = createContext({});

const OrdersActionsProvider = ({children}) => {
    const { user } = useContext(AuthContext);
    const { userBag, handleDeleteAllProductsUserBag } = useContext(AuthContext);
    const [userOrders, setUserOrders] = useState([{}]);
    const [address, setAddress] = useState({});

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

    function getBagData() {

    }

    async function getAddress() {
        if(user){
            const querySnapshot = await getDocs(collection(db, 'users', user.uid, 'address'));
        if (!querySnapshot.empty) {
          const docSnapshot = querySnapshot.docs[0];
          const addressData = docSnapshot.data();
          setAddress(addressData);
        }
        }
    };

    async function handleExecuteOrder() {
        const orderId = generateUniqueID();
        const orderDate = getCurrentDate();
        getAddress();
        await setDoc(doc(db, `/users/${user.uid}/orders`, orderId), {
            orderId: orderId,
            orderDate: orderDate,
            address: address,
        })
    }

    function handleGetUserOrders() {

    }

  return (
    <OrdersActionsContext.Provider 
        value={{
            userOrders,
        }}
    >
        {children}
    </OrdersActionsContext.Provider>
  )
}

export default OrdersActionsProvider