import React from "react";
import { Route, Switch } from 'react-router-dom';
import Defense from "./Components/Defense";
import ELO from "./Components/ELO";
import Empires from "./Components/Empires";
import Home from "./Components/Home";
import About from "./Components/About";
import Ensign from "./Components/Ensign";
import Lumen from "./Components/Lumen";
import Testimonials from "./Components/Testimonials";


export default
    <Switch>
        <Route component={Defense} path="/defenseAgainstTheDarkArts" />
        <Route component={ELO} path="/ELO" />
        <Route component={Empires} path="/Empires" />
        <Route component={Lumen} path="/Lumen" />
        <Route component={Ensign} path="/Ensign" />
        <Route component={About} path="/About" />
        <Route component={Testimonials} path="/Testimonials" />
        <Route component={Home} exact path="/" />
    </Switch>
