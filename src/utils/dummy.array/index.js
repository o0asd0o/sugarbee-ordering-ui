import moment from "moment";

const date = moment().toDate();

export const orderDetails = [
    {
        id: 1,
        productName: 'Calamansi Tart',
        quantity: 2,
        price: 1600,
    },
    {
        id: 2,  
        productName: 'Salted Caramel Cake',
        quantity: 1,
        price: 650,
    },
    {
        id: 3,  
        productName: 'Carrot Cake',
        quantity: 3,
        price: 1650,
    } 
];

export const orderList = [
    {
        id: 1,
        customerName: 'Em Buenaventura',
        phone: '09663601467',
        email: 'emb@gmail.com',
        facebook: 'Em Buenaventura',
        instagram: 'Em Buenaventura',
        items: [orderDetails],
        dateOrdered: date,
        pickupDate: date,
        pickupLocation: ['Magallanes'],
        deliveryMethod: ['Lalamove'],
        paymentOption: ['bdo'],
        deliveryAddress: "11 Pureza St.",
        discountType: 0,
        discountAmount: 10,
        paymentStatus: 0,
        request: "note card",
        specialOffer: "free cake",
        totalPrice: "3900"
    },
    {
        id: 2,
        customerName: 'Dex Mel',
        phone: '09663601467',
        email: 'dexmel@gmail.com',
        facebook: 'Dex Mel',
        instagram: 'Dex Mel',
        items: [orderDetails],
        dateOrdered: date,
        pickupDate: date,
        pickupLocation: ['Magallanes'],
        deliveryMethod: ['Lalamove'],
        paymentOption: ['bdo'],
        deliveryAddress: "11 Pureza St.",
        discountType: 1,
        discountAmount: 10,
        paymentStatus: 1,
        request: "note card",
        specialOffer: "free cake",
        totalPrice: "3900"
    }
];