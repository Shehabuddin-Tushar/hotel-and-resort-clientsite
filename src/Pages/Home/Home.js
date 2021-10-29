import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
    
    const [services,setServices]=useState([]);

    useEffect(()=>{

         fetch("http://localhost:5000/services").then(res=>res.json()).then(data=>setServices(data))

    },[])
    return (
        <div className="home-wrapper" style={{paddingTop:"70px"}}>
            <div className="home-banner">
                <div className="transbox  flex flex-col justify-center items-center">
                  <h2 className="text-4xl  font-bold text-green-500 mb-2">Welcome To</h2>
                  <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-3xl  font-bold text-green-500 mb-2">I-land Hotel & Resort</h1>
                  <p className="text-xl text-white font-bold">Universal's Loews Sapphire Falls Resort offers Early Park AdmissionƗ to The Wizarding World of Harry Potter™ and Universal's Volcano Bay water theme park 1 hour before park opening.</p>
                </div>
            </div>

            <div className="our-zone">
                 <div className="single-zone">
                      <img src="https://i.postimg.cc/9FfQYBy8/adventure.jpg"/>
                      <h2 className="text-3xl font-bold mb-3 text-red-500">ADVENTURE</h2>
                      <p>This hotel is an all-suite property 3 minutes' drive from the Walt Disney World Resort. Guests can enjoy the heated outdoor pool  The hotel offers several on-site dining options. </p>
                 </div>

                 <div className="single-zone">
                      <img src="https://i.postimg.cc/VNXfkZc6/relax.jpg"/>
                      <h2 className="text-3xl font-bold mb-3 text-red-500">RELAX</h2>
                      <p>This family-friendly hotel offers spacious suite-style accommodations adjacent to the Old Town Entertainment Complex and 3.4 km The hotel offers several on-site dining options. </p>
                 </div>

                 <div className="single-zone">
                      <img src="https://i.postimg.cc/RFz015TK/honeymoon.jpg"/>
                      <h2 className="text-3xl font-bold mb-3 text-red-500">HONEYMOON</h2>
                      <p>This Orlando hotel is situated on 28 tropical acres, next to SeaWorld. The hotel offers several on-site dining options. The Orange County Convention Center is a 6 minutes' drive away.</p>
                 </div>
            </div>

            <div className="services-wrapper">
                <div className="service-headding flex flex-col justify-center items-center text-center" style={{padding:"2% 20%"}}>
                      <h2 className="text-4xl font-bold mb-3">i-Land services</h2>
                      <p>i-Land in collaboration with various hotels have introduced goSafe Hotels,
                         a collection of well sanitized hotels with trained staff who follow safe
                         Practices at all times. These hotels have a Safe and Hygienic environment 
                         with daily disinfection of rooms, fresh room.</p>
                </div>
                <div className="services">
                    {
                        services.map((service)=>{

                            return(
                                   <div className="single-service text-center" key={service._id}>
                                        <img src={service.img}/>
                                        <h2 className="text-3xl font-bold capitalize">{service.name}</h2>
                                        <p className="text-justify mb-5">{service.description}</p>
                                        <Link className="" to={`/bookingdetails/${service._id}`}>Booking</Link>
                                    </div>
                                  )

                        })
                    }
                    

                    
                </div>
            </div>
             
        </div>
    )
}

export default Home
