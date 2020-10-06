import React from "react";

export default function Title() {
  const hours = new Date().getHours();
  let timeOfDay;
  let style = {
    fontSize: "18pt",
  };

  if (hours < 12) {
    timeOfDay = "morning :D";
    style.color = "green";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon :)";
    style.color = "orange";
  } else {
    timeOfDay = "night zZz";
    style.color = "darkblue";
  }

  return <h1 style={style}>Good {timeOfDay}</h1>;
}
