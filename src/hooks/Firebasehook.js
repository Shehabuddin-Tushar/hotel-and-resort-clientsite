import {useState,useEffect} from 'react'
import initauthantication from '../Firebase/firebase.init'
import { GoogleAuthProvider,getAuth,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";



initauthantication();
const googleprovider = new GoogleAuthProvider();
const auth = getAuth();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isloading,setIsloading]=useState(true);
/* google log in start */
 
  const signupWithgoogleLogin=()=>{

    return signInWithPopup(auth, googleprovider)
 }




/* google log in end */


useEffect(()=>{
    const unsubscribed=onAuthStateChanged(auth, (user) => {
      if (user) {
         setUser(user) 
      }else{
         setUser({})
      }
      setIsloading(false)
   });
    return unsubscribed;
   }
  ,[]);

  /*log out start */
  const Logout=()=>{
    setIsloading(true)
    signOut(auth).then(() => {
       setUser({});
       console.log(user)
     }).catch((error) => {
       console.log(error.message)
     }).finally(()=>setIsloading(false));

    
}

  /*logout end */
return{signupWithgoogleLogin,user,setUser,isloading,setIsloading,Logout}
}

export default useFirebase;