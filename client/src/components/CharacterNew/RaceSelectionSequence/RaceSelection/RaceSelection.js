import React from "react";

import classes from "./RaceSelection.css";
import Button from '../../../UI/Button/Button'

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
        <div className={classes.RaceList}>
          {props.races.map(race => (
              <Button
                key={race}
                className={classes.RaceListItem}
                clicked={() => props.onSelect(race)}
              >
                {race}
              </Button>
          ))}
        </div>
      </div>
    
  
);

export default raceSelection;
