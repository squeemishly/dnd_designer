import React, { Component } from "react";
import classes from "./CharacterSheet.css";

class CharacterSheet extends Component {
  render() {
    return (
      <div className={classes.CharacterSheetContainer}>
        <h1>CHARACTER SHEET</h1>
        <h2>{this.props.character}</h2>
      </div>
    );
  }
}

export default CharacterSheet;
