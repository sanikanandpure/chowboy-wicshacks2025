import React from "react";
import '../styles/Login.css'
import { Link } from "react-router-dom"; // Needed for navigation


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
      <div id="login">
            <div id="login-body">
                <div id="login-header">Log In</div>
                <input class="input-text" type="text" placeholder="Username"/>
                <input class="input-text" type="text" placeholder="Password"/>

                <button id="login-button">
                    <Link to="/events">Let's get chowing!</Link>
                </button>
            </div>
        </div>
  );
  
}

export default Login;