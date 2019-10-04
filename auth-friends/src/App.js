import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Friend from "./components/friends/Friend";
import Friends from "./components/friends/Friends";
import PrivateRoute from "./utilities/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route path="/friend/:id" component={Friend} />
          <PrivateRoute path="/friends" component={Friends} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
