import React, { useState } from "react";
import "../styles/Popup.css";

function Popup({ closePopup }) {
  const [selectedButtons, setSelectedButtons] = useState({
    vegan: false,
    ut: false,
    gf: false,
  });

  const toggleButton = (button) => {
    setSelectedButtons((prev) => ({
      ...prev,
      [button]: !prev[button],
    }));
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <form className="popup-form">
          <h2 className="popup-title">Event Form</h2>

          <div className="top-part">
            <input type="text" id="name" placeholder="Event Name" />
          </div>

          <div className="middle-part">
            <input type="date" id="date" placeholder="Event Date" />
            <input type="time" id="start-time" />
            <p>to</p>
            <input type="time" id="end-time" />
          </div>

          <div className="bottom-part">
            <input type="text" id="address" placeholder="Address" />
            <input type="text" id="food-type" placeholder="Food Type" />
            <input type="url" id="rsvp-link" placeholder="RSVP Link" />
          </div>

          <div className="button-row">
            <button
              className={`popup-button ${selectedButtons.vegan ? "selected" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                toggleButton("vegan");
              }}
            >
              <img id="popup-vegan" src="/images/leaf.png" alt="Vegan" />
              Vegetarian
            </button>

            <button
              className={`popup-button ${selectedButtons.ut ? "selected" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                toggleButton("ut");
              }}
            >
              <img id="popup-bevo" src="/images/bevo.png" alt="UT" />
              UT Students Only
            </button>

            <button
              className={`popup-button ${selectedButtons.gf ? "selected" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                toggleButton("gf");
              }}
            >
              <img id="popup-gf" src="/images/gf.png" alt="Gluten Free" />
              Gluten Free
            </button>
          </div>

          <button type="submit" id="popup-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
