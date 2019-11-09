/**
 * Stripped down implementation of redux's combineReducer,
 * Only difference is the whole state is passed instead of 'sliced' state to
 * reducers.
 */

function getUndefinedStateErrorMessage(key, action) {
    const actionType = action && action.type;
    const actionName = (actionType && `"${actionType.toString()}"`) || "an action";

    return (
        `Given action ${actionName}, reducer "${key}" returned undefined. ` +
        "To ignore an action, you must explicitly return the previous state. " +
        "If you want this reducer to hold no value, you can return null instead of undefined."
    );
}

export default function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers);
    const finalReducers = {};
    for (let i = 0; i < reducerKeys.length; i += 1) {
        const key = reducerKeys[i];

        if (typeof reducers[key] === "function") {
            finalReducers[key] = reducers[key];
        }
    }
    const finalReducerKeys = Object.keys(finalReducers);

    return function combination(state = {}, action) {
        let hasChanged = false;
        const nextState = {};

        for (let i = 0; i < finalReducerKeys.length; i += 1) {
            const key = finalReducerKeys[i];
            const reducer = finalReducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(state, action);
            if (typeof nextStateForKey === "undefined") {
                const errorMessage = getUndefinedStateErrorMessage(key, action);
                throw new Error(errorMessage);
            }
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
}
