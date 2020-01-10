import combineReducers from "./combineReducers";

import orderInfo from "./orderInfo";
import orders from "./orders";

const rootReducer = combineReducers({
    orderInfo,
    orders,
});

export default rootReducer;
