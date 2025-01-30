import '../css/signup.css';

const Signup = ()=>{
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
                    <input type="text" className="signup_input" required />
                </div>
                <div className="signup_inputs" >
                    <label htmlFor="email" className='signup_label'>Email</label>
                    <input type="email" className="signup_input" required />
                </div>
                <div className="signup_inputs" >
                    <label htmlFor="password" className='signup_label'>Password</label>
                    <input type="password" className="signup_input" required />
                </div>
                <button className="signup_btn">SignUp</button>
                <h4 className="signup_nevigate_login">Already have an Account <span>Login</span></h4>

            </div>
          </div>
     )
}
export default Signup 