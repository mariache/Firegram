import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDjQ_JZpbBPxOHrF__jwduUTCz9btNBC6Q",
  authDomain: "firegram-proj.firebaseapp.com",
  databaseURL: "https://firegram-proj.firebaseio.com",
  projectId: "firegram-proj",
  storageBucket: "firegram-proj.appspot.com",
  messagingSenderId: "895525283931",
  appId: "1:895525283931:web:40e71fd59e1af0e302b77e",
  measurementId: "G-K0PSRDQK4K",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const projectStorage = firebase.storage();
const rprojectFirestore = firebase.firestore();

export { projectStorage, projectStorage };
