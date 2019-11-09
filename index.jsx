import "babel-polyfill";
import "custom-event-polyfill";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import App from "./containers/App";
import { getStore, getHistory } from "./store";

window.onerror = (message, url, lineNumber) => {
    Logger.error(`Unhandled error occured ${url} ${lineNumber}: ${message}`);
    return false;
};

const store = getStore();

render(
    (<Provider store={store}>
        <ConnectedRouter history={getHistory()}>
            <App />
        </ConnectedRouter>
    </Provider>),
    document.getElementById("app"),
);
