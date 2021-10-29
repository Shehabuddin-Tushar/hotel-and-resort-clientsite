import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import useAuth from '../../hooks/useAuth'
import {useHistory,useLocation} from 'react-router-dom'

function Login() {
    const location=useLocation();
    const redirect_url=location.state?.from || "/home"
    const history=useHistory();
    const {signupWithgoogleLogin,isloading,setIsloading}=useAuth()
 
     const handlegooglelogin=()=>{
         signupWithgoogleLogin().then((result)=>{
         
             history.push(redirect_url);
             console.log(result.user)
             
           }).finally(()=>{setIsloading(false)})
     }
    return (
        <div className="login-wrapper">
           <div className="login-content">
              <h1 className="text-4xl font-bold mb-5">Login with</h1>
                <div className="login" onClick={handlegooglelogin}>
                    <img src="https://i.postimg.cc/nr7rq3Th/google-removebg-preview-1.png" height="50px" width="50px"/>
                    <h3>Continue with Google</h3>
                </div>
                <h2 style={{fontSize:"14px",marginTop:"20px",fontWeight:"400"}}>Don't have an account <Link to="/login" style={{color:"blue",textDecoration:"underline"}}>create an account</Link></h2>
           </div>
            
        </div>
    )
}

export default Login
