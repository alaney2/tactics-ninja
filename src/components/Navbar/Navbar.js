import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Changelog from '../Changelog/Changelog';
import Board from '../Board/Board';
import Solve from '../Solve/Solve';
import './Navbar.css';

function Navbar(props) {
  return (
    <Router>
      <div>
        <nav className="container">
          <Link to="/" className="Home">TACTICS NINJA</Link>
          <div className="Links">
          <Link to="/solve" className="Link">Solve</Link>
          <Link to="/analyze" className="Link">Analyze</Link>
          <Link to="/changelog" className="Link">Changelog</Link>
          </div>
        </nav>

        <Switch>
          <Route path="/changelog">
            <Changelog />
          </Route>
          <Route path="/solve">
            <Solve />
          </Route>
          <Route path="/">
            <Board />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;