import React, { Component } from "react";
import Transition from "react-transition-group/Transition";

import classes from "./CharacterList.css";
import CharacterSheet from "../CharacterSheet/CharacterSheet";

class CharacterList extends Component {
  state = {
    characters: ["Demogorgon", "Shadow Monster"],
    showCharacterList: true,
    showCharacterSheet: false,
    selectedCharacter: null
  };

  renderCharacterSheet = () => {
    this.setState({ showCharacterSheet: true });
  };

  chooseCharacter = character => {
    this.setState({
      showCharacterList: false,
      selectedCharacter: character
    });
  };

  render() {
    return (
      <div className={classes.CharacterListPageContainer}>
        <Transition
          in={this.state.showCharacterList}
          timeout={100}
          mountOnEnter
          unmountOnExit
          onExited={() => this.renderCharacterSheet()}
        >
          {state => (
            <div className={classes.CharacterListContainer}>
              <h1 className={classes.CharacterListTitle}>Character List</h1>
              {this.state.characters.map(character => (
                <h2
                  onClick={() => this.chooseCharacter(character)}
                  key={character}
                  className={classes.CharacterListItem}
                >
                  {character}
                </h2>
              ))}
            </div>
          )}
        </Transition>
        <Transition
          in={this.state.showCharacterSheet}
          timeout={100}
          mountOnEnter
          unmountOnExit
          onExited={() => this.renderCharacterSheet()}
        >
          {state => {
            const defaultStyle = {
              transition: `opacity 400ms ease-in-out`,
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
                <div className={classes.CharacterListContainer}>
                  <CharacterSheet character={this.state.selectedCharacter} />
                </div>
              </div>
            );
          }}
        </Transition>
      </div>
    );
  }
}

export default CharacterList;
