import React from 'react'
import classes from './Dropdown.css'

const dropdown = (props) => {
    return (
    <div className={classes.DropdownContainer}>
        <select>
            <option selected disabled>Choose {props.selection}</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
    </div>
    );
}

export default dropdown;