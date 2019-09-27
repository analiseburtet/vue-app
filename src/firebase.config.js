import Firebase from "firebase"
var config = {
  apiKey: "AIzaSyCOlkcpTn_d33gHfUnqMrZOJx_NYu0mGrQ",
  authDomain: "vue-app-be28a.firebaseapp.com",
  databaseURL: "https://vue-app-be28a.firebaseio.com",
  projectId: "vue-app-be28a",
  storageBucket: "",
  messagingSenderId: "694376944505",
  appId: "1:694376944505:web:16bd45f77f597a310915a8",
  measurementId: "G-SV61BD0Q4N"
};
const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();
export const dbMenuRef = db.ref("menu");
export const dbOrdersRef = db.ref("orders")
