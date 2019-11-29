import React, { Component } from 'react'
import { Picker, List } from 'antd-mobile';


const methods = [
    {
      label: 'Lalamove',
      value: 'Lalamove',
    },
    {
      label: 'In-house',
      value: 'In-house',
    }
  ];

class DeliveryMethod extends Component {
  state = {
    data: [],
    cols: 1,
    metValue: ['Lalamove'],

  };

  onChange = (met) => {
    this.setState({
      metValue: met,
    });
  };

  render() {
    return (<div>
      <List style={{ backgroundColor: 'white' }} className="picker-list">
        <Picker 
            data={methods} 
            cols={1} 
            className="forss" 
            okText="OK" 
            dismissText="CANCEL"
            onChange={this.onChange} 
            value={this.state.metValue}
        >
          <List.Item arrow="horizontal"><span className="phStyle" >Delivery Method</span></List.Item>
        </Picker>
      </List>
    </div>);
  }
}

export default DeliveryMethod
