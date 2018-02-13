import React, { Component } from "react";
import { connect } from "react-redux";

import Dropdown from "../../../UI/Dropdown/Dropdown";
import Button from "../../../UI/Button/Button";
import classes from "./RaceDetailSelection.css";
import * as actions from "../../../../store/actions";


class RaceDetailSelection extends Component {
  componentWillMount() {
    this.props.fetchCharacterOptions(this.props.characterName)
  }

  render() {
    const renderButton = (label, category) => {
      if (label === "") {
        return null
      } else {
        return (
          <button
            style={{ fontSize: "1em", marginTop: "0", width: "350px" }}
            onClick={() => this.props.moreRaceInfo(label, category)}
            >
            Learn More about {label}
          </button>
        )
      }
    };

    const renderDropdowns = () => {
      if (this.props.subraceOptions[0] !== "") {
        return <Dropdown
          selection={"Subrace"}
          options={this.props.subraceOptions}
          changed={event => this.props.dropdownChanged(event, "Subrace")}
          />
      } else {
        return null
      }
    }

    return (
      <div className={classes.RaceDetailSelectionContainer}>
        <div className={classes.RaceDetailHeader}>
          <h1
            style={{
              marginRight: "50px",
              alignSelf: "center"
            }}
            >
            You have selected: {this.props.characterName}
          </h1>
          <img
            className={classes.IMG}
            src={this.props.characterImage}
            alt="Character"
            />
        </div>
        <div className={classes.DropdownsContainer}>
          <div className={classes.SingleDropdownContainer}>
            {renderDropdowns()}


            {renderButton(this.props.subraceSelection, 'Subrace')}
          </div>
          <div className={classes.SingleDropdownContainer}>
            <Dropdown
              selection={"Class"}
              options={this.props.classOptions}
              changed={event => this.props.dropdownChanged(event, "Class")}
              />
            {renderButton(this.props.classSelection, 'Class')}
          </div>
          <div className={classes.SingleDropdownContainer}>
            <Dropdown
              selection={"Background"}
              options={this.props.backgroundOptions}
              changed={event => this.props.dropdownChanged(event, "Background")}
              />
            {renderButton(this.props.backgroundSelection, 'Background')}
          </div>
        </div>
        <div>
          <Button clicked={this.props.buttonClicked} disabled={this.props.disableButton}>
            Next Selection
          </Button>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacterOptions: race => dispatch(actions.fetchCharacterOptions(race))
  };
};

export default connect(null, mapDispatchToProps)(RaceDetailSelection);
