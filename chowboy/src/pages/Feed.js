import React from "react";
import Typewriter from 'typewriter-effect'
import MainBar from "../components/MainBar";
import FeedCard from "../components/FeedCard"
import '../styles/Feed.css'


function Feed() {
  return (
    <div id="feed">
    <div class="main-left">
        <MainBar/>
        <div id="cards">
        <FeedCard title="CABO BOBS IS GIVING OUT FREE BURRITOS FOR THE NEXT 10 MINUTES ONLY! HURRY! They're still giving away some and I just got mine." upvotes={100}></FeedCard>
        <FeedCard title="Some org is handing out ice cream by Littlefield Foundation!! They only have a little more left, so if you're close come quick!!" upvotes={25}></FeedCard>
        <FeedCard title="West Campus Collective starting soon! Line is getting long :(" upvotes={3}></FeedCard>
        </div>
        <img class="send-img" src="/images/send.png" height="auto" width="35px"></img>
    </div>
        <img id="map" src="/images/map.png" width="650" height="550" margin-left="400px"></img>
        <input id="input-text" type="text"/>
      <div class="main-right">
      </div>
    </div>
  );
  
}

export default Feed;