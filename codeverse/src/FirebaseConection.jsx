import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDwZirsiNX8aDTJsvWm2FgKJfR8n1DFHDk",
    authDomain: "codeverse-9b38c.firebaseapp.com",
    projectId: "codeverse-9b38c",
    storageBucket: "codeverse-9b38c.appspot.com",
    messagingSenderId: "527308266003",
    appId: "1:527308266003:web:70b2d06906cd596390fde6"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)
  const storage = getStorage(firebaseApp)
  
  export { db, auth, storage }