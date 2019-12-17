import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import NewOrder from './components/NewOrder';
import { Drawer, List, SearchBar, WingBlank, SegmentedControl } from 'antd-mobile';
import ItemView from './containers/ItemView'
import OrderView from './containers/OrderView'
import './App.css';

class App extends Component {
    state = {
        docked: false,
        value: true,
        orders: [
            {
                id: 1,
                customerName: "Em Buenaventura",
                contactNum: "09663601467",
                email: "em@gmail.com",
                fb: "Em Buenaventura",
                ig: "embuenaventura",
                date: "2019-12-06",
                deadline: "2019-12-06",
                pickupLoc: "Magallanes",
                delMethod: "Lalamove",
                delAddress: "11 Pureza St.",
                orderName: "Small Tubs Sans Chips",
                discount: "percent",
                paymentStat: "paid",
                request: "note card",
                specialOffer: "free cake",
                quantity: 25
            },
            {
                id: 2,
                customerName: "Dex Mel",
                contactNum: "09663601467",
                email: "em@gmail.com",
                fb: "Em Buenaventura",
                ig: "embuenaventura",
                date: "2019-12-06",
                deadline: "2019-12-06",
                pickupLoc: "Magallanes",
                delMethod: "Lalamove",
                delAddress: "11 Pureza St.",
                orderName: "Salted Caramel Cake",
                discount: "percent",
                paymentStat: "paid",
                request: "note card",
                specialOffer: "free cake",
                quantity: 1
            },
            {
                id: 3,
                customerName: "Dex Mel",
                contactNum: "09663601467",
                email: "em@gmail.com",
                fb: "Em Buenaventura",
                ig: "embuenaventura",
                date: "2019-12-06",
                deadline: "2019-12-06",
                pickupLoc: "Magallanes",
                delMethod: "Lalamove",
                delAddress: "11 Pureza St.",
                orderName: "Sansrival Chips",
                discount: "percent",
                paymentStat: "paid",
                request: "note card",
                specialOffer: "free cake",
                quantity: 40
            }
        ]
    }

    onDock = (dock) => {
        this.setState({
            [dock]: !this.state[dock],
        });
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
    
  render() {
    const sidebar = (
        <List style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50%' }}>
            <img 
                src={require('./logo.jpg')} 
                alt="logo"
                style={{
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px'
                }} 
            />
            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>SUGARBEE</p>
            <p style={{ textAlign: 'center', color: 'red' }}>Logout</p>
        </List>
    );

    return (
      <Router>
        <div>
            <Route exact path="/" render={props => (
                <React.Fragment>
                <Header onDock={this.onDock} />
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: '595px' }}
                    contentStyle={{ color: '#A6A6A6' }}
                    sidebarStyle={{ border: '1px solid #ddd' }}
                    sidebar={sidebar}
                    docked={this.state.docked}
                >
                    <SearchBar cancelText="Cancel" placeholder="Search"  />

                    {/* Footer */}
                    <div>
                        {this.state.value ?
                            <div style={{ height: '500px', overflow: 'auto', marginBottom: '40px' }}> 
                                <ItemView orders={this.state.orders} />
                            </div> :
                            <div style={{ height: '500px', overflow: 'auto', marginBottom: '40px' }}>
                                <OrderView orders={this.state.orders} />
                            </div>}
                    </div>
                    <WingBlank size="lg" className="sc-example">
                        <SegmentedControl
                            values={['Item View', 'Order View']} 
                            onChange={this.onChange}
                            onValueChange={this.onValueChange}
                            tintColor= '#F1C40F'
                            style={{ height: '40px', backgroundColor: 'white' }}
                        />
                        <p className="floatB"><Link style={{ color: 'white' }} to="/neworder"><i className="fa fa-plus my-float"></i></Link></p>
                    </WingBlank>
                    {/* Footer */}
                    
                </Drawer>
                </React.Fragment>
            )} />
            <Route path="/neworder" component={NewOrder} />
        </div>
      </Router>
    )
  }
}

export default App
