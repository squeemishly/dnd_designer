import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import RaceInfo from "./RaceInfo/RaceInfo";
import RaceSelection from "./RaceSelection/RaceSelection";
import Aux from "../../../hoc/Aux/Aux";
import Modal from "../../UI/Modal/Modal";

class RaceSelectionSequence extends Component {
  render() {
    return (
      <Aux>
        <Modal show={this.props.showModal} removeModal={this.props.removeModal}>
          <RaceInfo
            race={this.props.race}
            selectRace={this.props.selectRace}
          />
        </Modal>
        <Transition
          in={this.props.showRaceSelections}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onExited={this.props.onExit}
        >
          {state => (
            <RaceSelection
              state={state}
              races={this.props.races}
              onSelect={this.props.onSelectRace}
            />
          )}
        </Transition>
      </Aux>
    );
  }
}

export default RaceSelectionSequence;
