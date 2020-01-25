import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import { Link } from "react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import bksSearch from "./pages/bksSearch";
import List from "./pages/List";
import "./App.css";

function App() {
    return (
     <Router>
       <div id="backgr">
       
         <Nav />
         <Switch>
           <Route exact path="/" component={Books} />
           <Route exact path="/books" component={Books} />
           <Route exact path="/mybooks" component={List} />
           <Route exact path="/books/:id" component={Detail} />
           <Route exact path="/search" component={bksSearch} />
           <Route component={NoMatch} />
          </Switch>
       </div>



     </Router>
    );
}

export default App;
