import { createAction } from "redux-actions";

const fetchOrders = createAction("FETCH_ORDERS");
const fetchOrder = createAction("FETCH_ORDER");
const saveOrder = createAction("SAVE_ORDER");

export const getOrders = () => {
    return fetchOrders({
        request: {
            url: "/orders",
            method: "GET"
        }
    });
};

export const getOrderById = (identifer) => {
    return fetchOrder({
        request: {
            url: `/orders/${identifier}`,
            method: "GET",
        }
    });
};

export const saveOrderToDB = (order) => {
    return saveOrder({
        request: {
            url: "/orders",
            method: "POST",
            data: {
                ...order
            }
        }
    })
}
