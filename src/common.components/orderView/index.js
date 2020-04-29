import React from "react";
import { CustomerName, OrderList, Orders, ContactNum, Price } from "./components";
import { orderList, orderDetails } from "../../utils/dummy.array";
import { Link } from "react-router-dom"
 
const OrderViewCont = (props) => {
    return (
        <div>
            <Link to={`/readonly`}>
            {orderList
            .sort((a, b) => a.customerName.localeCompare(b.customerName))
            .map((order, index) => (
                    <OrderList
                        key={order.id}
                        wrap
                        multipleLine align="top"
                        style={{ background: (index%2) ? 'none' : '#FCF3CF' }}
                        onClick={() => {props.getDataList(order); console.log(order); }}
                    >
                        <CustomerName>{order.customerName}</CustomerName>
                        <ContactNum>{order.phone}</ContactNum>
                        {orderDetails.map(item => (
                            <Orders>{item.quantity} x {item.productName}</Orders>
                        ))}
                        <Price>Php {order.totalPrice}</Price>
                    </OrderList>
            ))}
            </Link>
        </div>
    )
};




export default OrderViewCont;
