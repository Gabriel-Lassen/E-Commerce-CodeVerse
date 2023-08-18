import { useState, useContext, useEffect } from 'react'
import { AuthContext } from "../../contexts/Auth";
import styles from "./styles.module.scss";
import pencil from "../../assets/imgs/Pencil.svg";
import Address from '../Address';

const BtnAddress = () => {

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
        setStreet(user.address.street);
      }
    }, [user]);

  return (
    <div className={styles.wrapper}>
        <h3>Deliver To</h3>
        <div className={styles.box}>
            <div className={styles.infos}>
                <h4>{`${firstName} ${lastName}`}</h4>
                {street === '' ? (
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
        {openAddress && <Address active={setOpenAddress} />}
    </div>
  )
}

export default BtnAddress