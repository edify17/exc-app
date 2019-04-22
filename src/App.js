import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import {ModuleA} from "module-a";
import {ModuleB} from "module-b";
import './App.css';

export default class App extends Component {
  render() {
    const history = createBrowserHistory();
    const BUILD_RE = "(^\/build-[^\/]+)";
    const basenames = history.createHref(history.location).match(BUILD_RE);
    return (
      <div className="App">
        <Router basename={Array.isArray(basenames) && basenames[0] || ''}>
          <header className="App-header">
              <p className="App-name">Adobe Excperience Cloud</p>
              <Link to="/module1" className="App-route">Module 1</Link>
              <Link to="/module2" className="App-route">Module 2</Link>
          </header>
          <Route path="/module1" component={ModuleA} />
          <Route path="/module2" component={ModuleB} />
        </Router>
      </div>
    );
  }
}
