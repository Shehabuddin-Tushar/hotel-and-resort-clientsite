import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initialauthantication=()=>{

    initializeApp(firebaseConfig);
}

export default initialauthantication;