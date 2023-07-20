
import { auth, db, storage } from "../FirebaseConection";
import { createContext } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { setDoc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthProvider({children}) {
    const navigate = useNavigate()
    async function register(email,password, date, firstName, lastName) {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(async (value) => {
            let uid = value.user.uid
            await setDoc(doc(db, 'users', uid), {
                firstName: firstName,
                lastName: lastName,
                email: email,
                date: date
            })
            .then(()=> {
                alert("registrado com sucesso")
                navigate("/login")
            })
        })
        .catch((error)=> {
            alert(error)
        })
        
        
     }
  return (
    <AuthContext.Provider 
  value={{register}}>
    {children}
  </AuthContext.Provider>
  )
}

export default AuthProvider