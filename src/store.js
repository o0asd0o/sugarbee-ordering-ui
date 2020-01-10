import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunkMiddleware from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import { createLogger } from "redux-logger";

import rootReducer from "./reducers";

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: [
        "login",
    ],
};

const loggerMiddleware = createLogger();
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const store = createStore(
    persistedReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ),
);

const persistor = persistStore(store);

export { store, persistor };
