import React, { useState } from "react";
import { InputItem, Icon, DatePicker, List, Picker } from "antd-mobile";
import { connect } from "react-redux";
import enUs from "antd-mobile/lib/date-picker/locale/en_US";
import { Container, NavigationBar, NavLink, LayoutContainer, Label, LabelPicker, RadioContainer,
    RadioList, PaymentOptionCont, DiscountAmount, DoneButton } from "../common/orderComponents";

import { deliveryMethods, storeLocations, paymentOptions, paymentStatusData, discountData } from "../../utils/values.dropdown";

const OrderListView = (props) => {
    const [editing, setEditing] = useState(false);
    return (
        <Container>
            <NavigationBar icon={<Icon type="left" />}
                leftContent={[<NavLink to="/ordering">Back</NavLink>]}
                rightContent={[<DoneButton type="submit" value="Edit" onClick={() => setEditing(!editing)} />]}>
                    Order #{props.id}
            </NavigationBar>
            <LayoutContainer>
                <InputItem name="customerName"
                    editable={editing}
                    placeholder="e.g. Juan Dela Cruz"
                    value={props.customerName}
                    children="Name:" />

                <InputItem name="phoneNumber"
                    editable={editing}
                    type="number"
                    value={props.phone}
                    children="Contact #:" />

                <InputItem name="email"
                    editable={editing}
                    value={props.email}
                    type="email"
                    children="Email:" />

                <InputItem name="facebook"
                    editable={editing}
                    value={props.facebook}
                    children="Facebook:" />

                <InputItem name="instagram"
                    editable={editing}
                    value={props.instagram}
                    children="Instagram:" />

                <InputItem name="deliveryAddress"
                    editable={editing}
                    value={props.deliveryAddress}
                    children="Address:" />

                <InputItem name="request"
                    editable={editing}
                    value={props.request}
                    children="Request:" />

                <InputItem name="specialOffer"
                    editable={editing}
                    value={props.specialOffer}
                    children="Special Offer:" />

                <DatePicker name="dateOrdered"
                    disabled={!editing}
                    mode="date"
                    title="Select Date"
                    extra="Optional"
                    locale={enUs}
                    value={props.dateOrdered}>
                        <List.Item arrow="horizontal">
                            <LabelPicker>Date Ordered</LabelPicker>
                        </List.Item>
                </DatePicker>

                <DatePicker name="pickupDate"
                    disabled={!editing}
                    mode="date"
                    title="Select Date"
                    extra="Optional"
                    locale={enUs}
                    value={props.pickupDate}>
                        <List.Item arrow="horizontal">
                            <LabelPicker>Pickup Date</LabelPicker>
                        </List.Item>
                </DatePicker>

                <Picker name="deliveryMethod"
                    disabled={!editing}
                    data={deliveryMethods}
                    cols={1}
                    className="forss"
                    locale={enUs}
                    okText="OK"
                    dismissText="CANCEL"
                    value={props.deliveryMethod}>
                        <List.Item arrow="horizontal">
                            <LabelPicker>Delivery Method</LabelPicker>
                        </List.Item>
                </Picker>

                <Picker name="pickupLocation"
                    disabled={!editing}
                    data={storeLocations}
                    cols={1}
                    className="forss"
                    locale={enUs}
                    okText="OK"
                    dismissText="CANCEL"
                    value={props.pickupLocation}>
                        <List.Item arrow="horizontal">
                            <LabelPicker>Pickup Location</LabelPicker>
                        </List.Item>
                </Picker>

                <Label>Payment Status</Label>
                <RadioContainer>
                    {paymentStatusData.map(i => (
                        <RadioList
                            name="paymentStatus"
                            disabled={!editing}
                            key={i.value}
                            checked={props.paymentStatus === i.value} >
                                {i.label}
                        </RadioList>
                    ))}

                    <PaymentOptionCont style={{ display: (props.paymentStatus === 1) ? "inline-block" : "none" }}>
                        <Picker name="paymentOption"
                            disabled={!editing}
                            data={paymentOptions}
                            cols={1}
                            className="forss"
                            locale={enUs}
                            okText="OK"
                            dismissText="CANCEL"
                            value={props.paymentOption}>
                                <List.Item arrow="horizontal"></List.Item>
                        </Picker>
                    </PaymentOptionCont>
                </RadioContainer>

                <Label>Discount</Label>
                <RadioContainer>
                    {discountData.map(i => (
                        <RadioList
                            name="discountType"
                            disabled={!editing}
                            key={i.value}
                            checked={props.discountType === i.value}>
                                {i.label}
                        </RadioList>
                    ))}

                    <DiscountAmount name="discountAmount"
                        editable={editing}
                        value={props.discountAmount} />
                </RadioContainer>
            </LayoutContainer>
        </Container>
    )
};

// TODO: Integrate redux for edit order details. should display the clicked order from "Order View" - item based.

const mapStateToProps = (state) => {
    const { currentEditIndex, orders } =  state.orders;
    const fields = orders[currentEditIndex];
    return { ...fields };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderListView);
