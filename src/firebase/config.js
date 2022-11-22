import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDKoEIdgxfCiQX2jnHsG2xMxwIRjtqaxdg",
  authDomain: "project-management-app-489e9.firebaseapp.com",
  projectId: "project-management-app-489e9",
  storageBucket: "project-management-app-489e9.appspot.com",
  messagingSenderId: "130235612128",
  appId: "1:130235612128:web:17fa13de9757e7aead4985"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export {projectFirestore, projectAuth}