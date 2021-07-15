import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Play from './Play';
import Analyze from './Analyze';
import Changelog from './Changelog';
import Board from './Board';
import Solve from './Solve';

function Navbar(props) {
  return (
    <Router>
      <div>
        <nav className="text-sm flex py-8 flex-shrink justify-evenly items-center text-alice-blue">
          <div className="sm:text-2xl italic font-extrabold">
            <Link to="/">TACTICS NINJA</Link>
          </div>

          <div className="sm:text-xl flex space-x-3 items-center hover:text-red-100">
            <Link to="/play">Play</Link>
            <Link to="/solve">Solve</Link>
            <Link to="/analyze" >Analyze</Link>
            <Link to="/changelog">Changelog</Link>
          </div>
        </nav>

        <Switch>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/changelog">
            <Changelog />
          </Route>
          <Route path="/solve">
            <Solve />
          </Route>
          <Route path="analyze">
            <Analyze />
          </Route>
          <Route path="/">
            <Analyze />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;