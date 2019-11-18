import React, { Component } from 'react'
import { List } from 'antd-mobile'

const Item = List.Item;

class ItemView extends Component {
    render() {
        return (
            <div>
                <List>
                    <Item extra="21" multipleLine align="top" wrap>
                        Sugar Caramel Cake
                    </Item>
                    <Item extra="21" multipleLine align="top" wrap>
                        SanChips Big
                    </Item>
                </List>
                
            </div>
        )
    }
}

export default ItemView