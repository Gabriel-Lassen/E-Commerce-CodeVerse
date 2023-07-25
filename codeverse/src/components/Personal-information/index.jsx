import styles from "./styles.module.scss";
import user from "../../assets/imgs/imagemUser.jpg";
import arrow from "../../assets/imgs/arrow.svg";

function ProfileInformation() {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div>
          <img src={arrow} className={styles.arrow}/>
          <h1>Personal Information</h1>
        </div>
        <div className={styles.avatar}>
          <img src={user} />
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
        <label className={styles.mobile_number}>
        <span>Mobile Number</span>
        <div className={styles.input_container}>
          <input type="tel" maxLength="2" placeholder="DDD" className={styles.input_small} />
          <input type="tel" maxLength="9" placeholder="Number" className={styles.input_large} />
        </div>
        </label>
        <label>
          <span> Date of birth</span>
          <input type="date" />
        </label>
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
      </form>
    </div>
  );
}
export default ProfileInformation;
