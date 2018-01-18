import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderLoggedInContent() {
    switch (this.props.auth.username === undefined) {
      case null:
        return "";
      case true:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="1">{this.props.auth.username}</li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="">
          <a className="">DND Designer</a>
          <ul className="">
            <li>
              <a href="/character/new">Create New Character</a>
            </li>
            {this.renderLoggedInContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Header);
