import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header/Header";
import * as actions from "../store/actions"

import CharacterNew from "./CharacterNew/CharacterNew"

const Landing = () => <h2>Landing Page</h2>
const CharacterList = () => <h2>Character List Page</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div style={{ marginTop: '90px'}}>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/character/new" component={CharacterNew} />
            <Route exact path="/character/list" component={CharacterList} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(actions.fetchUser())
  }
}

export default connect(null, mapDispatchToProps)(App);
