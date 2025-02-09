import React from "react";
import Typewriter from 'typewriter-effect';
import '../styles/Home.css';
import { Link } from "react-router-dom"; 

function Home() {
  return (
    <div id="homepage-body">
      <img id="homepage-logo" src="/images/homepage-logo.png" alt="chowboy text with bear icon" />
      
      <div className="slogan-content">
        <div>fighting food insecurity At UT Austin:</div>
        <div>
          <Typewriter options={{
            autoStart: true,
            loop: true,
            delay: 50,
            strings: ["one chow At A time!"]
          }}/> 
        </div>
      </div>

      <div id="homepage-buttons">    
        <Link to='/signup'>
          <button className="homepage-button">Sign Up</button>
        </Link>
        <Link to='/login'>
          <button className="homepage-button">Log In</button>
        </Link>
      </div>
      
    </div>
  );
}

export default Home;
