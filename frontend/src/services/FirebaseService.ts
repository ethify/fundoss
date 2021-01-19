import * as firebase from "firebase/app";
import "firebase/auth";

// const FIREBASE_KEY = process.env.FIREBASE_KEY;
// const FIREBASE_AUTH_DOMAIN = process.env.FIREBASE_AUTH_DOMAIN;
// const FIREBASE_DATABASE_URL = process.env.FIREBASE_DATABASE_URL;
// const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
// const FIREBASE_STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET;
// const FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_MESSAGING_SENDER_ID;
// const FIREBASE_APP_ID = process.env.FIREBASE_APP_ID;
// const FIREBASE_MEASUREMENT_ID = process.env.FIREBASE_MEASUREMENT_ID;

const FIREBASE_KEY = "AIzaSyD1FpF0xap2SEgvjXOFg7diTKVcmIkTZQA";
const FIREBASE_AUTH_DOMAIN = "fundoss.firebaseapp.com";
const FIREBASE_DATABASE_URL = "https://fundoss.firebaseio.com";
const FIREBASE_PROJECT_ID = "fundoss";
const FIREBASE_STORAGE_BUCKET = "fundoss.appspot.com";
const FIREBASE_MESSAGING_SENDER_ID = "470130762920";
const FIREBASE_APP_ID = "1:470130762920:web:f804fa85bcb0e6f6cece9d";
const FIREBASE_MEASUREMENT_ID = "G-FS5FVF488L";

const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const signInGithub = async () => {
  // [START auth_github_provider_create]
  var provider = new firebase.auth.GithubAuthProvider();
  // [END auth_github_provider_create]

  // [START auth_github_provider_scopes]
  provider.addScope("repo");
  // [END auth_github_provider_scopes]

  // [START auth_github_provider_params]
  provider.setCustomParameters({
    allow_signup: "false",
  });
  // [END auth_github_provider_params]

  firebase.auth().useDeviceLanguage();
  try {
    const result = await firebase.auth().signInWithPopup(provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = (result.credential.toJSON() as any).oauthAccessToken;
    // The signed-in user info.
    var user = result.user;
    return { user, token };
  } catch (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // eslint-disable-next-line
    console.log(errorCode, errorMessage, email, credential);
  }
};

export const getAuthToken = async () => {
  const result = await firebase.auth().currentUser.getIdToken();
  return result;
};

export const logoutUser = async () => {
  await firebase.auth().signOut();
};
