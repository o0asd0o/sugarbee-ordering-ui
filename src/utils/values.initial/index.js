import moment from "moment";

const date = moment().toDate();
export const newOrderForm = {
    customerName: "",
    phoneNumber: "",
    email: "",
    facebook: "",
    instagram: "",
    deliveryAddress: "",
    request: "",
    specialOffer: "",
    dateOrdered: date,
    pickupDate: date,
    orders: [],
    deliveryMethod: ["Lalamove"],
    pickupLocation: ["Magallanes"],
    paymentOption: ["bdo"],
    paymentStatus: 0,
    discountType: 0,
    discountAmount: ""
};
