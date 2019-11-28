import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import Calendarr from './Calendarr';


class Header extends Component {
  render() {
    return (<div style={{ height: '100%' }}>
      <NavBar 
        rightContent={ <Calendarr /> }
        style={{ background: '#F1C40F' }}
        icon={<Icon type="ellipsis" />} 
        onLeftClick={() => this.props.onDock('docked')}>
          
      </NavBar>
    </div>);
  }
}

export default Header
