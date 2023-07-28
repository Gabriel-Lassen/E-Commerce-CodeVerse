import { auth, db, storage } from "../FirebaseConection";
import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updatePassword } from "@firebase/auth";
import { setDoc, doc, updateDoc, getDoc, onSnapshot  } from "@firebase/firestore";
import { signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { uploadBytes, ref, getDownloadURL, deleteObject } from "@firebase/storage";
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
    }
  }

  async function handleUpload(image, uid) {
    const currentUid = uid;
    const uploadRef = ref(storage, `images/${currentUid}`);
    const uploadTask = uploadBytes(uploadRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(async (downloadURL) => {
        let urlFoto = downloadURL;
        const docRef = doc(db, "users", uid);
        await updateDoc(docRef, {
          avatar: urlFoto,
        })
        .then(()=> {
          let data = {
            ...user,
            avatar: urlFoto
          }
          setUser(data);
          localStorageUser(data);
          loadUser();
        })
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
          number: number,
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
        navigate("/");
      })
      .catch((error) => {
        setLoadingAuth(false);
        if (error.code == "auth/user-not-found") {
          return toast.error("User not found");
        }
        if (error.code == "auth/wrong-password") {
          return toast.error("Wrong password");
        }
      });
  }

  function localStorageUser(user) {
    localStorage.setItem("CodeVerse", JSON.stringify(user));
  }

  async function handleDelete() {
    const desertRef = ref(storage, `images/${user.uid}`);
    const useref = doc(db, "users", user.uid);
    deleteObject(desertRef)
      .then(() => {
        toast.success("successfully deleted");
      })

      .catch((error) => {
        console.log(error);
      });

    await updateDoc(useref, {
      avatar: 'https://firebasestorage.googleapis.com/v0/b/codeverse-9b38c.appspot.com/o/images%2FimagemUser.jpg?alt=media&token=981ed2ce-ed0d-4b49-afdc-fcd42878390e'
    })
    .then(() => {
      let data = {
        ...user,
        avatar:'https://firebasestorage.googleapis.com/v0/b/codeverse-9b38c.appspot.com/o/images%2FimagemUser.jpg?alt=media&token=981ed2ce-ed0d-4b49-afdc-fcd42878390e'

      }
      setUser(data);
      localStorageUser(data);
      loadUser()
    })
  }


  async function handleUpdate(firstName, lastName, ddd, number) {
    const useref = doc(db, "users", user.uid);
    await updateDoc(useref, {
      firstName: firstName,
      lastName: lastName,
      ddd: ddd,
      number: number,
    })
    .then(() => {
        let data = {
          ...user,
          firstName: firstName,
          lastName: lastName,
          ddd: ddd,
          number: number,
        };

        setUser(data);
        localStorageUser(data);
        loadUser();
        toast.success("data updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function handleUpdatePassword(password) {
    const user = auth.currentUser;
    updatePassword(user, password)
      .then(() => {
        toast.success("successfully updated password");
      })
      .catch((error) => {
        console.log(error);
      });
  }


  return (
    <AuthContext.Provider
      value={{
        register,
        signIn,
        user,
        setUser,
        localStorageUser,
        handleDelete,
        handleUpload,
        handleUpdate,
        handleUpdatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;