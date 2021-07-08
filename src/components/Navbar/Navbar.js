import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Changelog from '../Changelog/Changelog';
import Board from '../Board/Board';

function Navbar(props) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">TACTICS NINJA</Link>
            </li>
            <li>
              <Link to="/solve">Solve</Link>
            </li>
            <li>
              <Link to="/analyze">Analyze</Link>
            </li>
            <li>
              <Link to="/changelog">Changelog</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/changelog">
            <Changelog />
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