import React,{useState,useEffect} from 'react'
import './Bookingdetails.css'
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import {useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
function Bookingdetails() {
    const [bookingitem,setBookingitem]=useState({});
    const { register, handleSubmit, watch, formState: { errors } ,reset} = useForm();
    const onSubmit = data =>{

        if(data.date==="" || data.description===""){
            alert("please field the data")
        }else{

        
         axios.post("https://quiet-sierra-01767.herokuapp.com/bookingadd",data)
         .then(res=>{
            toast(res.data);
            reset();
           }).catch(err=>console.log(err))
          
          }
       }
    const {user}=useAuth();
    const {id}=useParams();

    useEffect(()=>{
            
        axios.get(`https://quiet-sierra-01767.herokuapp.com/databyid/${id}`)
        .then(res=>setBookingitem(res.data)).catch(err=>console.log(err))

        
    },[]);
    return (
        <div className="bookingdetails-wrapper">
            <ToastContainer />
            <div className="booking-form">
                  <h2 className="md:text-4xl text-2xl font-bold mb-3 text-red-400" style={{textShadow:"2px 4px 3px rgba(0,0,0,0.3)"}}>Booking form</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                      <input type="text" placeholder="enter your name" {...register("name")} value={user.displayName}/>
                      <input type="email" placeholder="enter your email" {...register("email")} value={user.email}/>
                      <input type="date" {...register("date", { required: true })}/>
                      <p style={{color:"red",textShadow:"none",marginBottom:"5px"}}>{errors.date && <span>date is required</span>}</p>
                      <input type="text" placeholder="enter your description" {...register("description", { required: true })}/>
                      <p style={{color:"red",textShadow:"none",marginBottom:"5px"}}>{errors.description && <span>Description is required</span>}</p>
                      {bookingitem.img && <input type="hidden" placeholder="booking image" {...register("image")} value={bookingitem.img}/>}
                      {bookingitem.name && <input type="text" placeholder="booking place" {...register("bookingplace")} value={bookingitem.name}/>}

                      <input type="hidden" placeholder="status" {...register("status")} value="pending"/>
                      <input type="submit"/>
                  </form>
            </div>
        </div>
    )
}

export default Bookingdetails
