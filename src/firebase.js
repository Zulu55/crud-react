import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBeOhELshJOYqNl_Ismik92r3Vtc9zmcpM",
    authDomain: "crud-simple-9bf99.firebaseapp.com",
    projectId: "crud-simple-9bf99",
    storageBucket: "crud-simple-9bf99.appspot.com",
    messagingSenderId: "130655921989",
    appId: "1:130655921989:web:818e026f978d5e3a72802c"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)