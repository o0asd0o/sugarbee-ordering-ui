import React from "react";
import { InputItem, Icon, DatePicker, List, Picker } from "antd-mobile";
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';
import { Container, NavigationBar, NavLink, LayoutContainer, Label, LabelPicker, RadioContainer, RadioList, PaymentOptionCont, DiscountAmount, DoneButton } from "../../containers/new.order/components";
import { deliveryMethods, storeLocations, paymentOptions, paymentStatusData, discountData } from "../../utils/values.dropdown";

const OrderListView = (props) => {
    return (
        <React.Fragment>
            {(
                <Container>
                    <NavigationBar icon={<Icon type="left" />}
                    leftContent={[<NavLink to="/ordering">Back</NavLink>]}
                    rightContent={[
                        <NavLink to="/ordering">
                            <DoneButton type="submit" value="Edit"></DoneButton>
                        </NavLink>]}>
                        Order #{props.id}
                    </NavigationBar>
                        <LayoutContainer>
                            <InputItem name="customerName"
                                editable={false}
                                value={props.customerName}
                                children="Name:" />

                            <InputItem name="phoneNumber"
                                editable={false}
                                type="number"
                                value={props.phone}
                                children="Contact #:" />

                            <InputItem name="email"
                                editable={false}
                                value={props.email}
                                type="email"
                                children="Email:" />

                            <InputItem name="facebook"
                                editable={false}
                                value={props.facebook}
                                children="Facebook:" />

                            <InputItem name="instagram"
                                editable={false}
                                value={props.instagram}
                                children="Instagram:" />

                            <InputItem name="deliveryAddress"
                                editable={false}
                                value={props.deliveryAddress}
                                children="Address:" />

                            <InputItem name="request"
                                editable={false}
                                value={props.request}
                                children="Request:" />

                            <InputItem name="specialOffer"
                                editable={false}
                                value={props.specialOffer}
                                children="Special Offer:" />
                            
                            {/* <Label>Order:</Label>
                            <AddOrder name="order" /> */}

                            <DatePicker name="dateOrdered"
                                disabled={true}
                                mode="date"
                                title="Select Date"
                                extra="Optional"
                                locale={enUs}
                                value={props.dateOrdered}
                            >
                                <List.Item arrow="horizontal">
                                <LabelPicker>Date Ordered</LabelPicker>
                                </List.Item>
                            </DatePicker>

                            <DatePicker name="pickupDate"
                                disabled={true}
                                mode="date"
                                title="Select Date"
                                extra="Optional"
                                locale={enUs}
                                value={props.pickupDate}
                            >
                                <List.Item arrow="horizontal">
                                <LabelPicker>Pickup Date</LabelPicker>
                                </List.Item>
                            </DatePicker>

                            <Picker name="deliveryMethod"
                                disabled={true}
                                data={deliveryMethods} 
                                cols={1} 
                                className="forss"
                                locale={enUs}
                                okText="OK" 
                                dismissText="CANCEL"
                                value={props.deliveryMethod}
                            >
                                <List.Item arrow="horizontal">
                                <LabelPicker>Delivery Method</LabelPicker>
                                </List.Item>
                            </Picker>

                            <Picker name="pickupLocation"
                                disabled={true}
                                data={storeLocations} 
                                cols={1} 
                                className="forss"
                                locale={enUs}
                                okText="OK" 
                                dismissText="CANCEL"
                                value={props.pickupLocation}                                        
                            >
                                <List.Item arrow="horizontal">
                                <LabelPicker>Pickup Location</LabelPicker>
                                </List.Item>
                            </Picker>

                            <Label>Payment Status</Label>
                            <RadioContainer>
                                {paymentStatusData.map(i => (
                                    <RadioList
                                        name="paymentStatus"
                                        disabled={true}
                                        key={i.value} 
                                        checked={props.paymentStatus === i.value} >
                                        {i.label}
                                    </RadioList>
                                ))}

                                <PaymentOptionCont style={{ display: (props.paymentStatus === 1) ? 'inline-block' : 'none' }}>
                                    <Picker name="paymentOption"
                                        disabled={true}
                                        data={paymentOptions} 
                                        cols={1} 
                                        className="forss"
                                        locale={enUs}
                                        okText="OK" 
                                        dismissText="CANCEL"
                                        value={props.paymentOption}                                                
                                    >
                                        <List.Item arrow="horizontal"></List.Item>
                                    </Picker>
                                </PaymentOptionCont>
                            </RadioContainer>

                            <Label>Discount</Label> 
                            <RadioContainer>
                                {discountData.map(i => (
                                    <RadioList
                                        name="discountType"
                                        disabled={true}
                                        key={i.value} 
                                        checked={props.discountType === i.value}>
                                        {i.label}
                                    </RadioList>
                                ))}

                                <DiscountAmount name="discountAmount"
                                    editable={false}
                                    value={props.discountAmount} />
                            </RadioContainer>
                        </LayoutContainer>
                </Container>
    
            )}
        </React.Fragment>
    )
};

export default OrderListView;