import "../css/Main.css"


const Main=()=>{
    return(
       <div className="main_body">


          <div className="nav_bar">
            <h3 className="logo_name">Give<span>Together</span></h3>
            <div className="nevigate_link">
            <h3>Home</h3>
            <h3>Donate</h3>
            </div>
           
            <div className="location">
            <i class="fa-solid fa-location-dot"></i>
            <h3>SECE Coimbatore - 641202</h3>
            </div>
            <div className="profile">
                 <div className="profile_photo">

                 </div>
            </div>

          </div>

          <div className="dash_area">
                 <div className="main_content">
                     <div className="main_area_content">
                        <h2 className="logo_name">Give< span>Together</span></h2>
                        <h3>Free Crowd Funding for SECE</h3>
                        <p>Raise Funds online for Medical Emergencies and Start-Up Ideas and Social causes</p>
                        <button>Start a fund raise - it's FREE</button>
                     </div>
                 </div>
                 <div className="main_image">
                    <div className="main_image_area">

                    </div>
                    
                 </div>
          </div>
       </div>
    );
}
export default Main;