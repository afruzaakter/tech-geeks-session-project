// import React, { useState } from "react";
import './Login.css';
import GoogleLogo  from '../../Assets/Image/google.svg';
const Login = () => {





  return (
    <div className="auth-form-container d-flex justify-content-center align-items-center ">
     <div className="auth-form ">
       <h1>Login</h1>
       <form>
           <div className="input-field">
             <label htmlFor="email">Email</label>
               <div className="input-wrapper">
               <input type="text" name="email" id="email" placeholder="Email" required/>
             </div>
           </div>
           <div className="input-field">
             <label htmlFor="password">Password</label>
               <div className="input-wrapper">
               <input type="password" name="password" id="password" placeholder="Password" required/>
             </div>
           </div>
           <button type="submit" className="auth-form-submit">Login</button>
       </form>
      {/* ///////////////////////// */}

      <p className="redirect">
        New to Tech Geeks?{" "}
        <span>Create New Account</span>
      </p>
    <div className="horizontal-divider">
      <div className="line-left"></div>
        <p>or</p>
        <div className="line-right" >
      </div>
    </div>
   <div className="input-wrapper">
     <button className="google-auth">
       <img src={GoogleLogo} alt="" />
       <p>Continue with Google</p>
     </button>
   </div>


     </div>
    </div>
  );
};

export default Login;