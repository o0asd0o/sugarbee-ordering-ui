import React, { Component } from 'react'
import { List, InputItem, NavBar, Icon, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom'
import DateInput from './DateInput';

const Item = List.Item;

class NewOrder extends Component {

    state = {
        clicked: false
    }

    // handleClick = () => {
    //     this.inputRef.focus();
    // }

    onChange = () => {
        this.setState({ clicked : true })
        
    } 

    inputLabel = () => {
        return {
            margin: '0px', 
            marginLeft: '10px', 
            paddingTop: '5px', 
            color: '#888',
            display: this.state.clicked ? 'block' : 'none'
        }
    }

  render() {

    return (
      <div>
        <NavBar
            id= "NewOrder"
            style={{ background: '#F1C40F' }}
            icon={<Icon type="left" /> }
            leftContent={[ <Link style={{ color: 'white' }} to="/">Back</Link> ]}
            rightContent={[
                "Edit",
                // <Icon type="cross" />
              ]}
        >
            Order #001
        </NavBar>

        <List style={{ height: '550px', overflow: 'auto' }}>
            <p style={this.inputLabel()}>Name</p>
            <InputItem id="name" placeholder="Name" onChange={this.onChange} />

            <p style={this.inputLabel()}>Contact Number</p>
            <InputItem type="number" placeholder="Contact Number" onChange={this.onChange}   />

            {/* <p style={this.inputLabel()}>Date</p>
            <InputItem placeholder="MM-DD-YYYY" onChange={this.onChange} /> */}
            <DateInput />

            <p style={this.inputLabel()}>Pickup Location</p>
            <InputItem placeholder="Pickup Location" onChange={this.onChange} />

            <p style={this.inputLabel()}>Delivery Address</p>
            <InputItem placeholder="Delivery Address" onChange={this.onChange} />

            <p style={this.inputLabel()}>Orders</p>
            <InputItem placeholder="Orders" onChange={this.onChange} />

            <p style={this.inputLabel()}>Discount</p>
            <InputItem placeholder="Discount" onChange={this.onChange} />

            <p style={this.inputLabel()}>Payment Status</p>
            <InputItem placeholder="Payment Status" onChange={this.onChange} />

            <p style={this.inputLabel()}>Request</p>
            <InputItem placeholder="Request" onChange={this.onChange} />

            <p style={this.inputLabel()}>Special Offers</p>
            <InputItem placeholder="Special Offers" onChange={this.onChange} />
        </List>
        <WingBlank size="lg" className="sc-example1">
            <Item style={{ background: '#F9E79F ', fontWeight: 'bold' }}  extra="Php 3,300.00" multipleLine align="top" wrap>Total</Item>
        </WingBlank>
      </div>
    );
  }
}



export default NewOrder
