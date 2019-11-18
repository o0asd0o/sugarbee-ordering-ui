import React, { Component } from 'react'
import { Drawer, NavBar, Icon, List, SearchBar } from 'antd-mobile';
import Footer from './Footer'
// import Calendarr from './Calendarr';

class Header extends Component {
  state = {
    docked: false,
  }
  onDock = (d) => {
    this.setState({
      [d]: !this.state[d],
    });
  }
  render() {
    const sidebar = (
        <List style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50%' }}>
          <img 
                src={require('../logo.jpg')} 
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

    return (<div style={{ height: '100%' }}>
      <NavBar 
        style={{ background: '#F1C40F' }}
        // rightContent={( <Calendarr /> )}
        icon={<Icon type="ellipsis" />} 
        onLeftClick={() => this.onDock('docked')}>
        
      </NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center'}}
        sidebarStyle={{ border: '1px solid #ddd' }}
        sidebar={sidebar}
        docked={this.state.docked}
      >
        <SearchBar cancelText="Cancel" placeholder="Search"  />
        <Footer />
      </Drawer>
    </div>);
  }
}

export default Header
