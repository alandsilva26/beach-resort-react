import React from "react";
import { Route, Switch } from "react-router-dom";

//components
import NavBar from "./components/NavBar/NavBar";

//pages
import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";
import SingleRoom from "./pages/SingleRoom/SingleRoom";
import Error from "./pages/Error/Error";

//css
import "./App.css";
import "./sass/main.scss";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
