import React from "react";
import "../styles/FeedCard.css";

function FeedCard({title, upvotes}) {
  return (
    <div className="feed-card">
        <div class="feed-title">
            <b>{title}</b>
        </div>
        <div class="upvotes-block">
            <img class="up-icon" src="/images/up.png"></img>
            {upvotes}
            <img class="down-icon" src="/images/down.png"></img>
            <img class="report-icon" src="/images/report.png"></img>
        </div>
    </div>
  );
}

export default FeedCard;
