
import '../css/Login.css'
import { Link } from 'react-router-dom';

const Login=()=>{
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
                    <input type="text" className="login_input" required />
                </div>
                <div className="login_inputs" >
                    <label htmlFor="password" className='login_label'>Password</label>
                    <input type="password" className="login_input" required />
                </div>
                <button className="login_btn"><Link to={'/main'} className='link'>Login</Link></button>
                <p className="login_forget">Forget the password</p>
                <h4 className="login_nevigate_signup">Create an new Account <span><Link to={'/signup'} className='link2'>Sign up</Link></span></h4>

            </div>
          </div>
    )
}
export default Login;