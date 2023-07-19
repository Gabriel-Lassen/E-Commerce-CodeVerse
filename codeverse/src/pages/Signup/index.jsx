import React from "react";

import styles from "./styles.module.scss";
import user from "../../assets/imgs/imagemUser.jpg";

function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.user}>
          <h1>Create Account</h1>
          <div className={styles.avatar}>
            <img src={user} alt="" />
            <button> Upload</button>
          </div>
        </div>
        <div className={styles.labels}>
        <div className={styles.row}>
          <label>
            <span>First name:</span>
            <input type="text" />
          </label>
          <label>
            <span>Last name:</span>
            <input type="text" />
          </label>
        </div>
        <label>
          <span>Email:</span>
          <input type="text" />
        </label>
        <label>
          <span> Date of birth: </span>
          <input type="date" />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" />
        </label>
        <label>
          <span>Confirm password:</span>
          <input type="password" />
          <button>Sign Up</button>
        </label>
        </div>
      </div>
    </div>
  );
}

export default Signup;
