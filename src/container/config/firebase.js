import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
// import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrKhrgF38cwYDFYew7_P3h-Jbh_htRRK0",
  authDomain: "handform-3017b.firebaseapp.com",
  projectId: "handform-3017b",
  storageBucket: "handform-3017b.appspot.com",
  messagingSenderId: "513120191394",
  appId: "1:513120191394:web:e49f7f3adf702702d6a8fb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
// export const storage = firebase.storage();
export default firebase;

// ACTION--------------------------------------------------------------

// sign in
export const signInToDatabase = (username, password) =>
  new Promise((resolve, reject) =>
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then((userCredential) => resolve(userCredential.user))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("login error\n" + errorMessage + "\ncode : " + errorCode);
        reject("gagal", errorMessage);
      })
  );

// sign up
export const signUpToDatabase = (email, password) =>
  new Promise((resolve, reject) =>
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => resolve(userCredential.user))
      .catch((error) => reject(error.message))
  );

// get data
export const getDataFromAPI = (path) => {
  const datas = database.ref(`${path}/`);
  return new Promise((resolve, reject) => {
    datas.on("value", (snapshot) => {
      const data = [];
      if (snapshot.val()) {
        // MEMBUAT OBJECT MENJADI ARRAY
        Object.keys(snapshot.val()).map((key) => {
          return data.push({
            id: key,
            data: snapshot.val()[key],
          });
        });
        resolve(data);
      } else {
        alert("data not found");
      }
    });
  });
};
