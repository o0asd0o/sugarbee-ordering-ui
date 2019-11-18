import React, { Component } from 'react'
import { SegmentedControl, WingBlank } from 'antd-mobile';
import ItemView from './ItemView'
import OrderView from './OrderView'

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
            <p>{this.state.value ? <ItemView /> : <OrderView />}</p>
            <WingBlank size="lg" className="sc-example">
                <SegmentedControl
                    values={['Item View', 'Order View']} 
                    onChange={this.onChange}
                    onValueChange={this.onValueChange}
                    tintColor= '#F1C40F'
                />
            </WingBlank>
        </div>
    );
  }
}

export default Footer