import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyAXvP1Sg_kOFXkLm53YEkuMYGiy3a9qr74",
    authDomain: "whatsapp-clone-50f42.firebaseapp.com",
    projectId: "whatsapp-clone-50f42",
    storageBucket: "whatsapp-clone-50f42.appspot.com",
    messagingSenderId: "840193888683",
    appId: "1:840193888683:web:eb27bf4f68e7fda5bd82ee",
    measurementId: "G-FYQ4F0JZWJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db