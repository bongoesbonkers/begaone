var firebaseConfig = {
  apiKey: "AIzaSyD5j4vYSiynETvvFdbghLrJfhkOCOgvv3s",
  authDomain: "begaone-project.firebaseapp.com",
  databaseURL: "https://begaone-project.firebaseio.com",
  projectId: "begaone-project",
  storageBucket: "begaone-project.appspot.com",
  messagingSenderId: "990109978925",
  appId: "1:990109978925:web:c20831938f18af18e943a4"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

