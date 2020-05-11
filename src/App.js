import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./containers/login";
import NewOrder from "./containers/new.order";
import EditOrder from "./containers/edit.order";
import MainOrdering from "./containers/main.ordering";


function App () {
    return (
        <Router>
            <div className="app-container">
                <Route exact path="/" component={Login} />
                <Route exact path="/neworder" component={NewOrder} />
                <Route path="/ordering" component={MainOrdering} />
                <Route path="/editorder" component={EditOrder} />
            </div>
        </Router>
    );
}

export default App
