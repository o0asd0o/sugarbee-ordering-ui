import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./containers/login";
import MainOrdering from "./containers/main.ordering";
import NewOrder from "./containers/new.order";

function App () {
    return (
        <Router>
            <div className="app-container">
                <Route exact path="/" component={Login} />
                <Route exact path="/ordering" component={MainOrdering} />
                <Route exact path="/neworder" component={NewOrder} />
            </div>
        </Router>
    )
}

export default App
