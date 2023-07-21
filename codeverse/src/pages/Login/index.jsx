import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { GoMail, GoLock } from "react-icons/go";
import { signInWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../FirebaseConection";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    e.preventDefault();

    if (email == "" || password == "") {
      alert("Preencha todos os campos");
      return;
    }
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
      return alert("Insira um email válido");
    }
    signIn(email, password);
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1>Welcome Back!</h1>
        <div className={styles.input_bx}>
          <input
            type="text"
            required="required"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <GoMail className={styles.email} />
        </div>
        <div className={styles.input_bx}>
          <input
            type="password"
            required="required"
            placeholder="Password"
            maxLength="12"
            onChange={(e) => setPassword(e.target.value)}
          />
          <GoLock className={styles.password} />
        </div>
        <div className={styles.login}>
          <button onClick={login}>Sign in</button>
          <p>
            Dont have an account? <Link className={styles.link}>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
