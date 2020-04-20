import React, { useState } from 'react';
import { Select } from "antd";
import { Container, OrderListContainer, OrderList, OrderName, OrderQuantity, DeleteButton, OrderForm, InputQuantity, OrderDropdown, AddButton } from "./components";


const { Option } = Select;

const AddOrder = () => {
  const [orderQuantity, setorderQuantity] = useState('');
  const [orderValue, setorderValue] = useState('');
  const [orders, setOrder] = useState([])

  const handleChange = e => {
    setorderQuantity(e.target.value);
  }

  const handleSelectChange = value => {
    setorderValue(value);
  }

  const handleSubmit = e => {
    e.preventDefault();    
    const order = {
      quantity: orderQuantity,
      name: orderValue
    }
    
    if(!orderQuantity) return;
    setOrder([...orders, order]);
    document.getElementById('orderQuantity').value = '';
    document.getElementById('orderValue').value = ''
  }

  const handleDelete = e => {
    const { id } = e.target.parentElement;
    orders.splice(id, 1)
    setOrder([...orders]);
  }

  return (
    <Container>
      <OrderListContainer>
        {
          orders && orders.map((order, i) => (
            <OrderList key={order.quantity} id={i}>
              <OrderName>{order.name}</OrderName>
              <OrderQuantity>{order.quantity}</OrderQuantity>
              <DeleteButton className="delete-order" onClick={handleDelete} >-</DeleteButton>              
            </OrderList>
          ))
        }
      </OrderListContainer>

      <OrderForm onSubmit={handleSubmit}>
        <OrderDropdown
            id="orderValue"
            showSearch
            style={{ marginRight: '5px', width: '50%'  }}
            placeholder="Pick your order"
            optionFilterProp="children"
            onChange={handleSelectChange}
            filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            <Option value="Cookie">Cookie</Option>
            <Option value="Cupcake">Cupcake</Option>
            <Option value="Salted Caramel Cake">Salted Caramel Cake</Option>
            <Option value="Sansrival Chips">Sansrival Chips</Option>
        </OrderDropdown>
        <InputQuantity type="number" id="orderQuantity" onChange={handleChange}/>
        <AddButton type="submit">Add #{orders.length + 1}</AddButton>
      </OrderForm>
    </Container>
  )
}

export default AddOrder;