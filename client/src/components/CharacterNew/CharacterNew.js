import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import RaceSelectionSequence from "./RaceSelectionSequence/RaceSelectionSequence";
import CharacterDetailSequence from "./CharacterDetailSequence/CharacterDetailSequence";
import Aux from "../../hoc/Aux/Aux";
import * as actions from "../../store/actions";

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

  renderCharacterSheet = () => {
    this.props.history.push('/character/list')
  };

  checkRaceDetailValidity(selectionType) {
    let isValid = true;

    if (this.props.subraces > 0) {
      this.state.subraceSelection.length > 0 || selectionType === "Subrace"
        ? (isValid = true && isValid)
        : (isValid = false);
    }

    if (this.props.classes.length > 0) {
      this.state.classSelection.length > 0 || selectionType === "Class"
        ? (isValid = true && isValid)
        : (isValid = false);
    }

    if (this.props.backgrounds.length > 0) {
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
    this.props.postCharacter(
      this.state.selectedRace,
      this.state.subraceSelection,
      this.state.classSelection,
      this.state.backgroundSelection,
      this.props.userId
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
        <RaceSelectionSequence
          showModal={this.state.showModal}
          removeModal={this.removeModal}
          race={this.state.selectedRace}
          selectRace={this.selectRace}
          showRaceSelections={this.state.showRaceSelections}
          onExit={this.renderRaceDetails}
          races={this.state.races}
          onSelectRace={race => this.selectRaceInfo(race)}
        />
        <CharacterDetailSequence
          showRaceDetails={this.state.showRaceDetails}
          onExit={() => this.renderCharacterSheet()}
          subraces={this.props.subraces}
          backgrounds={this.props.backgrounds}
          classes={this.props.classes}
          showRaceDetailModal={this.state.showRaceDetailModal}
          removeRaceDetailModal={this.removeRaceDetailModal}
          dropdownChanged={(event, detailType) =>
            this.onDetailSelect(event, detailType)
          }
          character={this.props.charas.character}
          raceDetailShown={this.state.raceDetailShown}
          buttonClicked={() => this.raceDetailFinished()}
          raceDetailFormIsValid={this.state.raceDetailFormIsValid}
          subraceSelection={this.state.subraceSelection}
          classSelection={this.state.classSelection}
          backgroundSelection={this.state.backgroundSelection}
          moreRaceInfo={this.showRaceDetailModal}
        />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    charas: state.charas,
    subraces: state.charas.subraces,
    backgrounds: state.charas.backgrounds,
    classes: state.charas.classes,
    userId: state.auth.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRace: name => dispatch(actions.fetchRace(name)),
    postCharacter: (race, subrace, klass, background, userId) =>
      dispatch(actions.postCharacter(race, subrace, klass, background, userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterNew));
