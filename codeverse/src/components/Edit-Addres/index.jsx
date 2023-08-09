import {useState, useEffect, useContext} from 'react'
import { AuthContext } from "../../contexts/Auth";
import { db } from "../../FirebaseConection";
import { collection, getDocs } from "firebase/firestore";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import ArrowSvg from '../ArrowSvg';

const Addres = ({active}) => {

  const close = () => { active(false) }

  const { user, registerAddress, updateAddress } = useContext(AuthContext);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [ddd, setDdd] = useState("");
    const [number, setNumber] = useState("");
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [pinCode, setPinCode] = useState("")
    const [selectedOption, setSelectedOption] = useState("home");


    useEffect(() => {
      if (user) {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setDdd(user.ddd);
        setNumber(user.number);
      }
      const addressCollectionRef = collection(db, 'users', user.uid, 'address');
      const getAddress = async () => {
        const querySnapshot = await getDocs(addressCollectionRef);
        if (!querySnapshot.empty) {
          const docSnapshot = querySnapshot.docs[0];
          const addressData = docSnapshot.data();
          setStreet(addressData.street);
          setCity(addressData.city);
          setState(addressData.state);
          setPinCode(addressData.pinCode);
          setSelectedOption(addressData.complement);
        }
      };
      getAddress();
    }, [user]);

    async function saveAddress() {
      try {
        if (user) {
          if (street === "" || city === "" || state === "" || pinCode === "") {
            toast.warning("Fill in all fields please");
            return;
          }
  
          const addressData = {
            street: street,
            city: city,
            state: state,
            pinCode: pinCode,
            complement: selectedOption,
          };
  
          const addressCollectionRef = collection(db, 'users', user.uid, 'address');
          const querySnapshot = await getDocs(addressCollectionRef);
    
          if (querySnapshot.size === 0) {
            await registerAddress(addressData);
          } else {
            await updateAddress(addressData);
          }
        }
      } catch (error) {
        toast.error("Error saving address: " + error.message);
      }
    }
  
  return (
    <div className={styles.container}>    
        <div  className={styles.close}>
          <button onClick={close}>
            <ArrowSvg color="var(--Primary)" direction="left" />
          </button>
          <h1>Address</h1>
        </div>

      <form className={styles.form} onSubmit={(e) => {
        e.preventDefault();
        saveAddress();
      }}>

      <h3>Contact Information</h3>
      <hr className={styles.separator}/>
      <label className={styles.smallLabel}>
            <span>Full Name</span>
            <input
              type="text"
              value={`${firstName} ${lastName}`}
              onChange={(e) => setFirstName(e.target.value)}
              disabled={true}
            />
          </label>

          <label className={styles.mobile_number}>
          <span>Mobile Number</span>
          <div className={styles.input_container}>
            <input
              type="tel"
              value={ddd}
              onChange={(e) => setDdd(e.target.value)}
              className={styles.inputSmall}
              disabled={true}
            />
            <input
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className={styles.inputLarge}
              disabled={true}
            />
          </div>
        </label>
        
        <h3>Delivery Address</h3>
        <hr className={styles.separator}/>
        <label className={styles.smallLabel}>
            <span>Street Address</span>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder='Enter Address'
            />
          </label>
          <label className={styles.bigLabel}>
            <span>State</span>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder='Enter State'
            />
          </label>

        <label className={styles.smallLabel}>
            <span>City</span>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder='Enter City'
            />
          </label>
          <label className={styles.bigLabel}>
            <span>Pin Code</span>
            <input
              type="text"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
              placeholder='Enter Pin Code'
            />
          </label>

        
          <div className={styles.checkboxContainer}>
            <label
              className={`${styles.option} ${selectedOption === "home" ? styles.selected : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedOption("home");
              }}
            >
              Home
            </label>
            <label
              className={`${styles.option} ${selectedOption === "office" ? styles.selected : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedOption("office");
              }}
            >
              Office
            </label>
            <label
              className={`${styles.option} ${selectedOption === "other" ? styles.selected : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedOption("other");
              }}
            >
              Other
            </label>
          </div>

          <div>
            <button type="submit">Save</button>
          </div>
      </form>
    </div>
  );
}

export default Addres