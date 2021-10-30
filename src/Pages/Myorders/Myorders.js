import axios from 'axios';
import React,{useState,useEffect} from 'react'
import useAuth from '../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Myorders.css'

function Myorders() {
    const [mybooking,setMybooking]=useState([]);
    const {user}=useAuth();
    useEffect(()=>{
           axios.get(`https://quiet-sierra-01767.herokuapp.com/myorders?search=${user.email}`).then(res=>setMybooking(res.data)).catch(err=>console.log(err))

    },[mybooking])

    const handlecancel=(id)=>{
        const confirmation=window.confirm("Are you sure you want to delete your booking");
        if(confirmation===false){
             return
        }else{
            axios.delete(`https://quiet-sierra-01767.herokuapp.com/deletebooking/${id}`)
            .then(res=>{
                toast("Booking deleted successfully");
                if(res.deletedCount>0){
                
                let remainingbooking=mybooking.filter(booking=>booking._id!==id);
                setMybooking(remainingbooking)

              }
            console.log(res)
            }).catch(err=>console.log(err));
        }
        

    }
    return (
        <div className="myorders-wrapper">
           
            <h1 className="text-4xl font-bold text-center">Your Booking Details</h1>
            
            <div className="services">
           
                    {
                        mybooking.length===0?<div className="empty-cart"><h2>you don't have any booking</h2></div>:mybooking.map((booking)=>{

                            return(
                                   <div className="single-service text-center" >
                                        <img src={booking.image}/>
                                        <h2 className="text-3xl font-bold capitalize">{booking.bookingplace}</h2>
                                        <h2 className="mb-5 text-center">Date: {booking.date}</h2>
                                        <h2 className="text-xl mb-5 text-center font-bold">{booking.status}</h2>
                                        <button key={booking._id}  onClick={()=>handlecancel(booking._id)}>Cancel booking</button>
                                    </div>
                                  )

                        })
                    }
                </div>
                <ToastContainer/>
       </div>
    )
}

export default Myorders
