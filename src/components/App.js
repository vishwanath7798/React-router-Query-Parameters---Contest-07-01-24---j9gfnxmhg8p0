import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Shapes from "./Shapes";
import Image from "./Image";

const App = () => {
  return (
    <Router>
      <div id="home">
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shapes">Shapes</Link>
            </li>
            <li>
              <Link to="/image">Image</Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <Switch>
        <Route path="/shapes" component={Shapes} />
        <Route path="/image" component={Image} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
