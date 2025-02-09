import React from "react";
import "../styles/EventCard.css";

function EventCard({title, time, food}) {
  return (
    <div className="event-card">
        <div class="event-title">
            <b>{title}</b>
            <div class="title-icons">
                <img class="vegan-icon" src="/images/leaf.png"></img>
                <img class="ut-icon" src="/images/bevo.png"></img>
            </div>
        </div>
        <div class="event-time">
            <img class="time-icon" src="/images/clock.png"></img>
            {time}
        </div>
        <div class="event-food">
            <img class="time-icon" src="/images/food.png"></img>
            {food}
        </div>
        <div class="rsvp">
            <img class="time-icon" src="/images/link.png"></img>
            <a>RSVP Link</a>
        </div>
    </div>
  );
}

export default EventCard;
