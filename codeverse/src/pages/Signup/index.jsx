import React from "react";

import styles from "./styles.module.scss";
import user from "../../assets/imgs/imagemUser.jpg";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";

function Signup() {
  const {register} = useContext(AuthContext)
  
  function handleClick(e) {
    e.preventDefault();


    register()
  }
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.user}>
          <h1>Create Account</h1>
          <div className={styles.avatar}>
            <img src={user} alt="" />
            <label>
              <span>Upload</span>
              <input type="file" />
            </label>
          </div>
        </div>
        <form className={styles.labels} onSubmit={handleClick}>
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
        </form>
      </div>
    </div>
  );
}

export default Signup;
