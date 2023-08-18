import { createContext, useState, useEffect, useContext } from "react";
import { setDoc, doc, collection, getDocs, query, deleteDoc } from "@firebase/firestore";
import { db } from "../FirebaseConection";
import { AuthContext } from "./Auth";
import { toast } from "react-toastify";

export const BagActionsContext = createContext({});

const BagActionsProvider = ({children}) => {
    const { user } = useContext(AuthContext)
    const [userBag, setUserBag] = useState([]);

    useEffect(() => {
        if(user){
            handleGetUserBag();
        }
    }, [user])

    async function handleaddToUserBag(productId){
        if(user) {
            await setDoc(doc(db, `/users/${user.uid}/bag`, productId), {
                productId,
            })
            .then(() => {
                toast.success("Product added to bag");
                handleGetUserBag();
            });
        } else {
            return toast.warning('Please loggin to add a product to your bag');
        }
    };

    async function handleGetUserBag() {
        let list = [];
        const q = query(collection(db, `/users/${user.uid}/bag`));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((item) => {
            const newItem = item.data();
            list = [...list, newItem];
        });
        setUserBag(list);
    };

    async function handleDeleteOneProductUserBag(productId){
        await deleteDoc(doc(db, `/users/${user.uid}/bag`, productId))
        .then(() => {
            toast.success("Product removed from bag");
            handleGetUserBag();
        }).catch(() => {
            toast.error('An error occurred, please try again later');
        });
    };

    async function handleDeleteAllProductsUserBag(){
        const q = query(collection(db, `/users/${user.uid}/bag`));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((product) => {
            const item = product.data();
            deleteDoc(doc(db, `/users/${user.uid}/bag`, item.productId));
        });
        toast.success("Delete all products");
        setUserBag([]);
    };

  return (
    <BagActionsContext.Provider 
        value={{
            userBag,
            handleaddToUserBag,
            handleGetUserBag,
            handleDeleteOneProductUserBag,
            handleDeleteAllProductsUserBag,
        }}
    >
        {children}
    </BagActionsContext.Provider>
    
  )
}

export default BagActionsProvider;