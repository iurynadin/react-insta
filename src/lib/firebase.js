import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDf6KXEhStT2LjqbonR3Kh_YQXp2K9aGCU",
    authDomain: "instagram-clone-7c687.firebaseapp.com",
    projectId: "instagram-clone-7c687",
    storageBucket: "instagram-clone-7c687.appspot.com",
    messagingSenderId: "368176439130",
    appId: "1:368176439130:web:ef24e565f1f2e7d7a1dd63",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// call the seed file only once
// seedDatabase(firebase);

export { firebase, FieldValue };
