import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import * as actions from "../store/actions";
import Header from "./Header/Header";
import CharacterNew from "./CharacterNew/CharacterNew";
import CharacterList from "./CharacterList/CharacterList";

const Landing = () => <h2>Landing Page</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div style={{ marginTop: "90px" }}>
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
  };
};

export default connect(null, mapDispatchToProps)(App);
