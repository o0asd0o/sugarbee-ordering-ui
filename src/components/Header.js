import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Calendar } from 'antd';
import moment from 'moment';

class Header extends Component {

    state = {
        value: moment('12-17-2019'),
        selectedValue: moment('12-17-2019'),
        clicked: false
    };

    onPanelChange = (value) => {
        this.setState({ value });
    }

    onSelect = (value) => {
        this.setState({
            value,
            selectedValue: value,
        });
        console.log(this.state.selectedValue)
    }

    onClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }   

    render() {
        const { value, selectedValue } = this.state;
        const btnCal = {
        border:'none',
        background: 'none'
        }
        return (
        <div style={{ height: '100%' }}>
            <NavBar 
            rightContent={ <button style={btnCal} onClick={this.onClick}>{`${selectedValue && selectedValue.format('MM-DD-YYYY')}`}</button> }
            style={{ background: '#F1C40F' }}
            icon={<Icon type="ellipsis" />} 
            onLeftClick={() => this.props.onDock('docked')}>
            </NavBar>
            <div style={{ width: '100%', display: this.state.clicked ? 'block' : 'none' }}>
                <Calendar fullscreen={false} onPanelChange={this.onPanelChange} value={value} onSelect={this.onSelect} />
            </div>
        </div>);
    }
}

export default Header
