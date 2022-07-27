import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyAd_fVH90WIZ9vVUdewWISyK5I2MBSn5DU",
  authDomain: "chat-d5bb6.firebaseapp.com",
  databaseURL:
    "https://chat-d5bb6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-d5bb6",
  storageBucket: "chat-d5bb6.appspot.com",
  messagingSenderId: "766882374089",
  appId: "1:766882374089:web:f0c90cdc0aaf067473c818",
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
