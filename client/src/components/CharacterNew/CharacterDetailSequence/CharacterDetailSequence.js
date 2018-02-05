import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import RaceDetailSelection from "./RaceDetailSelection/RaceDetailSelection";
import CharacterOptions from "./CharacterOptions/CharacterOptions";
import Aux from "../../../hoc/Aux/Aux";
import Modal from "../../UI/Modal/Modal";

class CharacterDetailSequence extends Component {
  render() {
    return (
      <Aux>
        <Transition
          in={this.props.showRaceDetails}
          timeout={100}
          mountOnEnter
          unmountOnExit
          onExited={this.props.onExit}
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

            let subraces = [];
            if (this.props.subraces) {
              subraces = this.props.subraces.map(subrace => subrace.name);
            }
            let backgrounds = [];
            if (this.props.backgrounds) {
              backgrounds = this.props.backgrounds.map(
                background => background.name
              );
            }
            let classes = [];
            if (this.props.classes) {
              classes = this.props.classes.map(
                klass => klass.name
              );
            }
            return (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }}
              >
                <Modal
                  show={this.props.showRaceDetailModal}
                  removeModal={this.props.removeRaceDetailModal}
                >
                  <CharacterOptions detail={this.props.raceDetailShown} />
                </Modal>
                <RaceDetailSelection
                  characterName={this.props.character.name}
                  characterImage={this.props.character.image}
                  subraceOptions={subraces}
                  classOptions={classes}
                  backgroundOptions={backgrounds}
                  dropdownChanged={(event, detailType) =>
                    this.props.dropdownChanged(event, detailType)
                  }
                  buttonClicked={this.props.buttonClicked}
                  disableButton={!this.props.raceDetailFormIsValid}
                  subraceSelection={this.props.subraceSelection}
                  classSelection={this.props.classSelection}
                  backgroundSelection={this.props.backgroundSelection}
                  moreRaceInfo={this.props.moreRaceInfo}
                />
              </div>
            );
          }}
        </Transition>
      </Aux>
    );
  }
}

export default CharacterDetailSequence;
