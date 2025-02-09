import React from "react";
import Typewriter from 'typewriter-effect'
import MainBar from "../components/MainBar";
import FeedCard from "../components/FeedCard"
import '../styles/Feed.css'


function Feed() {
  return (
    <div id="feed">
    <div class="main-left-feed">
        <MainBar/>
        <div id="cards">
        <FeedCard title="CABO BOBS IS GIVING OUT FREE BURRITOS FOR THE NEXT 10 MINUTES ONLY! HURRY! They're still giving away some and I just got mine." upvotes={100}></FeedCard>
        <FeedCard title="Some org is handing out ice cream by Littlefield Foundation!! They only have a little more left, so if you're close come quick!! They have strawberry cheesecake too." upvotes={25}></FeedCard>
        <FeedCard title="West Campus Collective starting soon! They're across the street from where they usually are. They have vegan options today! Come quick bc line is getting long :(" upvotes={3}></FeedCard>
        
        </div>
        <div class="send-msg">
          <input id="input-text" type="text"/>
          <img class="send-img" src="/images/send.png" height="40px" width="40px"></img>
        </div>
    </div> 
    <div class="main-right-feed">
      <img id="map" src="/images/map.png" width="650" height="650"></img>
    </div>
    </div>
  );
  
}

export default Feed;