import React, { Component } from 'react'
import { List } from 'antd-mobile'

const Item = List.Item;

class ItemView extends Component {

    render() {
        return this.props.orders.map((order) => (
            <Item
                wrap
                multipleLine align="top" 
                extra={order.quantity}
                style={{ borderBottom: '1px solid #EAECEE' }}  
                key={order.id}                
            >
                {order.orderName}
            </Item>
        ));
    }
}

export default ItemView