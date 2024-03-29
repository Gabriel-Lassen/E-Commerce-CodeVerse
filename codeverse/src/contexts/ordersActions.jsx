import { createContext, useContext, useEffect, useState } from 'react';
import { setDoc, doc, query, collection, getDocs } from "@firebase/firestore";
import { db } from "../FirebaseConection";
import { AuthContext } from "./Auth";
import { BagActionsContext } from './bagActions';
import { ProductsContext } from './products';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const OrdersActionsContext = createContext({});

const OrdersActionsProvider = ({children}) => {
    const navigate = useNavigate();
    const { listProducts } = useContext(ProductsContext);
    const { user } = useContext(AuthContext);
    const { userBag, handleDeleteAllProductsUserBag } = useContext(BagActionsContext);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [upiId, setUpiId] = useState('');
    const [userOrders, setUserOrders] = useState([]);
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    useEffect(() => {
        if(user){
            handleGetUserOrders();
        }
    }, [user])

    function generateUniqueID() {
        const randomPart = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
        return randomPart;
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
                    productName: product.name,
                    productInfo: product.info,
                    productPrice: (product.price * (1 - product.discount)).toFixed(2),
                    productImage: product.url,
                }
                bagProducts = [...bagProducts, newProduct];
                totalPrice = totalPrice + (product.price * (1 - product.discount));
            })

            return {bagProducts: bagProducts, totalPrice: totalPrice};
        }
    }

    async function handleExecuteOrder() {
        const orderId = generateUniqueID();
        const orderDate = getCurrentDate();
        const orderData = getUserBagProductsData();
        if(!orderData) {
            return
        }
        const productsOrdered = orderData.bagProducts;
        const orderTotalPrice = orderData.totalPrice;
        const orderedName = user.firstName + ' ' + user.lastName
        if(user.address.street === '' || 
        user.address.city === '' || 
        user.address.state === '' || 
        user.address.pinCode === '' || 
        user.address.complement === ''){
            return toast.warning('Please enter a valid address');
        }
        if(paymentMethod === ''){
            return toast.warning('Please select a payment method');
        }
        if(upiId === ''){
            return toast.warning('Please enter a valid UPI ID');
        }
        await setDoc(doc(db, `/users/${user.uid}/orders`, orderId), {
            orderId: orderId,
            orderDate: orderDate,
            orderAddress: user.address,
            productsOrdered: productsOrdered,
            orderTotalPrice: orderTotalPrice.toFixed(2),
            paymentMethod: paymentMethod,
            upiId: upiId,
            orderedName: orderedName,
        })
        .then(() => {
            handleDeleteAllProductsUserBag();
            setPaymentMethod('');
            setUpiId('')
            handleGetUserOrders();
            setOrderConfirmed(true);
            navigate("/checkout/orderplaced");
            toast.success('Your order has been confirmed!');
        })
    }

    async function handleGetUserOrders() {
        let list = [];
        const q = query(collection(db, `/users/${user.uid}/orders`));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((item) => {
            const newItem = item.data();
            list = [...list, newItem];
        });
        setUserOrders(list);
    }

    async function handleReorder(order) {
        if(order){
            const orderId = generateUniqueID();
            const orderDate = getCurrentDate();
            await setDoc(doc(db, `/users/${user.uid}/orders`, orderId), {
                orderId: orderId,
                orderDate: orderDate,
                orderAddress: order.orderAddress,
                productsOrdered: order.productsOrdered,
                orderTotalPrice: order.orderTotalPrice,
                paymentMethod: order.paymentMethod,
                upiId: order.upiId,
                orderedName: order.orderedName,
            })
            .then(() => {
                setPaymentMethod('');
                setUpiId('');
                handleGetUserOrders();
                setOrderConfirmed(true);
                navigate("/checkout/orderplaced");
                toast.success('Your reorder has been confirmed!');
            })
        }
    }

  return (
    <OrdersActionsContext.Provider 
        value={{
            paymentMethod,
            setPaymentMethod,
            setUpiId,
            userOrders,
            handleExecuteOrder,
            orderConfirmed,
            setOrderConfirmed,
            handleReorder
        }}
    >
        {children}
    </OrdersActionsContext.Provider>
  )
}

export default OrdersActionsProvider