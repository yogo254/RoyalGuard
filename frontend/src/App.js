import "./App.css";

import React, { Fragment } from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import NavBar from "./components/Navbar";
import Showcase from "./components/Showcase";

function App() {
  let options = {};
  document.addEventListener("DOMContentLoaded", function() {
    let elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, options);
  });

  document.addEventListener("DOMContentLoaded", function() {
    let elems = document.querySelectorAll(".datepicker");
    M.Datepicker.init(elems, options);
  });

  return (
    <Router basename={"app"} hashType={"noslash"}>
      <Fragment>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Showcase} />

          <Switch></Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
