import React from 'react'
import './Addnewservice.css'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
function Addnewservice() {
    const { register, handleSubmit, watch, formState: { errors } ,reset} = useForm();
    const onSubmit = data =>{

        if(data.name==="" || data.img==="" || data.description===""){
            alert("please field the data")
        }else{

        
         axios.post("https://quiet-sierra-01767.herokuapp.com/addnewservice",data)
         .then(res=>{
            toast(res.data);
            reset();
           }).catch(err=>console.log(err))
          
          }
       }
    return (
        <div className="addservice-wrapper">
            <title>Add new service</title>
            <ToastContainer />
            <h1 className="text-center text-4xl font-bold">Add new service</h1>
            <div className="addservice">
                 <form onSubmit={handleSubmit(onSubmit)}>
                      <input type="text" placeholder="Enter service name" {...register("name", { required: true })}/>
                      <p style={{color:"red",textShadow:"none",marginBottom:"5px"}}>{errors.name && <span>name is required</span>}</p>

                      <input type="text" placeholder="Enter image url" {...register("img", { required: true })}/>
                      <p style={{color:"red",textShadow:"none",marginBottom:"5px"}}>{errors.img && <span>image url is required</span>}</p>

                      <textarea placeholder="enter description" {...register("description", { required: true })}/><br/>
                      <p style={{color:"red",textShadow:"none",marginBottom:"5px"}}>{errors.description && <span>description is required</span>}</p>
                      <button>Add service</button>
                 </form>
            </div>
        </div>
    )
}

export default Addnewservice
