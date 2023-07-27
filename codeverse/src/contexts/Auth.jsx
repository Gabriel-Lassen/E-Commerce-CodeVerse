import { auth, db, storage } from "../FirebaseConection";
import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { setDoc, doc, updateDoc, getDoc } from "@firebase/firestore";
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import { uploadBytes, ref, getDownloadURL } from "@firebase/storage";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);
  function loadUser() {
    const storageUser = localStorage.getItem("CodeVerse");
    if (storageUser) {
      setUser(JSON.parse(storageUser));
      //navigate('/')
    }
  }

  async function handleUpload(image, uid) {
    const currentUid = uid;

    const uploadRef = ref(storage, `images/${currentUid}/${image.name}`);

    const uploadTask = uploadBytes(uploadRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(async (downloadURL) => {
        let urlFoto = downloadURL;

        const docRef = doc(db, "users", uid);
        await updateDoc(docRef, {
          avatar: urlFoto,
        });
      });
    });
  }

  async function register(email, password, date, firstName, lastName, image, ddd, number) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid;
        await setDoc(doc(db, "users", uid), {
          password: password,
          firstName: firstName,
          lastName: lastName,
          email: email,
          date: date,
          ddd: ddd,
          number: number
        }).then(() => {
          toast.success("successfully registered");
          navigate("/login");
          handleUpload(image, uid);
        });
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function signIn(email, password) {
    setLoadingAuth(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        let data = {
          uid: uid,
          firstName: docSnap.data().firstName,
          lastName: docSnap.data().lastName,
          email: docSnap.data().email,
          date: docSnap.data().date,
          avatar: docSnap.data().avatar,
          password: docSnap.data().password,
          ddd: docSnap.data().ddd,
          number: docSnap.data().number,

        };
        setUser(data);
        setLoadingAuth(false);
        localStorageUser(data);
        toast.success("Welcome back");
        navigate('/')
      })
      .catch((error) => {
        setLoadingAuth(false);
        if(error.code == 'auth/user-not-found'){
          return  toast.error('User not found');
        }
        if(error.code == 'auth/wrong-password') {
           return toast.error('Wrong password');
        }
        
    })
  }

  function localStorageUser(user) {
    localStorage.setItem("CodeVerse", JSON.stringify(user));
  }

  return (
    <AuthContext.Provider value={{ register, signIn, user, setUser, localStorageUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
