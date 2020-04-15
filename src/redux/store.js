import { applyMiddleware, createStore, compose } from "redux";
import axiosMiddleware from "redux-axios-middleware";

import reducers from "./reducers";
import client from "../utils/axios"

const composeEnhancers =
    typeof window === "object" &&
        // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        axiosMiddleware(client)
    ),
    // other store enhancers if any
);

export default createStore(
    reducers,
    enhancer
)
