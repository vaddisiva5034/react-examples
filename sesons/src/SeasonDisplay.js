import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr it is cold!",
    iconName: "snowflake",
  },
};
function getSeason(lat, month) {
  var season = "";
  if (month > 3 && month < 9) {
    season = lat > 0 ? "summer" : "winter";
  } else {
    season = lat > 0 ? "winter" : "summer";
  }
  return season;
}
export default function SeasonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth);
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive icon ${iconName} `} />
      <h1>{text}</h1>
      <i className={`icon-right massive icon ${iconName}`} />
    </div>
  );
}
