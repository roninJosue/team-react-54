import React, { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Home from "./components/home/Home";
import Header from "./layout/Header";

function App() {
    return (
        <Fragment >
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={NuevaCuenta} />
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;
