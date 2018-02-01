import React, { Component } from "react";
import { connect } from "react-redux";
import Transition from "react-transition-group/Transition";

import RaceInfo from "./RaceInfo/RaceInfo";
import RaceSelection from "./RaceSelection/RaceSelection";
import RaceDetailSelection from "./RaceDetailSelection/RaceDetailSelection";
import RaceDetailInfo from "./RaceDetailInfo/RaceDetailInfo";
import Modal from "../UI/Modal/Modal";
import Aux from "../../hoc/Aux/Aux";
import * as actions from "../../store/actions";
import classes from "./CharacterNew.css";

class CharacterNew extends Component {
  state = {
    races: [
      "Dwarf",
      "Elf",
      "Halfling",
      "Human",
      "Dragonborn",
      "Half Elf",
      "Gnome",
      "Tiefling",
      "Half Orc"
    ],
    showModal: false,
    selectedRace: null,
    showRaceSelections: true,
    showRaceDetails: false,
    showCharacterStats: false,
    showCharacterStatsForm: false,
    showRaceDetailModal: false,
    raceDetailShown: null,
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
    this.setState({ showModal: true, selectedRace: race });
  };

  selectRace = () => {
    this.setState({ showModal: false, showRaceSelections: false });
  };

  renderRaceDetails = () => {
    this.setState({ showRaceDetails: true });
  };

  renderCharacterStats = () => {
    this.setState({ showCharacterStats: true, showCharacterStatsForm: true });
  };

  checkRaceDetailValidity(selectionType) {
    let isValid = true;

    if (this.state.dwarf.subrace.length > 0) {
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

    this.setState({ showRaceDetails: false });
  };

  showRaceDetailModal = (label, category) => {
    this.setState({ showRaceDetailModal: true, raceDetailShown: label });
  };

  removeRaceDetailModal = () => {
    this.setState({ showRaceDetailModal: false });
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
            <RaceSelection
              state={state}
              races={this.state.races}
              onSelect={race => this.selectRaceInfo(race)}
            />
          )}
        </Transition>
        <Transition
          in={this.state.showRaceDetails}
          timeout={100}
          mountOnEnter
          unmountOnExit
          onExited={() => this.renderCharacterStats()}
        >
          {state => {
            const defaultStyle = {
              transition: `opacity 300ms ease-in-out`,
              opacity: 1
            };

            const transitionStyles = {
              entering: { opacity: 0 },
              entered: { opacity: 1 },
              exiting: { opacity: 1 },
              exited: { opacity: 0 }
            };
            return (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}
              >
                <Modal
                  show={this.state.showRaceDetailModal}
                  removeModal={this.removeRaceDetailModal}
                >
                  <RaceDetailInfo detail={this.state.raceDetailShown} />
                </Modal>
                <RaceDetailSelection
                  characterName={this.props.charas.character.name}
                  characterImage={this.props.charas.character.image}
                  subraceOptions={this.state.dwarf.subrace}
                  classOptions={this.state.dwarf.class}
                  backgroundOptions={this.state.dwarf.background}
                  dropdownChanged={(event, detailType) =>
                    this.onDetailSelect(event, detailType)
                  }
                  buttonClicked={() => this.raceDetailFinished()}
                  disableButton={!this.state.raceDetailFormIsValid}
                  subraceSelection={this.state.subraceSelection}
                  classSelection={this.state.classSelection}
                  backgroundSelection={this.state.backgroundSelection}
                  moreRaceInfo={this.showRaceDetailModal}
                />
              </div>
            );
          }}
        </Transition>
        <Transition
          in={this.state.showCharacterStats}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {state => {
            const cssClasses = [
              classes.CharacterSideBar,
              state === "entering"
                ? classes.SideBarOpen
                : state === "exiting" ? classes.SideBarClosed : null
            ];
            return (
              <div>
                <div className={cssClasses.join(" ")}>
                  <div className={classes.SideBarContents}>
                    <img
                      className={classes.IMG}
                      src={this.props.charas.character.image}
                      alt="Character"
                    />
                    <h1>Race</h1>
                    <h1>{this.props.charas.character.name}</h1>
                    <h2>SubRace</h2>
                    <h2>{this.state.subraceSelection}</h2>
                    <h2>Class</h2>
                    <h2>{this.state.classSelection}</h2>
                    <h2>Background</h2>
                    <h2>{this.state.backgroundSelection}</h2>
                  </div>
                </div>
              </div>
            );
          }}
        </Transition>
        <Transition
          in={this.state.showCharacterStatsForm}
          timeout={100}
          mountOnEnter
          unmountOnExit
        >
          {state => {
            const defaultStyle = {
              transition: `opacity 400ms ease-in-out`,
              opacity: 1
            };

            const transitionStyles = {
              entering: { opacity: 0 },
              entered: { opacity: 1 }
            };
            const cssClasses = [classes.CharacterStatsForm];
            return (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}
              >
                <div className={cssClasses.join(" ")}>
                  <div>STATS FORM</div>
                </div>
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
