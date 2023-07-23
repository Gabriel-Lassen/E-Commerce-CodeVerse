import React from 'react'

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
        toast.warning("Upload a png image")
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
        confirmPassword === ""
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

      if(imageAvatar === null) {
        toast.warning("I sent a JPEG or PNG image")
        return
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
    <div>Signup</div>
  )
}

export default Signup;
