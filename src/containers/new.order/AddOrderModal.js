import React, { useState } from 'react'
import { Icon } from 'antd-mobile';
import { NavigationBar, DoneButton, EditModal, EditProductList, 
    EditProductListItems, CounterDiv } from "./../common/orderComponents";

const Counter = ({ quantity }) => {
    const [count, setCount] = useState(quantity);

    const increment = () => {setCount(prevState => prevState + 1)};
    const decrement = () => {
        if (count !== 0) {
            setCount(prevState => prevState - 1);
        } else {
            return null;
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

const AddOrderModal = ({ visible, closeModal, orders, onEdit }) => {
    const newOrders = [...orders];
    const [removed, setRemoved] = useState([]);

    const handleDelete = index => {
        const removedItem = newOrders.splice(index, 1);
        setRemoved(removed => removed.concat(removedItem));
        onEdit(newOrders);
    };

    const handleBack = () => {
        closeModal();
        onEdit(newOrders.concat(removed));
        setRemoved([]);
    };

    return (
        <div>
            <EditModal
                visible={visible}
                maskClosable={false}
                onClose={closeModal}
                title={
                    <NavigationBar 
                        icon={<Icon type="left" />}
                        leftContent="Back"
                        onLeftClick={() => handleBack()}
                        rightContent={[
                            <DoneButton 
                                onClick={() => closeModal()} 
                                type="submit" 
                                value="Save">
                            </DoneButton>]}
                    > {"Order #001"}
                    </NavigationBar>}
            >
                <EditProductList>
                    {orders.map((order, index) => (                        
                        <EditProductListItems key={index} index={index}>
                            <p className="product-name">{order.name}</p>
                            <Counter quantity={order.quantity}/>
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

export default AddOrderModal
