
const defaultState = {
    orders: []
};

const ordersReducer = (state, action) => {
    const orders = state.orders || defaultState;
    switch(action.type) {
        case "ORDERS_SUCCESS":
            return { orders: action.orders };

        case "ORDERS_FAILURE":
        default:
            return defaultState;
    }
}

export default ordersReducer;
