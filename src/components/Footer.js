import React, { Component } from 'react'
import { SegmentedControl, WingBlank, Button } from 'antd-mobile';
import ItemView from './ItemView'
import OrderView from './OrderView'
import { Link } from 'react-router-dom'

class Footer extends Component {

    state = {
        value: true
    }

  onChange = (e) => {
    // console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
    if (e.nativeEvent.selectedSegmentIndex === 0) {
        console.log('Item View')
        this.setState({
            value: true
        });
    }
    if (e.nativeEvent.selectedSegmentIndex === 1)  {
        console.log('Order View')
        this.setState({
            value: false
        });
    }
  }
  onValueChange = (value) => {
    console.log(value);
  }
  render() {
    return (
        <div>
            <div>{this.state.value ? <ItemView /> : <OrderView />}</div>
            <WingBlank size="lg" className="sc-example">
                <SegmentedControl
                    values={['Item View', 'Order View']} 
                    onChange={this.onChange}
                    onValueChange={this.onValueChange}
                    tintColor= '#F1C40F'
                />
                <Button size="small" style={{ background: '#F1C40F', color: 'white'}}>
                    <Link style={{ color: 'white' }} to="/neworder">Add an order</Link>
                </Button>
            </WingBlank>
        </div>
    );
  }
}

export default Footer