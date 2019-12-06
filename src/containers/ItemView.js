import React, { Component } from 'react'
import { List } from 'antd-mobile'

const Item = List.Item;

class ItemView extends Component {

    render() {
        return this.props.orders.map((order) => (
            <List key={order.id}>
                <Item style={{ borderBottom: '1px solid #EAECEE' }} extra={order.quantity} multipleLine align="top" wrap>{order.orderName}</Item>
            </List>
        ));
    }
}

export default ItemView