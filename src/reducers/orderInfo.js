
const defaultOrderItem = {
    productName: null,
    quantity: null,
    totalPrice: null,
};

const defaultState = {
    name: null,
    phone: null,
    email: null,
    telephone: null,
    earliestTime: null,
    latestTime: null,
    facebook: null,
    instagram: null,
    dateOrdered: null,
    deadLine: null,
    pickUpLocation: null,
    deliveryMethod: null,
    deliveryAddress: null,
    orderItems: [defaultOrderItem],
    discount: null,
    paymentStatus: null,
    requests: null,
    specialOffers: null,
};

const orderInfoReducer = (state, action) => {
    const orderInfo = state.orderInfo || defaultState;
    switch (action.type) {
        case "FILL_UP_ORDER_INFO": {
            const { name, value } = action.data;
            return Object.assign({}, orderInfo, { [name]: value });
        }

        case "ADD_ORDER_ITEM": {
            const { orderItems } = orderInfo;
            orderItems.push(action.orderItem);
            return Object.assign({}, orderInfo, { orderItems });
        }

        default:
            return defaultState;
    }
}

export default orderInfoReducer;
