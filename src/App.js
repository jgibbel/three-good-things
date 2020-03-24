import React from 'react';
import './index.css';
import AllGood from './AllGood';
import LHGood from './LHGood';
import Home from './Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// JSON TEMPLATES:
// {"number": 1, "week_name": "March 23rd, 2020", "things": ["0", "1", "2"]}
// {"number": 1, "week_name": "March 23rd, 2020", "things": [["name", ["1", "2", "3"]],["name", ["1", "2", "3"]]]}

function App() {
  return (
    <Router>
    <div className="App">
      <div className="header">
        <div className="top"><Link to="/" style={{ textDecoration: 'none' }}><div className="top-text"><h1>3 Good Things</h1></div></Link></div>
        <div className="nav">
          <div className="button-left"><Link to="/lh-good" style={{ textDecoration: 'none' }}><div className="button-text"><h2 className="left-text">LH's Good Things</h2></div></Link></div>
          <div className="button-right"><Link to="/all-good-things" style={{ textDecoration: 'none' }}><div className="button-text"><h2 className="right-text">All the Good Things</h2></div></Link></div>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/lh-good">
          <LHGood />
        </Route>
        <Route exact path="/all-good-things">
          <AllGood />
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
