import React from "react";

import classes from "./RaceSelection.css";

const raceSelection = props => (
  
      <div
        className={classes.RaceSelectContainer}
        style={{
          transition: "opacity 0.3s ease-out",
          opacity: props.state === "exiting" ? 0 : 1
        }}
      >
        <h1>CHOOSE YOUR RACE:</h1>
        <h4>Click a character race for more information</h4>
        <ul className={classes.RaceList}>
          {props.races.map(race => (
            <li key={race}>
              <div
                className={classes.RaceListItem}
                onClick={() => props.onSelect(race)}
              >
                {race}
              </div>
            </li>
          ))}
        </ul>
      </div>
    
  
);

export default raceSelection;
