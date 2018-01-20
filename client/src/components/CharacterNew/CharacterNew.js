import React, { Component } from "react";
import { connect } from "react-redux";
import Transition from "react-transition-group/Transition";

import Modal from "../UI/Modal/Modal";
import Aux from "../../hoc/Aux/Aux";
import RaceInfo from "./RaceInfo/RaceInfo";
import Dropdown from "../UI/Dropdown/Dropdown";
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
      background: ["Acolyte", "Barbarian", "Charlatan", "City Watch", "Clan Crafter", "Cloistered", "Courtier", "Criminal", "Custom", "Entertainer", "Faction Agent", "Far Traveler", "Folk Hero", "Guild Artisan", "Haunted One", "Hermit", "Inheritor", "Knight", "Mercenary", "Noble", "Outlander", "Port City", "Sage", "Sailor", "Soldier", "Urban", "Urchin"]
    },
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
          <Dropdown selection={'Subrace'} options={this.state.dwarf.subrace} />
          <Dropdown selection={'Class'} options={this.state.dwarf.class} />
          <Dropdown selection={'Background'} options={this.state.dwarf.background} />
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
