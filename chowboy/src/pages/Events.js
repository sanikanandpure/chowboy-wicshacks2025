import React from "react";
import Typewriter from 'typewriter-effect'
import MainBar from "../components/MainBar";
import EventCard from "../components/EventCard";
import '../styles/Home.css'


function Events() {
  return (
    <div id="events">
    <div class="main-left">
        <MainBar/>
        <EventCard title="West Campus Collective" time="6-8pm" food="Brussel sprouts/chicken + cornbread, squash soup"></EventCard>
        <EventCard title="West Campus Collective" time="6-8pm" food="Brussel sprouts/chicken + cornbread, squash soup"></EventCard>
        <EventCard title="West Campus Collective" time="6-8pm" food="Brussel sprouts/chicken + cornbread, squash soup"></EventCard>

    </div>
    <div class="main-right">
    </div>
    </div>
  );
  
}

export default Events;