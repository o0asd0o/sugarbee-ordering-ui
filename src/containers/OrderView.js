import React, { Component } from 'react'
import { List } from 'antd-mobile'

const Item = List.Item;

class OrderView extends Component {

    render() {
        return this.props.orders.map((order) => (
            <Item key={order.id} style={{ background: (order.id%2) ? '#FCF3CF' : 'none' }}>
                <p className="pName">{order.customerName}</p>
                <p className="pNum">{order.contactNum}</p>
                <p className="pOrder">{order.orderName}</p>
                <p className="pOrder">{order.orderName}</p>
            </Item>
        ));
    }
}

export default OrderView
