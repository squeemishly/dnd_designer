import React from "react";
import classes from "./Dropdown.css";

const dropdown = props => {
  return (
    <div className={classes.DropdownContainer}>
      <select disabled={props.options.length === 0} onChange={props.changed}>
        <option disabled>Choose {props.selection}</option>
        {props.options.map(option => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default dropdown;
