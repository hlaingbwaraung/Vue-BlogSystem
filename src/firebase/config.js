import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA0HRLWwHmU4eV1XQ_oNXA5GNUiD1k2-CI",
    authDomain: "vue-blog-system-cf44c.firebaseapp.com",
    projectId: "vue-blog-system-cf44c",
    storageBucket: "vue-blog-system-cf44c.appspot.com",
    messagingSenderId: "946284851809",
    appId: "1:946284851809:web:c71f675e7a62988c5e3020"
};
//init firebase
firebase.initializeApp(firebaseConfig)

//database setup
let db = firebase.firestore();

export { db }