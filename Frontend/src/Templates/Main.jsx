import { useState } from "react";
import "../css/Main.css"
import { Link } from "react-router-dom";


const Main=()=>{
   const [logout,setLogout]=useState(false);
    return(
       <div className="main_body">


          <div className="nav_bar">
            <h3 className="logo_name">Give<span>Together</span></h3>
            <div className="nevigate_link">
            <h3><Link  className="link1">Home</Link></h3>
            <h3><Link to={'/donate'} className="link1 ">Donate</Link></h3>
            </div>
           
            <div className="location">
            <i class="fa-solid fa-location-dot"></i>
            <h3>SECE Coimbatore - 641202</h3>
            </div>
            <div className="profile">
                 <div className="profile_photo" onClick={()=>{setLogout((pre)=>!pre)}}>

                 </div>
            </div>

          </div>

          <div className="dash_area">
                 <div className="main_content">
                     <div className="main_area_content">
                        <h2 className="logo_name">Give< span>Together</span></h2>
                        <h3>Free Crowd Funding for SECE</h3>
                        <p>Raise Funds online for Medical Emergencies and Start-Up Ideas and Social causes</p>
                        <button><Link to={'/donate'} className="link">Start a fund raise - it's FREE</Link></button>
                     </div>
                 </div>
                 <div className="main_image">
                    <div className="main_image_area">

                    </div>
                    
                 </div>
          </div>
          {logout && (<div className="logout">
              <h3><Link to={'/'} className="link1">Logout</Link></h3>
             <i class="fa-solid fa-right-from-bracket"></i>
            
          </div>)}
          
       </div>
    );
}
export default Main;