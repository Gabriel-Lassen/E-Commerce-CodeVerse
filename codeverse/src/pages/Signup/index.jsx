import React from "react";
import styles from "./styles.module.scss";
import user from "../../assets/imgs/imagemUser.jpg";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import { useState } from "react";


function Signup() {
  const {register} = useContext(AuthContext)


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [avatar, setAvatar] = useState(null)
  const [imageAvatar, setImageAvatar] = useState(null)


  function handleFile(e) {
    if(e.target.files[0]) {
      const image = e.target.files[0]


      if (image.type === 'image/jpeg' || image.type === 'image/png' ){
        setImageAvatar(image)
        setAvatar(URL.createObjectURL(image))
      }else{
        alert("envie uma imagem do tipo PNG")
        setImageAvatar(null)
        return;
      }
    }

  }


  function formatBirthdate(input) {
    const onlyNumbers = input.replace(/[^\d]/g, "");
    const day = onlyNumbers.slice(0, 2);
    const month = onlyNumbers.slice(2, 4);
    const year = onlyNumbers.slice(4, 8);

    let formattedDate = day;
    if (month.length > 0) {
      formattedDate += `/${month}`;
    }
    if (year.length > 0) {
      formattedDate += `/${year}`;
    }

    return formattedDate;
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
        alert("You must be at least 18 years old to register.");
        return;
      }
    }
      if (
        email === "" ||
        password === "" ||
        firstName === "" ||
        lastName === "" ||
        birthdate === "" ||
        confirmPassword === ""
      ) {
        alert("Fill in all fields please");
        return;
      }
      if (!handleEmail(email)) {
        alert("O email não atende aos requisitos");
        return;
      }
      if (!handlePassword(password)) {
        alert("A senha não atende aos requisitos");
        return;
      }
      if (password != confirmPassword) {
        alert("As senhas não correspondem.");
        return;
      }

      if(imageAvatar === null) {
        alert("Enviei uma imagem do tipo JPEG ou PNG")
      }
      register(email,password, birthdate, firstName, lastName, imageAvatar)
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

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.user}>
          <h1>Create Account</h1>
          <div className={styles.avatar}>
            {avatar === null ? (
              <img src={user} alt="" />
            ): (
              <img src={avatar} alt="" />
            )}
            <label>
              <span>Upload</span>
              <input type="file" accept="image/*" onChange={handleFile}/>
            </label>
          </div>
        </div>
        <form className={styles.labels} onSubmit={handleRegister}>
          <div className={styles.row}>
            <label>
              <span>First name:</span>
              <input type="text" 
              value={firstName}
              onChange={(e) => setFirstName(capitalize(e.target.value))}
              />
              
            </label>
            <label>
              <span>Last name:</span>
              <input type="text" 
              value={lastName}
              onChange={(e) => setLastName(capitalize(e.target.value))}
              />
            </label>
          </div>
          <label>
            <span>Email:</span>
            <input type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span> Date of birth: </span>
            <input type="text" 
            value={formatBirthdate(birthdate)}
            onChange={(e) => setBirthdate(e.target.value)}
            />
          </label>
          <label>
            <span>Password:</span>
            <input type="password" id="password"
            
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <span>Confirm password:</span>
            <input type="password" 
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
