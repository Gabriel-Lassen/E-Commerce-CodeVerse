import styles from "./styles.module.scss";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GoMail, GoLock } from "react-icons/go";
import { AuthContext } from "../../contexts/Auth";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    e.preventDefault();

    if (email == "" || password == "") {
      toast.warning("Fill in all fields");
      return;
    }

    
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
      return toast.warning("Enter a valid email");
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
            Dont have an account? <Link to='/signup' className={styles.link}>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
