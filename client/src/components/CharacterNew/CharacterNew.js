import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import RaceSelectionSequence from "./RaceSelectionSequence/RaceSelectionSequence";
import CharacterDetailSequence from "./CharacterDetailSequence/CharacterDetailSequence";
import Aux from "../../hoc/Aux/Aux";
import * as actions from "../../store/actions";

class CharacterNew extends Component {
  state = {
    showModal: false,
    selectedRace: null,
    raceId: null,
    showRaceSelections: true,
    showRaceDetails: false,
    showCharacterStats: false,
    showCharacterStatsForm: false,
    showRaceDetailModal: false,
    raceDetailShown: null,
    subraceSelection: "",
    subraceId: null,
    classSelection: "",
    classId: null,
    backgroundSelection: "",
    backgroundId: null,
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
        const subraceDetails = this.props.charas.subraces.find(subrace => {
          return subrace.name === value
        })

        this.setState({ subraceSelection: value, subraceId: subraceDetails.id });
        break;
      case "Class":
        const classDetails = this.props.charas.classes.find(klass => {
          return klass.name === value
        })

        this.setState({ classSelection: value, classId: classDetails.id });
        break;
      case "Background":
        const backgroundDetails = this.props.charas.backgrounds.find(background => {
          return background.name === value
        })

        this.setState({ backgroundSelection: value, backgroundId: backgroundDetails.id });
        break;
      default:
        return null;
    }

    const formIsValid = this.checkRaceDetailValidity(selectionType);
    this.setState({ raceDetailFormIsValid: formIsValid });
  };

  raceDetailFinished = () => {
    let subraceId;

    if (this.state.subraceId === null) {
      subraceId = this.props.subraces[0].id;
    } else {
      subraceId = this.state.subraceId;
    }

    this.props.postCharacter(
      this.state.selectedRace,
      subraceId,
      this.state.classId,
      this.state.backgroundId,
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

  componentWillMount() {
    this.props.fetchAllRaces()
  }

  render() {
    const renderRaceList = () => {
      if (this.props.races) {
        return (
          <Aux>
            <RaceSelectionSequence
              showModal={this.state.showModal}
              removeModal={this.removeModal}
              race={this.state.selectedRace}
              selectRace={this.selectRace}
              showRaceSelections={this.state.showRaceSelections}
              onExit={this.renderRaceDetails}
              raceObjects={this.props.charas.races}
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
        )
      } else {
        return null
      }
    }

    return (
      <div>
        {renderRaceList()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    charas: state.charas,
    races: state.charas.races,
    subraces: state.charas.subraces,
    backgrounds: state.charas.backgrounds,
    classes: state.charas.classes,
    userId: state.auth.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllRaces: () => dispatch(actions.fetchAllRaces()),
    fetchRace: name => dispatch(actions.fetchRace(name)),
    postCharacter: (race, subrace, klass, background, userId) =>
      dispatch(actions.postCharacter(race, subrace, klass, background, userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterNew));
