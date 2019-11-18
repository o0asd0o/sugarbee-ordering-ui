import React, { Component } from 'react'
import { List } from 'antd-mobile'

const Item = List.Item;

class ItemView extends Component {
    render() {
        return (
                <List>
                    <Item style={{ borderBottom: '1px solid #EAECEE ' }} extra="21" multipleLine align="top" wrap>
                        Sugar Caramel Cake
                    </Item>
                    <Item style={{ borderBottom: '1px solid #EAECEE ' }} extra="21" multipleLine align="top" wrap>
                        SanChips Big
                    </Item>
                </List>
        )
    }
}

export default ItemView