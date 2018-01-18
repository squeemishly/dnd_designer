import React, { Component } from "react";
import { connect } from "react-redux";

class CharacterNew extends Component {
  state = {
    characters: [
      "Dwarf",
      "Elf",
      "Halfling"
    ]
  }

  render() {
    return(
      <div>
      <h1>CHOOSE YOUR RACE:</h1>
        <ul>
        {this.state.characters.map( character => (
            <li>
              {character}
            </li>
        ))}
        </ul>
      </div>
    )
  }
}

export default CharacterNew
