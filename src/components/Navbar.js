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
import Solve from './Solve';

function Navbar(props) {
  return (
    <Router>
      <div>
        <nav className="text-sm flex py-8 flex-shrink justify-evenly">
          <div className="sm:text-2xl italic font-extrabold">
            <Link to="/">TACTICS NINJA</Link>
          </div>

          <div className="sm:text-xl flex space-x-3">
            <Link to="/play" className="hover:text-pink-300">Play</Link>
            <Link to="/solve" className="hover:text-pink-300">Solve</Link>
            <Link to="/analyze" className="hover:text-pink-300">Analyze</Link>
            <Link to="/changelog" className="hover:text-pink-300">Changelog</Link>
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
          <Route path="/analyze">
            <Analyze />
          </Route>
          <Route path="/">
            <Play />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;