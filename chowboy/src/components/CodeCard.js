import React from "react";
import "../styles/Codes.css";

function CodeCard({iconLink, code, expirationDate}) {
  return (
    <div className="code-card">
        <img class="code-icon" src={iconLink} alt="Delivery app icon"></img>
        <p class="code-code">{code}</p>
        <img class="code-exp-icon" src="/images/time.png" alt="Time icon"></img>
        <p class="code-exp">{expirationDate}</p>
    </div>
  );
}

export default CodeCard;