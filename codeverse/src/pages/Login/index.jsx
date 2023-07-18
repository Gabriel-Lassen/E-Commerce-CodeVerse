import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";


const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1>Welcome Back!</h1>
        <div className={styles.input_bx}>
          <input type="text" required="required" placeholder="email" />
          {/* <span>Email</span> */}
        </div>
        <div className={styles.input_bx}>
          <input type="password" required="required" placeholder="password" />
          {/* <span>Password</span> */}
        </div>
        <div className={styles.login}>
          <button>Sign in</button>
          <p>Dont have an account? <Link className={styles.link}>Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
