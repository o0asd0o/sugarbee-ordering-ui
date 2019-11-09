import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { HIDE_INTERVENTION } from "../actions";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Sample from "./Sample";
import Sample2 from "./Sample2";

const App = () => (
    <div className="main-container">
        <Header />
        <div className="container">
            <Switch>
                <Route path="/sample" component={Sample} />
                <Route path="/sample2" component={Sample2} />
            </Switch>
        </div>
        <Footer />
    </div>
);

export default App;
