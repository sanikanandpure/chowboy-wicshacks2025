import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/MainBar.css"; // Import styles

function MainBar() {
  const location = useLocation(); // Get current page path

  return (
    <div className="nav-buttons">
      <Link to="/events" className={`nav-button ${location.pathname === "/events" ? "active" : ""}`}>Events</Link>
      <Link to="/feed" className={`nav-button ${location.pathname === "/feed" ? "active" : ""}`}>Feed</Link>
      <Link to="/codes" className={`nav-button ${location.pathname === "/codes" ? "active" : ""}`}>Codes</Link>
    </div>
  );
}

export default MainBar;