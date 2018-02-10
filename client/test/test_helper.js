import jsdom from "jsdom";
import jquery from "jquery";
import TestUtils from "react-dom/test-utils";
import ReactDOM from "react-dom";
import chai, { expect } from "chai";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../src/store/reducers";
import chaiJquery from "chai-jquery";
import "./mocha-webpack-compiler";

// Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom("<!doctype html><body></body><html>");
// This is equivalent to window.document in the browser
global.window = global.document.defaultView;
const $ = jquery(global.window);
// This is necessary to 'trick' jquery into not reaching out to browser dom

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}

// Build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
