import React, { useState } from "react";
import { Button } from "antd-mobile";
import { Select, InputNumber } from "antd";
import { products } from "../../utils/values.products";
import { ProductContainer, ProductList, AddProductDiv, SubmitContainer } from "./../common/orderComponents";

const InputProduct = ({ productOptions, orders, onAddProduct}) => {
    const [selectedItem, setSelectedItem] = useState("Apple_Crumble");
    const [itemQuantity, setItemQuantity] = useState(1);

    const renderTotalComponent = (total) => (
        <div className="product-total" key={"total"}>
            <p className="total-label">Total</p>
            <p className="total">{total}</p>
        </div>
    );

    const ProductListItems = ({ orders }) => {
        const component = orders.length > 0 ? orders.map((order) => (
            <div className="product-item" key={order.name}>
                <p className="name">{order.quantity} x {order.name}</p>
                <p className="price">{order.price * (order.quantity || 1)}</p>
            </div>
        )) : null;

        if (component) {
            const total = orders.reduce((accu, order) => {
                return accu + order.price * (order.quantity || 1);
            }, 0);
            component.push(renderTotalComponent(total));
        }
        return component;
    };

    const actualProductsFromMapping = [];
    products.forEach((product) => {
        product.items.forEach((item) => {
            actualProductsFromMapping.push({
                value: item.name.replace(/ /g,"_"),
                name: item.name,
                price: item.price,
            })
        })
    })

    const selectedItemFields = actualProductsFromMapping.find((product) => product.value === selectedItem);
    const itemObjectCopy = {
        value: selectedItemFields.value,
        name: selectedItemFields.name,
        price: selectedItemFields.price,
        quantity: itemQuantity,
    };

    const onAddProductToOrders = () => {
        onAddProduct(itemObjectCopy);
        setSelectedItem("Apple_Crumble");
        setItemQuantity(1);
    };

    return (
        <ProductContainer>
            <div className="header">
                <p>Orders</p>
                <Button type="ghost" size="small" onClick={() => {/* TODO: MODAL */}} inline>Edit</Button>
            </div>

            <ProductList>
                <ProductListItems orders={orders} />
            </ProductList>

            <AddProductDiv>
                <Select className="product-dropdown" value={selectedItem} onChange={(value) => setSelectedItem(value)}>
                    {productOptions}
                </Select>
                <InputNumber className="product-quantity" min={1} value={itemQuantity} onChange={(value) => setItemQuantity(value)}/>
            </AddProductDiv>

            <SubmitContainer>
                <Button type="primary" size="small" onClick={onAddProductToOrders} inline>Add</Button>
            </SubmitContainer>
        </ProductContainer>
    );
};

export default InputProduct;
