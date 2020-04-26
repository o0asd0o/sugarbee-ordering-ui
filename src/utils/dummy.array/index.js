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
        email: 'embuenaventura1@gmail.com',
        telephone: '09663601467',
        facebook: 'Em Buenaventura',
        instagram: 'Em Buenaventura',
        items: [orderDetails],
        dateOrdered: '2020-04-22',
        pickupDate: '2020-04-22',
        pickupLocation: "Magallanes",
        deliveryMethod: "Lalamove",
        deliveryAddress: "11 Pureza St.",
        discount: "percent",
        paymentStatus: "paid",
        request: "note card",
        specialOffer: "free cake",
        totalPrice: "3900"
    },
    {
        id: 2,
        customerName: 'Dex Mel',
        phone: '09663601467',
        email: 'dexmel@gmail.com',
        telephone: '09663601467',
        facebook: 'Dex Mel',
        instagram: 'Dex Mel',
        items: [orderDetails],
        dateOrdered: '2020-04-22',
        pickupDate: '2020-04-22',
        pickupLocation: "Magallanes",
        deliveryMethod: "Lalamove",
        deliveryAddress: "11 Pureza St.",
        discount: "percent",
        paymentStatus: "paid",
        request: "note card",
        specialOffer: "free cake",
        totalPrice: "3900"
    }     
];