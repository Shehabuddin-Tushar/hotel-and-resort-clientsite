import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import useAuth from '../hooks/useAuth';
function Navbar() {
    const [mobilebtn,setMobilebtn]=useState("hidden");
    const {user,Logout}=useAuth()
    const handlemobilebtn=()=>{
        if(mobilebtn==="hidden"){
            setMobilebtn("block")

        }else{
            setMobilebtn("hidden")
        }
        
    }
    return (
        <div className="header-wrapper fixed" style={{width:"100%"}}>
            {/* navbar goes here */}
            <nav className="bg-green-400">
            <div className="max-w-8xl mx-auto px-4 border-red border-b-2">
                <div className="flex justify-between">

                <div className="flex space-x-6">
                {/* logo  */}
                 <div>
                    <NavLink to="/home" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                       <i class="fas fa-hotel text-xl"></i>&nbsp;&nbsp;
                       <span className="font-bold lg:text-2xl text-xl">i-land Hotel</span>
                    </NavLink>
                    
                    </div>

                    {/* primary nav  */}
                    <div className="hidden md:flex items-center space-x-1">
                        <NavLink exact to="/"  className="py-5 px-3 text-white hover:text-gray-900">Home</NavLink>
                        <NavLink to="/myorders" className="py-5 px-3 text-white hover:text-gray-900">Myorders</NavLink>
                        <NavLink to="/dashboard" className="py-5 px-3 text-white hover:text-gray-900">Dashboard</NavLink>
                        
                    </div>
                </div>

                {/* secondary nav  */}
                <div className="flex items-center space-x-1">
                {user.emailVerified?<h2 className="py-5 px-3 font-bold">{user.displayName}</h2>:""}
                    {
                     user.emailVerified?<button onClick={Logout}  className="logoutbtn">logout</button>:
                    <NavLink to="/login" className="font-bold py-2 px-3 bg-red-400 hover:bg-red-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Login</NavLink>
                     }
                </div>

                {/* mobile button goes here */}
                <div className="md:hidden flex items-center">
                    <button className="mobile-menu-button" onClick={handlemobilebtn}>
                      <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                     </svg>
                    </button>
                </div>

                </div>
            </div>

            {/* mobile menu  */}
            <div className={`mobile-menu ${mobilebtn}  md:hidden`}>
                <NavLink exact to="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</NavLink>
                <NavLink to="/myorders" className="block py-2 px-4 text-sm hover:bg-gray-200">Myorders</NavLink>
                <NavLink to="/dashboard" className="block py-2 px-4 text-sm hover:bg-gray-200">Dashboard</NavLink>
                
                
            </div>
            </nav>              
        </div>
    )
}

export default Navbar
