import React, { useState } from 'react'
import { Icon } from 'antd-mobile';
import { NavigationBar, DoneButton, EditModal, EditProductList,
    EditProductListItems, CounterDiv } from "./../common/orderComponents";

const Counter = ({ quantity, onChangeQuantity }) => {
    const [count, setCount] = useState(quantity);

    const increment = () => {
        const currentCount = count + 1;
        setCount(currentCount)
        onChangeQuantity(currentCount)
    };
    const decrement = () => {
        if (count !== 1) {
            const currentCount = count - 1;
            setCount(currentCount);
            onChangeQuantity(currentCount)
        }
    };

    return (
        <CounterDiv>
            <button className="decrementButton" onClick={decrement}>-</button>
            <p className="count">{count}</p>
            <button className="incrementButton" onClick={increment}>+</button>
        </CounterDiv>
    )
};

const EditOrderModal = ({ visible, closeModal, orders, onEditOrders }) => {
    const newOrders = [...orders];
    const [removed, setRemoved] = useState([]);

    const handleDelete = index => {
        const removedItem = newOrders.splice(index, 1);
        setRemoved(removed => removed.concat(removedItem));
        onEditOrders(newOrders);
    };

    const handleBack = () => {
        closeModal();
        onEditOrders(newOrders.concat(removed));
        setRemoved([]);
    };

    const handleChangeQuantity = (quantity, index) => {
        // get the specific order using "index"
        const item = newOrders.find((order, orderIndex) => index === orderIndex);
        // set the value of that specific order using a separate variable.
        item.quantity = quantity;
        newOrders[index] = item;
        // finally, set the values of orders using "setValues" hook
        onEditOrders(newOrders);
    };

    const navBar = (
        <NavigationBar
            icon={<Icon type="left" />}
            leftContent="Back"
            onLeftClick={() => handleBack()}
            rightContent={[
                <DoneButton
                    key="done-button"
                    onClick={() => closeModal()}
                    type="submit"
                    value="Save" />
                ]}>
            {"Order #001"}
        </NavigationBar>
    );
    return (
        <div>
            <EditModal
              visible={visible}
              maskClosable={false}
              onClose={closeModal}
              title={navBar}>
                <EditProductList>
                    {orders.map((order, index) => (
                        <EditProductListItems key={index} index={index}>
                            <p className="product-name">{order.name}</p>
                            <Counter quantity={order.quantity} onChangeQuantity={(quantity) => handleChangeQuantity(quantity, index)}/>
                            <button className="delete-button" onClick={() => handleDelete(index)}>
                                <Icon type="cross-circle-o" />
                            </button>
                        </EditProductListItems>
                    ))}
                </EditProductList>
            </EditModal>
        </div>
    )
}

export default EditOrderModal
