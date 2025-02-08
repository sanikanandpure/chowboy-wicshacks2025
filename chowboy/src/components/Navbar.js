import React from "react";
import { Link } from "react-router-dom"; // Needed for navigation

function Navbar() {
  return (
    <nav class="navbar">
    <Link to='/'>
        <img class="navbar-icon" src="/images/navbar-icon.png" alt="star icon"/>
    </Link>
      <ul>
        <li>About Us</li>
        <li>FAQ</li>
      </ul>
    </nav>
  );
}

export default Navbar;
