import React, { Component } from 'react'
import { Select, InputNumber  } from 'antd';
import { Button } from 'antd-mobile';
import 'antd/dist/antd.css';

const { Option } = Select;

class AddOrderNew extends Component {

    onChange = (value) => {
        console.log(`selected ${value}`);
    };
    
    // onBlur = () => {
    //     console.log('blur');
    // };
    
    // onFocus = () => {
    //     console.log('focus');
    // };
    
    onSearch = (val) => {
        console.log('search:', val);
    };
    
    render() {
        const flexCont = {
            margin: '0 15px',
            display: 'flex', 
            alignItems: 'stretch', 
            marginTop: '10px', 
            marginBottom: '5px'
        }
        const flexCont1 = {
            margin: '0 15px',
            display: 'flex', 
            alignItems: 'stretch',
            marginBottom: '5px'
        }
        return (
            <div>
                <div style={flexCont}>
                    <div style={{ width: '83%', fontWeight: 'bold' }}>Salted Caramel Cake</div>
                    <div style={{ fontWeight: 'bold' }}>3</div>
                </div>
                <div style={flexCont1}>
                    <div style={{ width: '83%', fontWeight: 'bold' }}>Sansrival Chips</div>
                    <div style={{ fontWeight: 'bold' }}>20</div>
                </div>
                
            
                <div style={{ display: 'flex', marginLeft: '15px', color: '#888', marginTop: '10px' }}>                
                    <Select
                        showSearch
                        style={{ width: "50%", marginRight: '5px' }}
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
                        
                        <Option value="Cookie">Cookie</Option>
                        <Option value="Cupcake">Cupcake</Option>
                        <Option value="Cupcake">Salted Caramel Cake</Option>
                        <Option value="Cake">Sansrival Chips</Option>
                    </Select>
                    <InputNumber min={1} max={50} defaultValue={1} style={{ marginRight: '5px' }} />
                    <Button 
                        inline 
                        size="small"
                        style={{ backgroundColor: '#F1C40F', color: 'white' }}
                        activeStyle={{ backgroundColor:'#F9E79F' }}
                    >ADD
                    </Button>
            
                </div>
            </div>
            
        )
    }
}

export default AddOrderNew