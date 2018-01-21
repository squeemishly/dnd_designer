import React from "react";

import Dropdown from "../../UI/Dropdown/Dropdown";
import Button from "../../UI/Button/Button";
import classes from './RaceDetailSelection.css'

const raceDetailSelection = props => (
  <div className={classes.RaceDetailSelectionContainer}>
    <div className={classes.RaceDetailHeader}>
      <h1
        style={{
          marginRight: "30px",
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
      <Dropdown
        selection={"Subrace"}
        options={props.subraceOptions}
        changed={(event) => props.dropdownChanged(event, "Subrace")}
      />
      <Dropdown
        selection={"Class"}
        options={props.classOptions}
        changed={(event) => props.dropdownChanged(event, "Class")}
      />
      <Dropdown
        selection={"Background"}
        options={props.backgroundOptions}
        changed={(event) => props.dropdownChanged(event, "Background")}
      />
    </div>
    <div>
      <Button
        clicked={props.buttonClicked}
        disabled={props.disableButton}
      >
        Next Selection
      </Button>
    </div>
  </div>
);

export default raceDetailSelection;
