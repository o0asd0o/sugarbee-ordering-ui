import React, { Component } from 'react'
import { Picker, List } from 'antd-mobile';


const pay = [
    {
      label: 'BDO',
      value: 'BDO',
    },
    {
      label: 'GCASH',
      value: 'GCASH',
    },
    {
      label: 'BPI',
      value: 'BPI',
    },
  ];

class Payment extends Component {
  state = {
    data: [],
    cols: 1,
    payValue: ['BDO'],

  };

  onChange = (payment) => {
    this.setState({
      payValue: payment,
    });
  };

  render() {
    return (<div>
      <List style={{ backgroundColor: 'white' }} className="picker-list">
        <Picker 
            data={pay} 
            cols={1} 
            className="forss" 
            okText="OK" 
            dismissText="CANCEL"
            onChange={this.onChange} 
            value={this.state.payValue}
        >
          <List.Item arrow="down"></List.Item>
        </Picker>
      </List>
    </div>);
  }
}

export default Payment
