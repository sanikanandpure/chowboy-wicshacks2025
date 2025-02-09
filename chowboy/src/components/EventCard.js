import React from "react";
import "../styles/EventCard.css";

function EventCard({title, time, food}) {
  return (
    <div className="event-card">
        <div class="event-title">
            {title}
        </div>
        <div class="event-time">{time}</div>
        <div class="event-food">{food}</div>
        <div class="rsvp">RSVP Link</div>
    </div>
  );
}

export default EventCard;
