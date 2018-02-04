import React, { Component } from "react";
import classes from "./CharacterSheet.css";
import { Transition } from "react-transition-group";
import Aux from "../../hoc/Aux/Aux";

class CharacterSheet extends Component {
  state = {
    showCharacterStats: true
  };

  render() {
    return (
      <Aux>
        <Transition
          in={this.state.showCharacterStats}
          timeout={200}
          mountOnEnter
          unmountOnExit
        >
          {state => {
            const cssClasses = [
              classes.CharacterSideBar,
              state === "entered"
                ? classes.SideBarOpen
                : state === "exited" ? classes.SideBarClosed : null
            ];
            return (
              <div>
                <div className={cssClasses.join(" ")}>
                  <div className={classes.SideBarContents}>
                    <img
                      className={classes.IMG}
                      src={
                        "http://media.wizards.com/images/dnd/newtodnd/NEW_TO_DD_Races_Dwarf.png"
                      }
                      alt="Character"
                    />
                    <h1>Race</h1>
                    <h1>Dwarf</h1>
                    <h2>SubRace</h2>
                    <h2>Mountain Dwarf</h2>
                    <h2>Class</h2>
                    <h2>Class Selection</h2>
                    <h2>Background</h2>
                    <h2>Urchin</h2>
                  </div>
                </div>
              </div>
            );
          }}
        </Transition>
        <div className={classes.SheetContainer}>
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
      </Aux>
    );
  }
}

export default CharacterSheet;
