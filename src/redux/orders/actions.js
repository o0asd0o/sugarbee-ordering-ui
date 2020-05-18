import { createAction } from "redux-actions";

const fetchOrders = createAction("FETCH_ORDERS");
const fetchOrder = createAction("FETCH_ORDER");
const saveOrder = createAction("SAVE_ORDER");
const editOrder = createAction("EDIT_ORDER");

export const getOrdersByDate = (date) => {
    console.log("1")
    return fetchOrders({
        request: {
            url: `/order/find/${date}`,
            method: "GET"
        },
    })
};

export const getOrderById = (identifier) => {
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
};

export const editOrderByIndex = (index) => {
    return editOrder({
        currentEditIndex: index,
    });
}
