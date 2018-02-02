import React from "react";
import classes from "./RaceDetailInfo.css";

const raceDetailInfo = props => (
  <div className={classes.Container}>
    <div>
      <h1 className={classes.Title}>{props.detail}</h1>
    </div>
    <div className={classes.Table}>
      <table style={{ marginBottom: "10px" }}>
        <thead>
          <tr>
            <th>Ability Score Increse</th>
            <th>Traits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ability Score Increase</td>
            <td>Traits</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default raceDetailInfo;
