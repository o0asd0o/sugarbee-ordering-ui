import React, { Component } from 'react'
import { List } from 'antd-mobile'

const Item = List.Item;

class OrderView extends Component {
    render() {
        return (
            <div style={{ height: '470px', overflow: 'auto' }}>
                <Item style={{ background: '#FCF3CF' }}>
                    <p className="pName">Em Buenaventura</p>
                    <p className="pNum">0915-787-8744</p>
                    <p className="pOrder">1 x 8" Dulce de Leche Cake</p>
                    <p className="pOrder">1 x 8" Dulce de Leche Cake</p>
                </Item>
                <Item>
                    <p className="pName">Dex Mel</p>
                    <p className="pNum">0915-787-8744</p>
                    <p className="pOrder">1 x 8" Dulce de Leche Cake</p>
                    <p className="pOrder">1 x 8" Dulce de Leche Cake</p>
                </Item>
                <Item style={{ background: '#FCF3CF' }}>
                    <p className="pName">Em Buenaventura</p>
                    <p className="pNum">0915-787-8744</p>
                    <p className="pOrder">1 x 8" Dulce de Leche Cake</p>
                    <p className="pOrder">1 x 8" Dulce de Leche Cake</p>
                </Item>
                <Item>
                    <p className="pName">Dex Mel</p>
                    <p className="pNum">0915-787-8744</p>
                    <p className="pOrder">1 x 8" Dulce de Leche Cake</p>
                    <p className="pOrder">1 x 8" Dulce de Leche Cake</p>
                </Item>
                <Item style={{ background: '#FCF3CF' }}>
                    <p className="pName">Em Buenaventura</p>
                    <p className="pNum">0915-787-8744</p>
                    <p className="pOrder">1 x 8" Dulce de Leche Cake</p>
                    <p className="pOrder">1 x 8" Dulce de Leche Cake</p>
                </Item>
                <Item>
                    <p className="pName">Dex Mel</p>
                    <p className="pNum">0915-787-8744</p>
                    <p className="pOrder">1 x 8" Dulce de Leche Cake</p>
                    <p className="pOrder">1 x 8" Dulce de Leche Cake</p>
                </Item>
            </div>
        )
    }
}

export default OrderView
