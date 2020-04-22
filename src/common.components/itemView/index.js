import React from "react";
import { ItemList, OrderName } from "./components"
import { orderDetails } from "../../utils/dummy.array";


const ItemView = () => (
    <div>
        {orderDetails
            .sort((a, b) => b.quantity - a.quantity)
            .map(item => ( 
            <ItemList
                key={item.id}
                wrap
                multipleLine align="top" 
                extra={item.quantity}           
            >
                <OrderName>{item.productName}</OrderName>
            </ItemList>
        ))}
    </div>    
);

export default ItemView;
