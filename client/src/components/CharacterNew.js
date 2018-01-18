import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "./UI/Modal/Modal"
import Aux from "../hoc/Aux/Aux"

class CharacterNew extends Component {
  state = {
    characters: ["Dwarf", "Elf", "Halfling"]
  };

  render() {
    return (
      <Aux>
        <Modal>
          Modal Information
        </Modal>

        <div>
          <h1>CHOOSE YOUR RACE:</h1>
          <h6>Click a character race for more information</h6>
          <ul>{this.state.characters.map(character => <li>{character}</li>)}</ul>
        </div>
      </Aux>
    );
  }
}

export default CharacterNew;
