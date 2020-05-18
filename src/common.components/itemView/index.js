import React from "react";
import { ItemList, OrderName } from "./components"
// import { orderList } from "../../utils/dummy.array";


const ItemView = (props) => (
    <div>
        {props.ordersList.map(orders => ( 
            orders.orderItems
                .sort((a, b) => b.quantity - a.quantity)
                .map(item => ( 
                <ItemList
                    key={item.identifier}
                    wrap
                    multipleLine align="top" 
                    extra={item.quantity}           
                >
                    <OrderName>{item.itemName}</OrderName>
                </ItemList>
        ))))}
    </div>    
);

export default ItemView;
