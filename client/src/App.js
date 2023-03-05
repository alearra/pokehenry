import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Create from "./pages/Create/Create";
import Home from "./containers/Home/Home";
import Details from "./containers/Details/Details";
import Page404 from "./pages/Page404/Page404";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/pokemon/:id">
          <Details />
        </Route>

        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
