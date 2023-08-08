import { useState, useContext, useEffect } from 'react'
import { AuthContext } from "../../contexts/Auth";
import styles from "./styles.module.scss";
import pencil from "../../assets/imgs/Pencil.svg";

const BtnAddres = () => {

    const { user, getAddress } = useContext(AuthContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState("")
  
    useEffect(() => {
        if (user) {
          setFirstName(user.firstName);
          setLastName(user.lastName);
          setStreet(getAddress.street)
        }
      }, [user, getAddress]);

  return (
    <div>
        <h3>Deliver To</h3>
        <div className={styles.box}>
            <div className={styles.infos}>
                <h4>{`${firstName} ${lastName}`}</h4>
                {!user ? (
            <p>No address registered</p>
          )
          :(
            <p>{street}</p>
          )}
            </div>
            <button>
                <img src={pencil} alt="" />
            </button>
        </div>
    </div>
  )
}

export default BtnAddres