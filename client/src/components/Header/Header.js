import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./Header.css";

class Header extends Component {
  renderLoggedInContent() {
    switch (this.props.auth.username === undefined) {
      case null:
        return "";
      case true:
        return (
          <li key="4">
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">Welcome {this.props.auth.username}</li>,
          <li key="4">
            <a href="/character/list">Character List</a>
          </li>,
          <li key="3">
            <a href="/character/new">New Character</a>
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <header className={classes.Toolbar}>
        <a className="">DND Designer</a>
        <nav className={classes.Navbar}>
          <ul className={classes.NavbarLinks}>
            {this.renderLoggedInContent()}
          </ul>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Header);
