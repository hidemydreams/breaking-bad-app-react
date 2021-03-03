import React from "react";
import "./App.css"
import { Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import CharList from "./components/CharList/CharList";
import SelectedChar from "./components/SelectedChar/SelectedChar";
import Home from "./components/Home/Home";



function App() {
  return <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route exact path="/characters" render={(props) => <CharList {...props} />} />
      <Route path="/characters/:id" render={(props) => <SelectedChar {...props} />} />
    </Switch>
  </div>;
}

export default App;
