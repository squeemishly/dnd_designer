import React from "react";

import Dropdown from "../../UI/Dropdown/Dropdown";
import Button from "../../UI/Button/Button";
import classes from "./RaceDetailSelection.css";

const raceDetailSelection = props => {
  const renderLabel = label => {
    if (label === "") {
      return "Please Make a Selection";
    } else {
      return `Learn More about ${label}`;
    }
  };
  
  return (
    <div className={classes.RaceDetailSelectionContainer}>
      <div className={classes.RaceDetailHeader}>
        <h1
          style={{
            marginRight: "50px",
            alignSelf: "center"
          }}
        >
          You have selected: {props.characterName}
        </h1>
        <img
          className={classes.IMG}
          src={props.characterImage}
          alt="Character"
        />
      </div>
      <div className={classes.DropdownsContainer}>
        <div className={classes.SingleDropdownContainer}>
          <button 
          style={{ fontSize: "1em", marginTop: "0", width: "350px" }}
          onClick={() => console.log("CLICKED")}
          >
            {renderLabel(props.subraceSelection)}
          </button>
          <Dropdown
            selection={"Subrace"}
            options={props.subraceOptions}
            changed={event => props.dropdownChanged(event, "Subrace")}
          />
        </div>
        <div className={classes.SingleDropdownContainer}>
          <button style={{ fontSize: "1em", marginTop: "0", width: "350px" }}>
            {renderLabel(props.classSelection)}
          </button>
          <Dropdown
            selection={"Class"}
            options={props.classOptions}
            changed={event => props.dropdownChanged(event, "Class")}
          />
        </div>
        <div className={classes.SingleDropdownContainer}>
          <button style={{ fontSize: "1em", marginTop: "0", width: "350px" }}>
            {renderLabel(props.backgroundSelection)}
          </button>
          <Dropdown
            selection={"Background"}
            options={props.backgroundOptions}
            changed={event => props.dropdownChanged(event, "Background")}
          />
        </div>
      </div>
      <div>
        <Button clicked={props.buttonClicked} disabled={props.disableButton}>
          Next Selection
        </Button>
      </div>
    </div>
  );
};

export default raceDetailSelection;
