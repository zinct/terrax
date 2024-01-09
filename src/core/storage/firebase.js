import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAG68njIAfIh0JuwKYDLXYvYGhwwl13yY4",
  authDomain: "terrax-de163.firebaseapp.com",
  projectId: "terrax-de163",
  storageBucket: "terrax-de163.appspot.com",
  messagingSenderId: "129437157716",
  appId: "1:129437157716:web:1735c4c6a9947dcb2ae0c1",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
