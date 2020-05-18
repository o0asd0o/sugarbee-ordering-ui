import React from "react";
import { CustomerName, OrderItem, Orders, ContactNum, Price } from "./components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
// import { orderList } from "../../utils/dummy.array";
import { editOrderByIndex } from "../../redux/orders/actions";

const OrderView = (props) => {
    return (
        <div>
            {console.log(props.ordersList)}
            {props.ordersList
                .sort((a, b) => a.customerName.localeCompare(b.customerName))
                .map((order, index) => (
                    <OrderItem
                        key={order.identifier}
                        wrap
                        multipleLine align="top"
                        style={{ background: (index % 2) ? "none" : "#FCF3CF" }}
                        onClick={() => props.editOrder(index)}>
                            <CustomerName>{order.customerName}</CustomerName>
                            <ContactNum>{order.contactNumber}</ContactNum>
                            {order.orderItems.map(item => (
                                <Orders key={item.itemName}>{item.quantity} x {item.itemName}</Orders>
                            ))}
                            <Price>Php {order.totalAmount}</Price>
                    </OrderItem>
                ))
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        editOrder: (index) => {
            dispatch(editOrderByIndex(index))
            push("/editorder");
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderView);
