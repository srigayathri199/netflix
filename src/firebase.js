import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBdSnmJWt3DV4N-KD1bfebIzYoytqm0dQU",
    authDomain: "netflix-clone-1ba9b.firebaseapp.com",
    projectId: "netflix-clone-1ba9b",
    storageBucket: "netflix-clone-1ba9b.appspot.com",
    messagingSenderId: "916953366790",
    appId: "1:916953366790:web:0778db40d85795ce505e87"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;