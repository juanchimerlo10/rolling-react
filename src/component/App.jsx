import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import Home from "../pages/Home";
import Layaout from "./Layaout";
import Error404 from "../pages/Error404";
import Tareas from "../pages/Tareas";

export default function App() {
  return (
    <BrowserRouter>
      <Layaout>
        <Switch>
          {/*  excat sirve para que nos lleve exactamente al path indicado */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/tareas" component={Tareas} />
          <Route component={Error404} />
        </Switch>
      </Layaout>
    </BrowserRouter>
  );
}
