import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./RaceInfo.css";
import Aux from "../../../hoc/Aux/Aux";

class RaceInfo extends Component {
  selectRace = event => {};

  render() {
    let raceInfo = <h1>No Race Selected</h1>;

    if (this.props.charas.character) {
      raceInfo = (
        <div className={classes.RaceInfoContainer}>
          <div className={classes.RaceInfoTitle}>
            <h1 style={{ marginRight: "30px" }}>
              {this.props.charas.character.name}{" "}
            </h1>
          </div>

          <img
            className={classes.IMG}
            src={this.props.charas.character.image}
            alt="Character"
          />
          <h2>{this.props.charas.character.alignment}</h2>
          <table style={{ marginBottom: '10px'}}>
            <thead>
              <tr>
                <th>Ability Score</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.charas.character.ability_score_increase}</td>
                <td>{this.props.charas.character.max_age}</td>
              </tr>
            </tbody>
          </table>
          <table style={{ marginBottom: '10px'}}>
            <thead>
              <tr>
                <th>Size</th>
                <th>Height</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.charas.character.size}</td>
                <td>{this.props.charas.character.height}</td>
                <td>{this.props.charas.character.avg_weight}</td>
              </tr>
            </tbody>
          </table>

          <div className={classes.RaceDescription}><p>{this.props.charas.character.description}</p></div>
          <button onClick={() => this.selectRace()}>
            Choose {this.props.charas.character.name}
          </button>
        </div>
      );
    }
    return <Aux>{raceInfo}</Aux>;
  }
}

const mapStateToProps = state => {
  return {
    charas: state.charas
  };
};

export default connect(mapStateToProps)(RaceInfo);
