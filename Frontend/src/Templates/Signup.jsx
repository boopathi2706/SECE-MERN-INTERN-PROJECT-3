import { useState } from 'react';
import './css/Signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Signup = ()=>{
    var [username,setUsername]=useState("");
    var [email,setEmail]=useState("");
    var [password,setPassword]=useState("");
    const handleSubmit=async (event) => {
        event.preventDefault();
        try {
          const req = await axios.post("https://sece-mern-intern-project-3.onrender.com/signup", {
            username: username,
            email: email,
            password: password,
          });
          alert(req.data.message);
          if (req.data.signupStatus) {
            navigate("/");
          }
        } catch (e) {
          alert("Signup Unsuccessful");
        }
      };

     return(
        <div className="signup_body">
            <div className="signup_front_image">
                <div className="front_image">
                    
                </div>
            </div>
            <div className="signup_container">
                <h3 className="signup_title">SignUp</h3>
                <div className="signup_inputs">
                    <label htmlFor="username" className='signup_label'>Username</label>
                    <input type="text" className="signup_input" onChange={(e)=>{setUsername(e.target.value)}} required />
                </div>
                <div className="signup_inputs" >
                    <label htmlFor="email" className='signup_label'>Email</label>
                    <input type="email" className="signup_input" onChange={(e)=>{setEmail(e.target.value)}} required />
                </div>
                <div className="signup_inputs" >
                    <label htmlFor="password" className='signup_label'>Password</label>
                    <input type="password" className="signup_input" onChange={(e)=>{setPassword(e.target.value)}} required />
                </div>
                <button className="signup_btn" type='submit' onClick={handleSubmit}>SignUp</button>
                <h4 className="signup_nevigate_login">Already have an Account <span><Link className='link2' to={'/'}>Login</Link></span></h4>

            </div>
          </div>
     )
}
export default Signup 