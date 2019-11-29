import React, { Component } from 'react'
import { Picker, List } from 'antd-mobile';

const locations = [
    {
      label: 'Magallanes',
      value: 'Magallanes',
    },
    {
      label: 'Paseo Center',
      value: 'Paseo Center',
    },
    {
      label: 'BGC Stopover',
      value: 'BGC Stopover',
    },
  ];

class PickupInput extends Component {
  state = {
    data: [],
    cols: 1,
    locValue: ['Magallanes'],

  };

  onChange = (loc) => {
    this.setState({
      locValue: loc,
    });
  };

  render() {
    return (<div>
      <List style={{ backgroundColor: 'white' }} className="picker-list">
        <Picker 
            data={locations} 
            cols={1} 
            className="forss" 
            okText="OK" 
            dismissText="CANCEL"
            onChange={this.onChange} 
            value={this.state.locValue}
        >
          <List.Item arrow="horizontal"><span className="phStyle">Pickup Location</span></List.Item>
        </Picker>
      </List>
    </div>);
  }
}

export default PickupInput
