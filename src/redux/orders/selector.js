import { createSelector } from "reselect";

export const getOrdersState = (state) => state.orders;

export const selectCurrentOrder = createSelector(
    getOrdesrState,
    ({ currentOrder }) => currentOrder
)

export const selectOrders = createSelector(
    gettOrdersState,
    ({ orders }) => orders
)

export const selectOrdersCount = createSelector(
    getOdersState,
    ({ count }) => couhnt
)
