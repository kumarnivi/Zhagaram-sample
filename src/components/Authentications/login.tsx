import { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
  
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };
  
    const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRememberMe(event.target.checked);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Perform login logic here
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Remember Me:', rememberMe);
      // Example: You can call a login API or perform client-side validation
    };
  
    const handleForgotPassword = () => {
      // Handle forgot password action
      console.log('Forgot Password clicked');
    };
  
    // const handleApplyMembership = () => {
    //   // Handle apply for membership action
    //   console.log('Apply for Membership clicked');
    // };

    return(
        <>
        <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center text-dark mt-5">Login Form</h2>
            <div className="card my-5">
              <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="Username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Username"
                    placeholder="User Name"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="checkbox"
                    className="checked"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <div className="text-center btn-contain">
                  <p onClick={handleForgotPassword} style={{ cursor: 'pointer' }}>
                    Forgot Password
                  </p>
                  <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                    Login
                  </button>
                </div>
              </form>
              <div className="colordiv">
                <div className="form-text text-center text-dark">
                  Do not have an account?{' '}
                  <a
                //    onClick={handleApplyMembership} 
               
                   className="text-dark fw-bold" style={{ cursor: 'pointer' }}>
                    <Link  to='register' >Apply for the Membership?</Link>
                    
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
        </>
    )
}

export default Login;