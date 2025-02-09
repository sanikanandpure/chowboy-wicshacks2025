import React from "react";
import '../styles/Login.css'


function Login() {
  return (
    // <div id="homepage-body">
    //   <img id="homepage-logo" src="/images/homepage-logo.png" alt="chowboy text with bear icon"></img>
      
    //   <div class="slogan">
    //     <div>Log In</div>

    //   </div>

    //   <div id="homepage-buttons">
    //     <button class="homepage-button">Sign Up</button>
    //     <button class="homepage-button">Log In</button>
    //   </div>
      
    // </div>
    <div>
    <div id="login-title">
        <div>Log In</div>
    </div>

    
    <div id="login-body">
      <div>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </div>
    </div>
  </div>
  );
  
}

export default Login;