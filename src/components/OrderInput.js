import React, { Component } from 'react'
import { Picker, List } from 'antd-mobile';

const orders = [
  [
    {
      label: 'Cake',
      value: 'Cake',
    },
    {
      label: 'Cookie',
      value: 'Cookie',
    },
  ],
  [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
  ],
];



class OrderInput extends Component {
  state = {
    data: [],
    sValue: ['Cake', '1'],
  };

  render() {
    return (<div>
      <List style={{ backgroundColor: 'white' }} className="picker-list">
        <Picker
          data={orders}
          title="Item List"
          okText="ADD" 
          dismissText="CANCEL"
          cascade={false}
          value={this.state.sValue}
          onChange={v => this.setState({ sValue: v })}
          onOk={v => this.setState({ sValue: v })}
        >
          <List.Item arrow="horizontal"><span style={{ color: '#B2BABB ' }}>Add Order</span></List.Item>
        </Picker>
      </List>
    </div>);
  }
}

export default OrderInput
