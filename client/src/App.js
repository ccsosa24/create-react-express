import React, { Component } from "react";
import { BrowerRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import List from "./pages/List";
import "./App.css";

function App() {
    return (
     <Router>
       <div>
         <Nav />
         <Switch>
           <Route exact path="/" component={Books} />
           <Route exact path="/books" component={Books} />
           <Route exact path="/mybooks" component={List} />
           <Route exact path="/books/:id" component={Detail} />
           <Route exact path="/search" component={Search} />
           <Route component={NoMatch} />
          </Switch>
       </div>



     </Router>
    );
}

export default App;
