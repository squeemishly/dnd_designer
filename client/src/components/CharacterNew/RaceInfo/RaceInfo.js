import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./RaceInfo.css";

class RaceInfo extends Component {
  render() {
    let raceInfo = <h1>No Race Selected</h1>;

    if (this.props.charas.character) {
      raceInfo = (
        <div>
          <h2>{this.props.charas.character.name}</h2>
          <h3>{this.props.charas.character.alignment}</h3>
          <img
            className={classes.IMG}
            src={this.props.charas.character.image}
            alt="Character"
          />
          <ul>
            <li>
              Ability Score: {this.props.charas.character.ability_score_increase}
            </li>
            <li>Age: {this.props.charas.character.max_age}</li>
            <li>
              Physique:
              <ul>
                <li>Size: {this.props.charas.character.size}</li>
                <li>Height: {this.props.charas.character.height}</li>
                <li>Weight: {this.props.charas.character.avg_weight}</li>
              </ul>
            </li>
          </ul>
          <p>{this.props.charas.character.description}</p>
        </div>
      );
    }
    return (
      <div className={classes.RaceInfoContainer}>
        {raceInfo}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    charas: state.charas
  };
};

export default connect(mapStateToProps)(RaceInfo);
