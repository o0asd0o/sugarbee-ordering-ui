import React, { Component } from 'react'
import { List, Modal } from 'antd-mobile'

const Item = List.Item;

class OrderView extends Component {

    state = {
        modal1: false
    }

    showModal = key => (e) => {
        e.preventDefault(); 
        this.setState({
            [key]: true
        });
    }
      onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    render() {
        
        return this.props.orders.map((order) => (
            <div key={order.id}>
                <Item  onClick={(this.showModal('modal1'))} style={{ background: (order.id%2) ? '#FCF3CF' : 'none' }}>
                <p className="pName">{order.customerName}</p>
                <p className="pNum">{order.contactNum}</p>
                <p className="pOrder">{order.orderName}</p>
                <p className="pOrder">{order.quantity}</p>
                </Item>

                <Modal
                visible={this.state.modal1}
                maskClosable={false}
                transparent={true}
                onClose={this.onClose('modal1')}
                title="Order Summary"
                footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
                wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                // afterClose={() => { alert('Order Preview'); }}
                >
                <div >
                    <table>
                        <tbody>
                            <tr>
                                <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Customer Name</td>
                                <td>{order.customerName}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Contact No.</td>
                                <td>{order.contactNum}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Email</td>
                                <td>{order.email}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Facebook</td>
                                <td>{order.fb}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Instagram</td>
                                <td>{order.ig}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Date Ordered</td>
                                <td>{order.date}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Deadline</td>
                                <td>{order.deadline}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Pickup Location</td>
                                <td>{order.pickupLoc}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Delivery Method</td>
                                <td>{order.delMethod}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Delivery Address</td>
                                <td>{order.delAddress}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Order Name</td>
                                <td>{order.orderName}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Quantity</td>
                                <td>{order.quantity}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Discount</td>
                                <td>{order.discount}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Payment Status</td>
                                <td>{order.paymentStat}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Request</td>
                                <td>{order.request}</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: 'bold', textAlign: 'left' }}>Special Offer</td>
                                <td>{order.specialOffer}</td>
                            </tr>

                        </tbody>
                    </table>
                    
                </div>
                </Modal>
            </div>
        ));
    }
}

export default OrderView
