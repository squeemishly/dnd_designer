import React, { Component } from "react";
import { connect } from 'react-redux'
import classes from "./RaceInfo.css"

class RaceInfo extends Component {
  render() {
    return (
      <div>
      <img className={classes.IMG} src={this.props.race.image} alt="Character" />
      <ul>
        <li>Ability Score: {this.props.race.abilityScoreIncrease}</li>
        <li>Age: {this.props.race.maxAge}</li>
        <li>Physique:
          <ul>
            <li>Size: {this.props.race.physique.size}</li>
            <li>Height: {this.props.race.physique.height}</li>
            <li>Weight: {this.props.race.physique.maxWeight}</li>
          </ul>
        </li>
      </ul>
      <p>{this.props.race.description}</p>
    </div>
    )
  }
 } 
 
 const mapStateToProps = state => {
  return {
    character: state.charas
  }
}

 const mapDispatchToProps = dispatch => {
   return {

   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(RaceInfo);
