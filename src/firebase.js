import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC0SWHzDs9rLf_1iIUtPHisebjaQrGAdPY",
  authDomain: "dive-clone-f4cc5.firebaseapp.com",
  databaseURL: "https://dive-clone-f4cc5-default-rtdb.firebaseio.com",
  projectId: "dive-clone-f4cc5",
  storageBucket: "dive-clone-f4cc5.appspot.com",
  messagingSenderId: "510031706065",
  appId: "1:510031706065:web:14fb52fd482a34cf2492f0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }