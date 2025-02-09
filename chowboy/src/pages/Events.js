import React from "react";
import MainBar from "../components/MainBar";
import EventCard from "../components/EventCard";
import "../styles/Events.css";

function Events() {
  // Function to open the pop-up window
  const openPopUp = () => {
    const width = 400; // Set the width of the popup
    const height = 300; // Set the height of the popup
    const left = window.innerWidth / 2 - width / 2; // Center horizontally
    const top = window.innerHeight / 2 - height / 2; // Center vertically

    // Open the pop-up window (not a new tab)
    window.open(
      "/popup", // URL to open in the pop-up window (can be a page or a blank HTML page)
      "PopupWindow", // Name of the window
      `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
    );
  };

  return (
    <div id="events-main">
      <div class="main-left-events">
        <MainBar />
        <EventCard title="WEST CAMPUS COLLECTIVE" time="6-8 pm" food="Brussel sprouts/chicken + cornbread, squash soup" />
        <EventCard title="TEXAS ACM PAYCOM NIGHT" time="6-7 pm" food="Freebirds burritos (chicken, vegetable)" />
        <EventCard title="E+E LUNAR NEW YEAR FESTIVAL" time="6-9 pm" food="Dumplings, eggrolls, Gong Cha boba tea" />

        {/* Plus Button that opens the Pop-up */}
        <img
          id="code-plus"
          src="/images/plus.png"
          width="40px"
          height="40px"
          alt="Add Event"
          onClick={openPopUp} // Trigger function to open the pop-up
          class="plus-button"
        />
      </div>

      <div class="main-right-event">
        <img class="map-img" src="/images/map.png" width="650" height="650" alt="Map" />
      </div>
    </div>
  );
}

export default Events;
