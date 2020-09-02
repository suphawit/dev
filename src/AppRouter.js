import React from "react";
import Home from "./components/home"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function AppRouter() {
    return (
      <Router>
          <Switch>
            <Route path="/" component={Home} />
            {/* <Route path="/about" component={About} />
            <Route path="/posts" component={Post} />
            <Route path="/projects" component={Project} /> */}
          </Switch>
      </Router>
    );
  }