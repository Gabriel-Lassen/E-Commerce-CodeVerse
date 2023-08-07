import { createContext, useState, useEffect, useContext } from "react";
import { setDoc, doc, collection, getDocs, query, deleteDoc } from "@firebase/firestore";
import { db } from "../FirebaseConection";
import { AuthContext } from "./Auth";
import { toast } from "react-toastify";

export const WishlistActionsContext = createContext({});

const WishlistActionsProvider = ({children}) => {
    const { user } = useContext(AuthContext)
    const [userWishlist, setUserWishlist] = useState([]);

    useEffect(() => {
        if(user){
            handleGetUserWishlist();
        }
    }, [user])

    async function handleaddToUserWishlist(productId){
        await setDoc(doc(db, `/users/${user.uid}/wishlist`, productId), {
            productId,
        })
        .then(() => {
            toast.success("Product added to Wishlist");
            handleGetUserWishlist();
        });
    };

    async function handleGetUserWishlist() {
        let list = [];
        const q = query(collection(db, `/users/${user.uid}/wishlist`));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((item) => {
            const newItem = item.data();
            list = [...list, newItem];
        });
        setUserWishlist(list);
    };

    async function handleDeleteOneProductUserWishlist(productId){
        await deleteDoc(doc(db, `/users/${user.uid}/wishlist`, productId))
        .then(() => {
            toast.success("Product removed from Wishlist");
            handleGetUserWishlist();
        }).catch(() => {
            toast.error('An error occurred, please try again later');
        });
    };

    async function handleDeleteAllProductsUserWishlist(){
        const q = query(collection(db, `/users/${user.uid}/wishlist`));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((product) => {
            const item = product.data();
            deleteDoc(doc(db, `/users/${user.uid}/wishlist`, item.productId));
        });
        toast.success("Delete all products");
        setUserWishlist([]);
    };

  return (
    <WishlistActionsContext.Provider 
        value={{
            userWishlist,
            handleaddToUserWishlist,
            handleGetUserWishlist,
            handleDeleteOneProductUserWishlist,
            handleDeleteAllProductsUserWishlist, 
        }}
    >
        {children}
    </WishlistActionsContext.Provider>
    
  )
}

export default WishlistActionsProvider;