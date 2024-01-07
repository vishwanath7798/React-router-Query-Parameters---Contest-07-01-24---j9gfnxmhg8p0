import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router,Link, Route, Switch, useLocation } from "react-router-dom";
import Home from "./Home";
import Shapes from "./Shapes";
import Image from "./Image";




export default function App() {
  return (
    
    <div id="home">
      <nav className="navbar navbar-light">
    <Router>
      <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Shapes</Link>
          </li>
          <li>
           <Link to="/">Image</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Shapes" component={Shapes}/>
        <Route exact path="/Image" component={Image}/>
      </Switch>
    </Router>
        
      
          
        

        
          
            
              
            
         
      
        
      
        
        
      
    </div>
      
  );
}
// export default App;
