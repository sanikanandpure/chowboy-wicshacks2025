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
            <EventCard title="WEST CAMPUS COLLECTIVE" time="6-8 pm" food="Brussel sprouts/chicken + cornbread, squash soup"></EventCard>
            <EventCard title="TEXAS ACM PAYCOM NIGHT" time="6-7 pm" food="Freebirds burritos (chicken, vegetable)"></EventCard>
            <EventCard title="E+E LUNAR NEW YEAR FESTIVAL" time="6-9 pm" food="Dumplings, eggrolls, Gong Cha boba tea"></EventCard>
            
            <img class="plus-img" src="/images/plus-button-img.png" height="auto" width="575px"></img>
        </div>

        <div class="main-right">

        </div>

    </div>
  );
  
}

export default Events;