import React, { Component } from 'react'
import { List, InputItem, NavBar, Icon, WingBlank, Radio } from 'antd-mobile';
import { Link } from 'react-router-dom'
import DateInput from './DateInput';
import Deadline from './Deadline'
import PickupInput from './PickupInput';
import DeliveryMethod from './DeliveryMethod';
import AddOrderNew from './AddOrderNew';
import Payment from './Payment'

const Item = List.Item;

class NewOrder extends Component {

    state = {
        changed: false,
        value: 0,
        value1: 0
    }

    onChange = () => {
        this.setState({ changed : true })
    }

    onChangeRadio = (value) => {
      console.log('checkbox');
      this.setState({
        value,
      });
    };

    onChangeRadio1 = (value) => {
      console.log('checkbox');
      this.setState({
        value1: value,
      });
    };

    inputLabel = () => {
        return {
            margin: '0px', 
            marginLeft: '10px', 
            paddingTop: '5px', 
            color: '#888',
            display: this.state.changed ? 'block' : 'none'
        }
    }

  render() {
    const { value, value1 } = this.state;
    const data = [
      { value: 0, label: 'Percent' },
      { value: 1, label: 'Amount' },
    ];

    const data1 = [
      { value: 0, label: 'Unpaid' },
      { value: 1, label: 'Paid' },
    ];

    return (
      <div>
        <NavBar
            id= "NewOrder"
            style={{ background: '#F1C40F' }}
            icon={<Icon type="left" /> }
            leftContent={[ <Link style={{ color: 'white' }} to="/">Back</Link> ]}
            rightContent={[ "Done" ]}
        >
            Order #001
        </NavBar>

        <List style={{ height: '550px', overflow: 'auto', marginBottom: '40px' }}>
            <p style={this.inputLabel()}>Name</p>
            <InputItem id="name" placeholder="Name" onChange={this.onChange} />

            <p style={this.inputLabel()}>Contact Number</p>
            <InputItem id="contactNum" type="number" placeholder="Contact Number" onChange={this.onChange}   />
            
            <p style={this.inputLabel()}>Email Address</p>
            <InputItem id="email" placeholder="Email Address" onChange={this.onChange} />

            <p style={this.inputLabel()}>Facebook</p>
            <InputItem id="facebook" placeholder="Facebook" onChange={this.onChange} />

            <p style={this.inputLabel()}>Instagram</p>
            <InputItem id="instagram" placeholder="Instagram" onChange={this.onChange} />

            <DateInput />

            <Deadline />

            <PickupInput />

            <DeliveryMethod />

            <p style={this.inputLabel()}>Delivery Address</p>
            <InputItem id="delAddress" placeholder="Delivery Address" onChange={this.onChange} />

            <p style={{  margin: '0px', marginLeft: '10px', paddingTop: '5px', color: '#888' }}>Order</p>
            <AddOrderNew />
            
            <div style={{ display: 'flex' }}>
              <div style={{ width: '50%'  }}>
                <p style={this.inputLabel()}>Discount</p>
                <InputItem id="discount" type="number" maxLength="5" placeholder="Discount" onChange={this.onChange} />
              </div>

              <div style={{ width: '50%', marginTop: '10px' }} >
                {data.map(i => (
                  <Radio 
                    style={{ color: '#888', fontSize: '12px', paddingLeft: '16px' }} 
                    className="my-radio" key={i.value} 
                    checked={value === i.value} 
                    onChange={() => this.onChangeRadio(i.value)}>
                    {i.label}
                  </Radio>
                  
                ))}
              </div>
            </div>
            
            <p style={{  margin: '0px', marginLeft: '10px', paddingTop: '5px', color: '#888' }}>Payment Status</p>

            <div style={{ display: 'flex' }}>
              <div style={{ marginLeft: '10px', marginTop: '13px' }} >
                {data1.map(i => (
                  <Radio 
                    style={{ color: '#888', marginRight: '50px' }} 
                    className="my-radio" key={i.value} 
                    checked={value1 === i.value} 
                    onChange={() => this.onChangeRadio1(i.value)}>
                    {i.label}
                  </Radio>
                ))}
              </div>
              <div style={{ flexGrow: 5  }}>
                <Payment />
              </div>
            </div>

            <p style={this.inputLabel()}>Request</p>
            <InputItem id="request" placeholder="Request" onChange={this.onChange} />

            <p style={this.inputLabel()}>Special Offers</p>
            <InputItem id="specialOffers" placeholder="Special Offers" onChange={this.onChange} />
        </List>
        <WingBlank size="lg" className="sc-example1">
            <Item style={{ background: '#F9E79F ', fontWeight: 'bold' }}  extra="Php 3,300.00" multipleLine align="top" wrap>Total</Item>
        </WingBlank>
      </div>
    );
  }
}



export default NewOrder
