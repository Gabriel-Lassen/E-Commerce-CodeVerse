import styles from "./styles.module.scss";
import userImg from "../../assets/imgs/imagemUser.jpg";
import arrow from "../../assets/imgs/arrow.svg";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/Auth";

function ProfileInformation() {
  const {user, setUser, localStorageUser} = useContext(AuthContext)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [ddd, setDdd] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatarUrl] = useState('')
  const [imageAvatar, setImageAvatar] = useState('')
  const [date, setDate] = useState('')


  function handleFile(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatar(image);
        setAvatarUrl(URL.createObjectURL(image));
      } else {
        toast.warning("Upload a png image");
        setImageAvatar(null);
        return;
      }
    }
  }

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setDate(user.date);
      setPassword(user.password);
      setDdd(user.ddd);
      setNumber(user.number);
      setAvatarUrl(user.avatar);
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.personal}>
          <img src={arrow} className={styles.arrow} />
          <h1>Personal Information</h1>
          <hr className={styles.separator} />
        </div>
        <div className={styles.avatar}>
        {avatar === null ? (
              <img src={userImg} alt="" />
            ) : (
              <img src={avatar} alt="" />
            )}
          <label>
            <span>Upload</span>
            <input type="file" accept="image/*"
            onChange={handleFile} />
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
          onChange={(e)=> setEmail(e.target.value)} disabled={true}/>
        </label>
        <label className={styles.mobile_number}>
          <span>Mobile Number</span>
          <div className={styles.input_container}>
            <input
              type="tel"
              maxLength="2"
              placeholder="DDD"
              value={ddd}
              onChange={(e)=> setDdd(e.target.value)}
              className={styles.input_small}
            />
            <input
              type="tel"
              maxLength="9"
              //placeholder="Number"
              value={number}
              onChange={(e)=> setNumber(e.target.value)}
              className={styles.input_large}
            />
          </div>
        </label>
        <label className={styles.birth}>
          <span> Date of birth</span>
          <input type="date"
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
            <input type="password" maxLength="12"
            value={password} 
            onChange={(e)=> setPassword(e.target.value)}
            disabled={true}
            />
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
