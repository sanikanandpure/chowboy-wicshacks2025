import React from "react";
import Typewriter from 'typewriter-effect'
import '../styles/About.css'

function About() {
    const TeamMember = ({ src, alt, name }) => {
        return (
            <div class="team-member">
                <img className="team-pic" src={src} alt={alt} />
                <p>{name}</p>
            </div> 
        );
    };

  return (
    <div id="about-body">
        <img id="about-header" src="/images/about-header.png"></img>
        <div id="about-top-content">
            <div id="about-para">
                <p>Fighting food insecurity at UT—one chow at a time.</p>
                <p>Say goodbye to disorganized and spam-filled GroupMe’s and Discord servers...</p>
                <p>... and howdy to Chowboy: a comprehensive and centralized hub for free food for UT students. </p>
                <p><b>Find chow through our three pages: </b></p>
                <ul>
                    <li><b>Events: </b>Free chow via events hosted by UT clubs, organizations, and other programs.</li> 
                    <li><b>Feed: </b>Chat with other cowboys about real-time deals and opportunities around campus.</li> 
                    <li><b>Codes: </b>Share and use promotional codes for common food delivery apps.</li> 

                </ul>
                <p><b>More Resources</b></p>
                <ul>
                    <li><a class="link" href="https://deanofstudents.utexas.edu/sos/utoutpost.php">UT Outpost</a></li>
                    <li><a class="link" href="https://www.centraltexasfoodbank.org/">Central Texas Food Bank</a></li>
                </ul>

            </div>

            <img id="about-bear" src="/images/bear.png"></img>
        </div>
        <div id="about-the-team">
            <h3 id="team-heading">Meet the Team</h3>
            <div id="team-pics">
                <TeamMember src="/images/sanika.png" alt="Sanika Nandpure" name="Sanika Nandpure"/>
                <TeamMember src="/images/melissa.png" alt="Melissa Huang" name="Melissa Huang"/>
                <TeamMember src="/images/mansi.png" alt="Mansi Madhani" name="Mansi Madhani"/>
            </div>
            
        </div>

    </div>
    
  ); 
}

export default About;