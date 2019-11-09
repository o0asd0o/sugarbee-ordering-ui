import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import { createHashHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

import reducer from "./reducers";

const history = createHashHistory();
const loggerMiddleware = createLogger();

history.listen((location, action) => {
    console.log(`Route change. Location: ${location.pathname}, Action: ${action}`);
});

const isProduction = process.env.NODE_ENV === "production";

const persistenceConfig = { whitelist: ["codeTable", "commonTowns"] }; // TODO: edit with correct reducer

export const getProductionStore = () => createStore(
    connectRouter(history)(reducer),
    undefined,
    compose(
        applyMiddleware(
            thunkMiddleware,
            routerMiddleware(history),
        ),
        autoRehydrate(),
    ),
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const getDevelopmentStore = () => createStore(
    connectRouter(history)(reducer),
    undefined,
    composeEnhancers(
        applyMiddleware(
            loggerMiddleware,
            thunkMiddleware,
            routerMiddleware(history),
        ),
        autoRehydrate({ log: true }),
    ),
);

export const getStore = () => {
    const store = isProduction ? getProductionStore() : getDevelopmentStore();
    persistStore(store, persistenceConfig);
    return store;
};

export const getHistory = () => history;
