import React from 'react'
import classes from './Dropdown.css'

const dropdown = (props) => {
    return (
    <div className={classes.DropdownContainer}>
        <select disabled={props.options.length === 0}>
            <option selected disabled>Choose {props.selection}</option>
            {props.options.map(option => {
                return <option value={option}>{option}</option>
            })}
        </select>
    </div>
    );
}

export default dropdown;