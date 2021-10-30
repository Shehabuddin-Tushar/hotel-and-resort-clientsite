import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { SRLWrapper } from "simple-react-lightbox";
function Footer() {
    return (
        <div className="footer">
            <div className="quicklinks-wrapper">
                <h1 className="text-4xl font-bold text-center">Quick links</h1>
                <div className="quicklinks flex">
                <div className="first-links">
                   <ul>
                       <li><Link to="/home"><i class="fas fa-angle-double-right"></i> Home</Link></li>
                       <li><Link to="/myorders"><i class="fas fa-angle-double-right"></i> Your booking</Link></li>
                       <li><Link to="/"><i class="fas fa-angle-double-right"></i> Services</Link></li>
                       <li><Link to="/myorders"><i class="fas fa-angle-double-right"></i>Myorders</Link></li>
                   </ul>
               </div>
               <div className="second-links">
                    <ul>
                       <li><Link to="/login"><i class="fas fa-angle-double-right"></i> Login</Link></li>
                       <li><Link to="/"><i class="fas fa-angle-double-right"></i> Booking registered</Link></li>
                       <li><Link to="/"><i class="fas fa-angle-double-right"></i> Dashboard</Link></li>
                    </ul> 
               </div>
                </div>
               
            </div>
            <SRLWrapper>
            <div className="recognition">
               <h1 className="text-4xl mb-3 font-bold text-center">Gallery</h1>
               <div className="recognitoin-image flex">
                    <img src="https://i.postimg.cc/hjrK9JvR/imgsix.jpg"></img>
                    <img src="https://i.postimg.cc/9MVWRPWB/imgtwo.jpg"></img>
                    <img src="https://i.postimg.cc/VNXfkZc6/relax.jpg"></img>
               </div>

               <div className="recognitoin-image flex">
                    <img src="https://i.postimg.cc/RFz015TK/honeymoon.jpg"></img>
                    <img src="https://i.postimg.cc/SRfj2GW9/resortimage.jpg"></img>
                    <img src="https://i.postimg.cc/ZYHqNQvv/blogimagetwo.jpg"></img>
                   
               </div>
            </div>
            </SRLWrapper>
            <div className="contactus">
                <h1 className="text-4xl text-center font-cold mb-3 font-bold">Call us today</h1>
                 <h3 className="text-3xl mb-3"><Link to="/home"><i class="fas fa-phone-alt"></i> 01857195638</Link></h3>
                 <p className="text-3xl mb-3">Matuail-jatrabari-1362</p>
                 <p className="text-3xl mb-3">I-land@gmail.com</p>
                 <div className="social-link">
                     <a href="//twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                     <a href="//www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
                     <a href="//www.youtube.com/" target="_blank"><i class="fab fa-youtube"></i></a>

                 </div>
            </div>
        </div>
    )
}

export default Footer
