import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../UI/Modal/Modal";
import Aux from "../../hoc/Aux/Aux";
import RaceInfo from "./RaceInfo/RaceInfo";
import * as actions from "../../store/actions";
import classes from "./CharacterNew.css";

class CharacterNew extends Component {
  state = {
    races: ["Dwarf", "Elf", "Halfling"],
    showModal: false,
    selectedRace: null
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

  selectRace = event => {
    
  }

  render() {
    return (
      <Aux>
        <Modal show={this.state.showModal} removeModal={this.removeModal}>
          <RaceInfo race={this.state.selectedRace} />
        </Modal>

        <div className={classes.RaceSelectContainer}>
          <h1>CHOOSE YOUR RACE:</h1>
          <h6>Click a character race for more information</h6>
          <ul className={classes.RaceList}>
            {this.state.races.map(race => (
              <li key={race}>
                <div className={classes.RaceListItem}>
                  <div className={classes.MoreInformation}onClick={() => this.selectRaceInfo(race)}>
                    Click for {race} Information
                  </div>
                  <button onClick={() => this.selectRace()}>
                    Choose {race}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Aux>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRace: name => dispatch(actions.fetchRace(name))
  };
};

export default connect(null, mapDispatchToProps)(CharacterNew);
