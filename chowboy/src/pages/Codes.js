import React from "react";
import Typewriter from 'typewriter-effect'
import MainBar from "../components/MainBar";
import '../styles/Home.css';
import CodeCard from "../components/CodeCard";


function Codes() {
  return (
    <div id="events">
      <div class="main-left">
          <MainBar/>
          <CodeCard 
            iconLink="/images/icon-ubereats.png" code="eatfree15" expirationDate="2/12/25"
          ></CodeCard>
          <CodeCard 
            iconLink="/images/icon-postmates.png" code="yumyum20" expirationDate="2/16/25"
          ></CodeCard>
          <CodeCard 
            iconLink="/images/icon-doordash.png" code="yeehaw30" expirationDate="2/28/25"
          ></CodeCard>
          <CodeCard 
            iconLink="/images/icon-grubhub.png" code="chowpromo" expirationDate="3/1/25"
          ></CodeCard>
          <img id="code-plus" src="/images/plus.png" width="40px" height="40px"></img>
      </div>
      <div class="main-right">
        <img src="/images/map.png" width="650" height="650"></img>
      </div>
    </div>
  );
  
}

export default Codes;