import React from "react";
import Typewriter from 'typewriter-effect'
import '../styles/Faq.css'

function Faq() {
  return (
    <div id="faq-body">
        <div id="faq-header">Faq</div>
        <div id="faq-para">
            
            <p><b>Q: Are there options for vegan/vegetarians?</b></p>
            <p>A: Yes. Events with vegan/vegetarian options have a leaf icon in the top right corner.</p>

            <br></br>

            <p><b>Q: Are all the events really free?</b></p>
            <p>A: All events under the “Events” tab on your Chowboy dashboard are free. Events discovered through the “Feed” tab may be free or at a discounted price.</p>

            <br></br>

            <p><b>Q: Are these events only open to UT students?</b></p>
            <p>A: Some events have restrictions on whether participants have to be enrolled at UT. </p>

            <br></br>

            <p><b>Q: Is there a code of conduct for the feed page? </b></p>
            <p>A: Yes. Chowboy does not tolerate any forms of harassment, bullying, threats of violence, predatory or inappropriate behavior, spam, or graphic content. Users can report any inappropriate feed messages, and Chowboy will remove all violations within a timely manner. You may be removed from the site if repeated offenses are observed. </p>

        </div>
    </div>
    
  ); 
}

export default Faq;