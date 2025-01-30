
import './css/Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login=()=>{
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    var req = await axios.post("hhttps://sece-mern-intern-project-3.onrender.com/login", {
      username,
      password,
    });
    var isLoginSuccessful = req.data.isLoggedIn;
    if (isLoginSuccessful) {
        console.log("done")
      alert(req.data.message);
      navigate("/main");
    } else {
      alert(req.data.message);
    }
  };

    return(
          <div className="login_body">
            <div className="login_front_image">
                <div className="login_f_image">
                    
                </div>
            </div>
            <div className="login_container">
                <h3 className="login_title">Login</h3>
                <div className="login_inputs">
                    <label htmlFor="username" className='login_label'>Username</label>
                    <input type="text" className="login_input" required onChange={(e)=>{setUsername(e.target.value)}} />
                </div>
                <div className="login_inputs" >
                    <label htmlFor="password" className='login_label'>Password</label>
                    <input type="password" className="login_input" onChange={(e)=>{setPassword(e.target.value)}} required />
                </div>
                <button className="login_btn" type='submit' onSubmit={handleLogin}>Login</button>
                <p className="login_forget">Forget the password</p>
                <h4 className="login_nevigate_signup">Create an new Account <span><Link to={'/signup'} className='link2'>Sign up</Link></span></h4>

            </div>
          </div>
    )
}
export default Login;