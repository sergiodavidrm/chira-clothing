import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyBZ-vULjVGefSlTNuiSXaaXDTVh8uZVcIg",
  authDomain: "clothing-db-9d754.firebaseapp.com",
  databaseURL: "https://clothing-db-9d754.firebaseio.com",
  projectId: "clothing-db-9d754",
  storageBucket: "clothing-db-9d754.appspot.com",
  messagingSenderId: "579666758808",
  appId: "1:579666758808:web:3b85101098e391bbac14ed",
  measurementId: "G-12GH20SGSB",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
