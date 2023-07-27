import styles from "./styles.module.scss";
import userImg from "../../assets/imgs/imagemUser.jpg";
import arrow from "../../assets/imgs/arrow.svg";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/Auth";
import { toast } from "react-toastify";

function ProfileInformation() {
  const { user, handleDelete, handleUpload, handleUpdate } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [ddd, setDdd] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [date, setDate] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleFile(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      if (image.type === "image/jpeg" || image.type === "image/png") {
        setAvatar(URL.createObjectURL(image));
        handleUpload(image, user.uid);
        toast.success("successfully updated image");
      } else {
        toast.warning("Upload a png image");
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
      setAvatar(user.avatar);
    }
  }, [user]);

  function handleDeleteImg() {
    const imgDefault = "https://firebasestorage.googleapis.com/v0/b/codeverse-9b38c.appspot.com/o/images%2FimagemUser.jpg?alt=media&token=981ed2ce-ed0d-4b49-afdc-fcd42878390e"
    if (avatar !== imgDefault) {
      handleDelete();
      setAvatar(imgDefault);
    }
  }

  function handleUpdateData(e) {
    e.preventDefault();
    if (firstName === "" || lastName === "" || ddd === "" || number === "") {
      toast.warning("fill in all fields");
    } else {
      handleUpdate(firstName, lastName, ddd, number);
    }
  }

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
            <input type="file" accept="image/*" onChange={handleFile} />
          </label>
          <div className={styles.buttonDelete}>
            <button onClick={handleDeleteImg}>Delete</button>
          </div>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleUpdateData}>
        <div className={styles.row}>
          <label>
            <span>First name</span>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            <span>Last name</span>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
        </div>
        <label className={styles.email}>
          <span>Email</span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={true}
          />
        </label>
        <label className={styles.mobile_number}>
          <span>Mobile Number</span>
          <div className={styles.input_container}>
            <input
              type="tel"
              minLength="2"
              maxLength="2"
              placeholder="DDD"
              value={ddd}
              onChange={(e) => setDdd(e.target.value)}
              className={styles.input_small}
            />
            <input
              type="tel"
              maxLength="9"
              minLength="9"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className={styles.input_large}
            />
          </div>
        </label>
        <label className={styles.birth}>
          <span> Date of birth</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            disabled={true}
          />
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
            <input
              type="password"
              maxLength="12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={true}
            />
          </label>
          <label>
            <span>New Password</span>
            <input
              type="password"
              maxLength="12"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>
          <label>
            <span>Confirm password</span>
            <input
              type="password"
              maxLength="12"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
}
export default ProfileInformation;