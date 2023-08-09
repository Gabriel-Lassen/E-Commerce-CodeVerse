import { useState, useContext, useEffect } from 'react'
import { AuthContext } from "../../contexts/Auth";
import { db } from "../../FirebaseConection";
import { collection, getDocs } from "firebase/firestore";
import styles from "./styles.module.scss";
import pencil from "../../assets/imgs/Pencil.svg";
import Addres from '../Edit-Addres';

const BtnAddres = () => {

    const { user } = useContext(AuthContext);
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState("");
    const [openAddress, setOpenAddress] = useState(false);

    const showAddress = () => setOpenAddress(!openAddress);

    useEffect(() => {
          if (user) {
              setFirstName(user.firstName);
              setLastName(user.lastName);

              const addressCollectionRef = collection(db, "users", user.uid, "address");
              const getAddress = async () => {
              const querySnapshot = await getDocs(addressCollectionRef);
            if (!querySnapshot.empty) {
                const docSnapshot = querySnapshot.docs[0];
                const addressData = docSnapshot.data();
                setStreet(addressData.street);
            }
          };
        getAddress();
      }
    }, [user]);

  return (
    <div className={styles.wrapper}>
        <h3>Deliver To</h3>
        <div className={styles.box}>
            <div className={styles.infos}>
                <h4>{`${firstName} ${lastName}`}</h4>
                {!street ? (
            <p>No address registered</p>
          )
          :(
            <p>{street}</p>
          )}
            </div>
            <button onClick={showAddress}>
                <img src={pencil} alt="" />
            </button>
        </div>
        {openAddress && <Addres active={setOpenAddress} />}
    </div>
  )
}

export default BtnAddres