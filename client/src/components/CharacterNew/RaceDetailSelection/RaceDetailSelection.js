import React from "react";

import Dropdown from "../../UI/Dropdown/Dropdown";
import Button from "../../UI/Button/Button";
import classes from "./RaceDetailSelection.css";

const raceDetailSelection = props => {
  const renderButton = (label, category) => {
    if (label === "") {
      return null
    } else {
      return (
      <button 
          style={{ fontSize: "1em", marginTop: "0", width: "350px" }}
          onClick={() => props.moreRaceInfo(label, category)}
          >
        Learn More about {label}
       </button>
       )
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
          
          
          <Dropdown
            selection={"Subrace"}
            options={props.subraceOptions}
            changed={event => props.dropdownChanged(event, "Subrace")}
            />
            {renderButton(props.subraceSelection, 'Subrace')}
        </div>
        <div className={classes.SingleDropdownContainer}>
          <Dropdown
            selection={"Class"}
            options={props.classOptions}
            changed={event => props.dropdownChanged(event, "Class")}
            />
            {renderButton(props.classSelection, 'Class')}
        </div>
        <div className={classes.SingleDropdownContainer}>
          <Dropdown
            selection={"Background"}
            options={props.backgroundOptions}
            changed={event => props.dropdownChanged(event, "Background")}
            />
            {renderButton(props.backgroundSelection, 'Background')}
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
