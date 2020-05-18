import { handleActions } from "redux-actions";

const initialItems = {
    productName: null,
    quantity: null,
    totalPrice: null,
};

const initialOrder = {
    name: null,
    phone: null,
    email: null,
    telephone: null,
    earliestTime: null,
    latestTime: null,
    facebook: null,
    instagram: null,
    dateOrdered: null,
    pickupDate: null,
    pickUpLocation: null,
    deliveryMethod: null,
    deliveryAddress: null,
    items: [initialItems],
    discount: null,
    paymentStatus: null,
    requests: null,
    specialOffers: null,
};

const initialState = {
    orders: [],
    currentOrder: initialOrder,
    count: 0,
    currentEditIndex: 0,
};

export default handleActions({
    FETCH_ORDERS_SUCCESS: (state, action) => {
        console.log("2")
        return {
            ...state,
            orders: action.payload.data,
            count: action.payload.data.length
        }
    },
    FETCH_ORDER_SUCCESS: (state, action) => {
        return {
            ...state,
            currentOrder: action.payload.data.order
        }
    },
    EDIT_ORDER: (state, action) => {
        return {
            ...state,
            currentEditIndex: action.payload.currentEditIndex,
        }
    },
    default: (state) => {
        return state;
    }
}, initialState);
