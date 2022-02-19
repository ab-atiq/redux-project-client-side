import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebaseconfig"

const firebaseAuthentication = () => {
  initializeApp(firebaseConfig);
}
export default firebaseAuthentication;
