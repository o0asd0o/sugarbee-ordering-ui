import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import NewOrder from './components/NewOrder';
import { Drawer, List, SearchBar } from 'antd-mobile';
import Footer from './components/Footer'
import PickupInput from './components/PickupInput';
import './App.css';

class App extends Component {
    state = {
        docked: false,
    }

    onDock = (dock) => {
        this.setState({
            [dock]: !this.state[dock],
        });
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
                    
                    <Footer />
                </Drawer>
                </React.Fragment>
            )} />
            <Route path="/neworder" component={NewOrder} />
            <Route path="/pickup" component={PickupInput} />
        </div>
      </Router>
    )
  }
}

export default App
