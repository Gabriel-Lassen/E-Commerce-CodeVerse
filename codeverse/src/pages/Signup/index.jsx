import styles from "./styles.module.scss";
import user from "../../assets/imgs/imagemUser.jpg";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import { useState } from "react";
import { toast } from "react-toastify";

function Signup() {
  const { register } = useContext(AuthContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [imageAvatar, setImageAvatar] = useState(null);
  const [ddd, setDdd] = useState('');
  const [number, setNumber] = useState('');

  function handleFile(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === "image/jpeg" || image.type === "image/png") {
        setImageAvatar(image);
        setAvatar(URL.createObjectURL(image));
      } else {
        toast.warning("Upload a png image");
        setImageAvatar(null);
        return;
      }
    }
  }

 

  function handleRegister(e) {
    e.preventDefault();

    if (email !== "" && password !== "") {
      const currentDate = new Date();
      const birthdateInput = new Date(birthdate);
      const ageDiffMilliseconds = currentDate - birthdateInput;
      const ageDate = new Date(ageDiffMilliseconds);
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);

      if (age < 18) {
        toast.error("You must be at least 18 years old to register.");
        return;
      }
    }
    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === "" ||
      birthdate === "" ||
      confirmPassword === "" ||
      ddd === "" ||
      number === ""
    ) {
      toast.warning("Fill in all fields please");
      return;
    }
    if (!handleEmail(email)) {
      toast.warning("The email does not meet the requirements");
      return;
    }
    if (!handlePassword(password)) {
      toast.info("Password does not meet requirements(A!1)");
      return;
    }
    if (password != confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (imageAvatar === null) {
      toast.warning("I sent a JPEG or PNG image");
      return;
    }
    register(email, password, birthdate, firstName, lastName, imageAvatar, ddd, number);
  }

  function capitalize(string) {
    const words = string.split(" ");

    const capitalizedWords = words.map((word) => {
      if (word === "") {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    });
    return capitalizedWords.join(" ");
  }

  function handleEmail(email) {
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  handleEmail();

  function handlePassword(password) {
    let regexPassword = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z])/;

    return regexPassword.test(password);
  }

  handlePassword();

  const verifyLenght = (e) => {
    const inputValue = e.target.value;
    const maxLength = 9;

    if (inputValue.length <= maxLength) {
      setNumber(inputValue);
    } else {
      setNumber(inputValue.slice(0, maxLength));
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.user}>
          <h1>Create Account</h1>
          <div className={styles.avatar}>
            {avatar === null ? (
              <img src={user} alt="" />
            ) : (
              <img src={avatar} alt="" />
            )}
            <label>
              <span>Upload</span>
              <input type="file" accept="image/*" onChange={handleFile} />
            </label>
          </div>
        </div>
        <form className={styles.labels} onSubmit={handleRegister}>
          <div className={styles.row}>
            <label>
              <span>First name:</span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(capitalize(e.target.value))}
              />
            </label>
            <label>
              <span>Last name:</span>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(capitalize(e.target.value))}
              />
            </label>
          </div>
          <label>
            <span>Email:</span>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={styles.mobile_number}>
          <span>Mobile Number</span>
          <div className={styles.input_container}>
            <select
              type="tel"
              placeholder="DDD"
              value={ddd}
              onChange={(e) => setDdd(e.target.value)}
            >
              <option value="">DDD</option>
              <option value={1}>+1</option>
              <option value={7}>+7</option>
              <option value={33}>+33</option>
              <option value={44}>+44</option>
              <option value={49}>+49</option>
              <option value={55}>+55</option>
              <option value={81}>+81</option>
              <option value={86}>+86</option>
              <option value={91}>+91</option>
            </select >
            <input
              type="number"
            
              placeholder="Number"
              value={number}
              onChange={verifyLenght}
              className={styles.input_large}
            />
          </div>
        </label>
          <label>
            <span> Date of birth: </span>
            <input
              type="date"
              value={(birthdate)}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              type="password"
              id="password"
              maxLength="12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <span>Confirm password:</span>
            <input
              type="password"
              maxLength="12"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button>Sign Up</button>
          </label>
        </form>
      </div>
    </div>
  );
}

export default Signup;
