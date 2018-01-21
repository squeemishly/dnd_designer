import React, { Component } from "react";
import { connect } from "react-redux";
import Transition from "react-transition-group/Transition";

import Modal from "../UI/Modal/Modal";
import Aux from "../../hoc/Aux/Aux";
import RaceInfo from "./RaceInfo/RaceInfo";
import Dropdown from "../UI/Dropdown/Dropdown";
import Button from "../UI/Button/Button";
import * as actions from "../../store/actions";
import classes from "./CharacterNew.css";

class CharacterNew extends Component {
  state = {
    races: ["Dwarf", "Elf", "Halfling"],
    showModal: false,
    selectedRace: null,
    showRaceSelections: true,
    showRaceDetails: false,
    dwarf: {
      subrace: ["Gray Dwarf", "Hill Dwarf", "Mountain Dwarf"],
      class: [],
      background: [
        "Acolyte",
        "Barbarian",
        "Charlatan",
        "City Watch",
        "Clan Crafter",
        "Cloistered",
        "Courtier",
        "Criminal",
        "Custom",
        "Entertainer",
        "Faction Agent",
        "Far Traveler",
        "Folk Hero",
        "Guild Artisan",
        "Haunted One",
        "Hermit",
        "Inheritor",
        "Knight",
        "Mercenary",
        "Noble",
        "Outlander",
        "Port City",
        "Sage",
        "Sailor",
        "Soldier",
        "Urban",
        "Urchin"
      ]
    },
    subraceSelection: "",
    classSelection: "",
    backgroundSelection: "",
    raceDetailFormIsValid: false
  };

  removeModal = () => {
    this.setState({ showModal: false });
  };

  selectRaceInfo = race => {
    this.props.fetchRace(race);
    this.setState({
      showModal: true,
      selectedRace: race
    });
  };

  selectRace = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      showRaceSelections: !prevState.showRaceSelections
    }));
  };

  renderRaceDetails = () => {
    this.setState(prevState => ({
      showRaceDetails: !prevState.showRaceDetails
    }));
  };

  checkRaceDetailValidity(selectionType) {
    let isValid = true;

    if (this.state.dwarf.subrace.length > 0) {
      console.log(this.state.subraceSelection.length > 0);
      this.state.subraceSelection.length > 0 || selectionType === "Subrace"
        ? (isValid = true && isValid)
        : (isValid = false);
    }

    if (this.state.dwarf.class.length > 0) {
      this.state.classSelection.length > 0 || selectionType === "Class"
        ? (isValid = true && isValid)
        : (isValid = false);
    }

    if (this.state.dwarf.background.length > 0) {
      this.state.backgroundSelection.length > 0 ||
      selectionType === "Background"
        ? (isValid = true && isValid)
        : (isValid = false);
    }

    console.log("IS VALID: ", isValid);

    return isValid;
  }

  onDetailSelect = (event, selectionType) => {
    const value = event.target.value;
    switch (selectionType) {
      case "Subrace":
        this.setState({ subraceSelection: value });
        break;
      case "Class":
        this.setState({ classSelection: value });
        break;
      case "Background":
        this.setState({ backgroundSelection: value });
        break;
      default:
        return null;
    }

    const formIsValid = this.checkRaceDetailValidity(selectionType);
    this.setState({ raceDetailFormIsValid: formIsValid });
  };

  raceDetailFinished = () => {
    console.log(
      "SUBRACE: ",
      this.state.subraceSelection,
      "CLASS: ",
      this.state.classSelection,
      "BACKGROUND: ",
      this.state.backgroundSelection
    );
  };

  renderRaceDetailSelection = () => {
    return (
      <div className={classes.RaceDetailSelectionContainer}>
        <div className={classes.RaceDetailHeader}>
          <h1
            style={{
              marginRight: "30px",
              alignSelf: "center"
            }}
          >
            You have selected: {this.props.charas.character.name}
          </h1>
          <img
            className={classes.IMG}
            src={this.props.charas.character.image}
            alt="Character"
          />
        </div>
        <div className={classes.DropdownsContainer}>
          <Dropdown
            selection={"Subrace"}
            options={this.state.dwarf.subrace}
            changed={event => this.onDetailSelect(event, "Subrace")}
          />
          <Dropdown
            selection={"Class"}
            options={this.state.dwarf.class}
            changed={event => this.onDetailSelect(event, "Class")}
          />
          <Dropdown
            selection={"Background"}
            options={this.state.dwarf.background}
            changed={event => this.onDetailSelect(event, "Background")}
          />
        </div>
        <div>
          <Button
            clicked={() => this.raceDetailFinished()}
            disabled={!this.state.raceDetailFormIsValid}
          >
            Next Selection
          </Button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Aux>
        <Modal show={this.state.showModal} removeModal={this.removeModal}>
          <RaceInfo
            race={this.state.selectedRace}
            selectRace={this.selectRace}
          />
        </Modal>
        <Transition
          in={this.state.showRaceSelections}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onExited={() => this.renderRaceDetails()}
        >
          {state => (
            <div
              className={classes.RaceSelectContainer}
              style={{
                transition: "opacity 0.3s ease-out",
                opacity: state === "exiting" ? 0 : 1
              }}
            >
              <h1>CHOOSE YOUR RACE:</h1>
              <h4>Click a character race for more information</h4>
              <ul className={classes.RaceList}>
                {this.state.races.map(race => (
                  <li key={race}>
                    <div
                      className={classes.RaceListItem}
                      onClick={() => this.selectRaceInfo(race)}
                    >
                      {race}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Transition>
        <Transition
          in={this.state.showRaceDetails}
          timeout={100}
          mountOnEnter
          unmountOnExit
        >
          {state => {
            const duration = 300;

            const defaultStyle = {
              transition: `opacity ${duration}ms ease-in-out`,
              opacity: 1
            };

            const transitionStyles = {
              entering: { opacity: 0 },
              entered: { opacity: 1 }
            };
            return (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}
              >
                {this.renderRaceDetailSelection()}
              </div>
            );
          }}
        </Transition>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    charas: state.charas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRace: name => dispatch(actions.fetchRace(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterNew);
