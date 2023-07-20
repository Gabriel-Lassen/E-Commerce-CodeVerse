
import { auth, db, storage } from "../FirebaseConection";
import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { setDoc, doc, updateDoc } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import { uploadBytes, ref, getDownloadURL } from "@firebase/storage";

export const AuthContext = createContext({});

function AuthProvider({children}) {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

  async function handleUpload(image, uid) {
    const currentUid = uid

    const uploadRef = ref(storage, `images/${currentUid}/${image.name}`)

    const uploadTask = uploadBytes(uploadRef, image)
    .then((snapshot) => {
      getDownloadURL(snapshot.ref). then (async(downloadURL)=> {
        let urlFoto = downloadURL;

        const docRef = doc(db, "users", uid)
        await updateDoc(docRef, {
          avatar: urlFoto
        })
      })
    })
    
  }

    async function register(email,password, date, firstName, lastName, image) {
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
                alert("successfully registered")
                navigate("/login")
                handleUpload(image, uid)
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