import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
// import "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlLz6w3rLYJ_n211nRIVCK_tlV2U1GA0A",
  authDomain: "handform-c62a3.firebaseapp.com",
  databaseURL: "https://handform-c62a3-default-rtdb.firebaseio.com",
  projectId: "handform-c62a3",
  storageBucket: "handform-c62a3.appspot.com",
  messagingSenderId: "867248517559",
  appId: "1:867248517559:web:7eed23797fda6d2ae8f832"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ACTION--------------------------------------------------------------

// sign in
export const signInToDatabase = (email, password) =>
  new Promise((resolve, reject) =>
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => resolve(userCredential.user))
      .catch((error) => reject(error))
  );

// sign up
export const signUpToDatabase = (email, password) =>
  new Promise((resolve, reject) =>
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => resolve(userCredential.user))
      .catch((error) => reject(error))
  );

// set
export const setDataToDatabase = (path, data) =>
  new Promise((resolve, reject) =>
    firebase
      .database()
      .ref(`/${path}`)
      .set(data)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  );

// get data
export const getDataFromAPI = (path) => {
  const datas = firebase.database().ref(`${path}/`);
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
