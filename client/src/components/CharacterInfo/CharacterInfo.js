import React from "react";
import classes from "./CharacterInfo.css"

const characterInfo = () => {
  const dwarf = {
    abilityScoreIncrease: "STR+2,CON+1",
    maxAge: 350,
    physique: { size: "Medium", height: "4 - 5", maxWeight: 150 },
    description: "super important rocks"
  }

  return(
    <div>
      <img className={classes.IMG} src="http://media.wizards.com/images/dnd/newtodnd/NEW_TO_DD_Races_Dwarf.png" />
      <ul>
        <li>Ability Score: {dwarf.abilityScoreIncrease}</li>
        <li>Age: {dwarf.maxAge}</li>
        <li>Physique:
          <ul>
            <li>Size: {dwarf.physique.size}</li>
            <li>Height: {dwarf.physique.height}</li>
            <li>Weight: {dwarf.physique.maxWeight}</li>
          </ul>
        </li>
      </ul>
      <p>{dwarf.description}</p>
    </div>
  )
}

export default characterInfo
