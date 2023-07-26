import styles from "./styles.module.scss";
import userImg from "../../assets/imgs/imagemUser.jpg";
import arrow from "../../assets/imgs/arrow.svg";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/Auth";

function ProfileInformation() {
  const {user, setUser} = useContext(AuthContext)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const [date, setDate] = useState('')

  useEffect(() => {
    if (user ) {
      setFirstName(user.firstName)
    }
  }, [user])
  useEffect(()=> {
    if (user) {
      setLastName(user.lastName)
    }
  }, [user])
  useEffect(()=> {
    if (user) {
      setEmail(user.email)
    }
  }, [user])

  useEffect(()=> {
    if (user) {
      setDate(user.date)
    }
  }, [user])
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.personal}>
          <img src={arrow} className={styles.arrow} />
          <h1>Personal Information</h1>
          <hr className={styles.separator} />
        </div>
        <div className={styles.avatar}>
          <img src={userImg} />
          <label>
            <span>Upload</span>
            <input type="file" accept="image/*" />
          </label>
          <div className={styles.buttonDelete}>
            <button>Delete</button>
          </div>
        </div>
      </div>
      <form className={styles.form}>
        <div className={styles.row}>
          <label>
            <span>First name</span>
            <input type="text"
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}/>
          </label>
          <label>
            <span>Last name</span>
            <input type="text"
            value={lastName}
            onChange={(e)=> setLastName(e.target.value)} />
          </label>
        </div>
        <label className={styles.email}>
          <span>Email</span>
          <input type="text" 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}/>
        </label>
        <label className={styles.mobile_number}>
          <span>Mobile Number</span>
          <div className={styles.input_container}>
            <input
              type="tel"
              maxLength="2"
              placeholder="DDD"
              className={styles.input_small}
            />
            <input
              type="tel"
              maxLength="9"
              placeholder="Number"
              className={styles.input_large}
            />
          </div>
        </label>
        <label className={styles.birth}>
          <span> Date of birth</span>
          <input type="text"
          value={date}
          onChange={(e)=> setDate(e.target.value)} />
        </label>
        <div className={styles.side}>
          <div>
            <h1>Change Password</h1>
            <hr className={styles.separator} />
          </div>
        </div>
        <div className={styles.password}>
          <label>
            <span>Current Password</span>
            <input type="password" maxLength="12" />
          </label>
          <label>
            <span>New Password</span>
            <input type="password" maxLength="12" />
          </label>
          <label>
            <span>Confirm password</span>
            <input type="password" maxLength="12" />
          </label>
          <button>Save Changes</button>
        </div>
      </form>
    </div>
  );
}
export default ProfileInformation;
