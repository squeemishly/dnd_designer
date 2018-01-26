import React, { Component } from "react";
import classes from "./CharacterSheet.css";

class CharacterSheet extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.Title}>Title</div>
        <div className={classes.AttributeContainer}>
          <div className={classes.STRContainer}> STR DEX CON ZNT</div>
          <div className={classes.ACContainer}>AC CNLT HP</div>
        </div>
        <div className={classes.SkillsWeaponBackPackContainer}>
          <div className={classes.SkillsContainer}>Skills</div>
          <div className={classes.WeaponsBackpackContainer}>
            <div className={classes.WeaponsContainer}>Weapons</div>
            <div className={classes.BackpackContainer}>Backpack</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterSheet;
