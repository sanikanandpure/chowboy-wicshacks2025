import React from "react";
import Typewriter from 'typewriter-effect'
import '../styles/About.css'

function About() {
  return (
    <div id="about-body">
        <img id="about-header" src="/images/about-header.png"></img>
        <div id="about-top-content">
            <div id="about-para">
                <p>Fighting food insecurity at UT—one chow at a time.</p>
                <p>Say goodbye to disorganized and spam-filled GroupMe’s and Discord servers...</p>
                <p>... and howdy to Chowboy: a comprehensive and centralized hub for free food for UT students. </p>
                <p>Find chow through our three pages: </p>
                <ul>
                    <li><b>Events: </b>Free chow via events hosted by UT clubs, organizations, and other programs.</li> 
                    <li><b>Feed: </b>Chat with other cowboys about real-time deals and opportunities around campus.</li> 
                    <li><b>Codes: </b>Share and use promotional codes for common food delivery apps.</li> 

                </ul>

            </div>
            <img id="about-bear" src="/images/bear.png"></img>
        </div>

    </div>
    
  ); 
}

export default About;