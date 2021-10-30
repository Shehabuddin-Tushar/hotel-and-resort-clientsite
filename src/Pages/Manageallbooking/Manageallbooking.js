import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Manageallbooking.css'
function Manageallbooking() {

    const [allbooking,setAllbooking]=useState([]);
    const [status,setStatus]=useState();
    useEffect(()=>{
         axios.get("http://localhost:5000/allbookingitems").then(res=>setAllbooking(res.data)).catch(err=>console.log(err))

    },[allbooking]);

    const handlestatus=(id)=>{
        const confirmation=window.confirm("Are you sure you want to Change this booking status");
        if(confirmation===false){
             return
        }else{
             axios.get(`http://localhost:5000/mystatuschange/${id}`)
               .then(res=>res).catch(err=>console.log(err))
             }
         
     
    }
    return (
        <div className="manage-wrapper">
             <h2 className="text-4xl font-bold text-center mb-5">Manage all Booking</h2>
             <div className="all-booking">
                <table class="table-auto">
                    <thead>
                        <tr className="bg-blue-200">
                           <th>Booking item</th>
                           <th>Data</th>
                           <th>Status</th>
                           <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allbooking.map((item)=>{
                                return(

                                    <tr key={item._id}>
                                      <td>{item.bookingplace}</td>
                                      <td>{item.date}</td>
                                      <td>{item.status}</td>
                                      <td>
                                        <button type="button" className="btn-primary" onClick={()=>handlestatus(item._id)}>status change</button>&nbsp;
                                        <button  disabled  className="btn-danger">Delete</button>
                                      </td>
                                  </tr>

                                )
                            })
                        }
                       

                        
                    </tbody>
                    </table> 
              </div> 
        </div>
    )
}

export default Manageallbooking
