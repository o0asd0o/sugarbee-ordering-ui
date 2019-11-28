import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;


class AddOrderNew extends Component {

    onChange = (value) => {
        console.log(`selected ${value}`);
    };
    
    onBlur = () => {
        console.log('blur');
    };
    
    onFocus = () => {
        console.log('focus');
    };
    
    onSearch = (val) => {
        console.log('search:', val);
    };
    
    render() {
        return (
            <div style={{ display: 'flex', marginLeft: '15px', color: '#888' }}>
                <p style={{ marginRight: '47%' }}>Order</p>
                <Select
                    showSearch
                    style={{ width: "40%", borderStyle: 'none !important' }}
                    placeholder="Pick your order"
                    optionFilterProp="children"
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onSearch={this.onSearch}
                    filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="Cake">Cake</Option>
                    <Option value="Cookie">Cookie</Option>
                    <Option value="Cupcake">Cupcake</Option>
                </Select>
           
            </div>
            
        )
    }
}

export default AddOrderNew