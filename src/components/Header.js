import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';


class Header extends Component {
  
  render() {
    return (<div style={{ height: '100%' }}>
      <NavBar 
        style={{ background: '#F1C40F' }}
        icon={<Icon type="ellipsis" />} 
        onLeftClick={() => this.props.onDock('docked')}>
      </NavBar>
    </div>);
  }
}

export default Header
