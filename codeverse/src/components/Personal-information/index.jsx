import styles from "./styles.module.scss";
import user from "../../assets/imgs/imagemUser.jpg";

function ProfileInformation() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <h1>Personal Information</h1>
        <div className={styles.avatar}>
          <img src={user} />
          <label>
            <span>Upload</span>
            <input type="file" accept="image/*" />
            <button>Delete</button>
          </label>
        </div>
      </div>
      <form className={styles.form}>
        <div className={styles.row}>
          <label>
            <span>First name</span>
            <input type="text" />
          </label>
          <label>
            <span>Last name</span>
            <input type="text" />
          </label>
        </div>
        <label>
          <span>Email</span>
          <input type="text" />
        </label>
        <label>
          <span>Mobile Number</span>
          <input type="number" />
        </label>
        <label>
          <span> Date of birth</span>
          <input type="date" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" maxLength="12" />
        </label>
        <label>
          <span>Confirm password</span>
          <input type="password" maxLength="12" />
          <button>Save Changes</button>
        </label>
      </form>
    </div>
  );
}
export default ProfileInformation;
