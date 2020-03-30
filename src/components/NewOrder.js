import React, { Component } from 'react'
import { List, InputItem, NavBar, Icon, WingBlank, Radio, DatePicker, Picker } from 'antd-mobile';
import { Link } from 'react-router-dom'
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import AddOrderNew from './AddOrderNew';

const Item = List.Item;
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
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

class NewOrder extends Component {

    state = {
        changed: false,
        value: 0,
        value1: 0,
        date: now,
        deadlineDate: now,
        data: [],
        cols: 1,
        locValue: ['Magallanes'],
        metValue: ['Lalamove'],
        payValue: ['BDO'],
    }

    onChange = () => {
        this.setState({ changed : true })
    }

    onChangePayment = (payment) => {
        this.setState({
            payValue: payment,
        });
    };

    onChangeDelMet = (met) => {
        this.setState({
            metValue: met,
        });
    };

    onChangeLoc = (loc) => {
        this.setState({
            locValue: loc,
        });
    };

    onChangeDiscount = (value) => {
        console.log('checkbox');
        this.setState({
            value,
        });
    };

    onChangePaymentStat = (value) => {
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
            leftContent={[ <Link style={{ color: 'white' }} to="/main">Back</Link> ]}
            rightContent={[ <Link style={{ color: 'white' }} to="/main">Done</Link> ]}
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

            {/* <DateInput /> */}
            <DatePicker
                mode="date"
                title="Select Date"
                extra="Optional"
                locale={enUs}
                value={this.state.date}
                onChange={date => this.setState({ date })}
            >
                <List.Item arrow="horizontal"><span className="phStyle">Date Ordered</span></List.Item>
            </DatePicker>

            {/* <Deadline /> */}
            <DatePicker
                mode="date"
                title="Select Date"
                extra="Optional"
                locale={enUs}
                value={this.state.deadlineDate}
                onChange={deadlineDate => this.setState({ deadlineDate })}
            >
                <List.Item arrow="horizontal"><span className="phStyle">Deadline</span></List.Item>
            </DatePicker>

            {/* <PickupInput /> */}
            <Picker 
                data={locations} 
                cols={1} 
                className="forss" 
                okText="OK" 
                dismissText="CANCEL"
                onChange={this.onChangeLoc} 
                value={this.state.locValue}
            >
                <List.Item arrow="horizontal"><span className="phStyle">Pickup Location</span></List.Item>
            </Picker>

            {/* <DeliveryMethod /> */}
            <Picker 
                data={methods} 
                cols={1} 
                className="forss" 
                okText="OK" 
                dismissText="CANCEL"
                onChange={this.onChangeDelMet} 
                value={this.state.metValue}
            >
                <List.Item arrow="horizontal"><span className="phStyle">Delivery Method</span></List.Item>
            </Picker>

            <p style={this.inputLabel()}>Delivery Address</p>
            <InputItem id="delAddress" placeholder="Delivery Address" onChange={this.onChange} />

            <p style={{  margin: '0px', marginLeft: '10px', paddingTop: '5px', color: '#888' }}>Order</p>
            <AddOrderNew />
            
            <div style={{ display: 'flex', alignItems: 'stretch' }}>
                <div style={{ width: '80%'  }}>
                    <p style={this.inputLabel()}>Discount</p>
                    <InputItem id="discount" type="number" maxLength="5" placeholder="Discount" onChange={this.onChange} />
                </div>

              <div style={{ marginTop: '10px', width: '30%' }} >
                {data.map(i => (
                    <Radio 
                        style={{ color: '#888', fontSize: '12px', paddingLeft: '16px' }} 
                        className="my-radio" key={i.value} 
                        checked={value === i.value} 
                        onChange={() => this.onChangeDiscount(i.value)}>
                        {i.label}
                    </Radio>
                ))}
              </div>
            </div>
            
            <p style={{  margin: '0px', marginLeft: '10px', paddingTop: '5px', color: '#888' }}>Payment Status</p>

            {/* <Payment Status /> */}
            <div style={{ display: 'flex', alignItems: 'stretch' }}>
              <div style={{ marginLeft: '10px', marginTop: '13px' }} >
                {data1.map(i => (
                    <Radio 
                        style={{ color: '#888', marginRight: '50px' }} 
                        className="my-radio" key={i.value} 
                        checked={value1 === i.value}
                        onChange={() => this.onChangePaymentStat(i.value)}>
                        {i.label}
                    </Radio>
                ))}
              </div>

              <div style={{ flexGrow: 5,  display: (value1 === 1) ? 'block' : 'none' }}>
                <Picker 
                    data={pay} 
                    cols={1} 
                    className="forss" 
                    okText="OK" 
                    dismissText="CANCEL"
                    onChange={this.onChangePayment} 
                    value={this.state.payValue}
              >
                <List.Item arrow="down">{''}</List.Item>
              </Picker>
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
