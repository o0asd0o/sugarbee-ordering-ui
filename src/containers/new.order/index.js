import React from "react"
import { useState } from 'react';
import { InputItem, Modal, Icon, DatePicker, List, Picker } from "antd-mobile";
import { Formik } from "formik";
import AddOrder from "./addorder"
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

import { Container, NavigationBar, NavLink, LayoutContainer, Label, LabelPicker, RadioContainer, RadioList, PaymentOptionCont, DiscountAmount, DoneButton } from "./components";
import { deliveryMethods, storeLocations, paymentOptions, paymentStatusData, discountData } from "../../utils/values.dropdown";

// TODO/NOTICE: NOT YET DONE WITH ALL THE FIELDS...

// use the FF:

// const Item = List.Item;
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

const notification = Modal.alert;
const showErrorNotification = ({ message, description }) => {
    notification(message, description, [{ text: "OK" }]);
};

const NewOrder = ({ history }) => {
    const initialValues = {
        /* TODO: Assign initial values */
        customerName: '',
        phoneNumber: '',
        email: '',
        facebook: '',
        instagram: '',
        deliveryAddress: '',
        request: '',
        specialOffer: '',
        order: '',
        date: now,
        deliveryMethod: 'Lalamove',
        pickupLocation: 'Magallanes',
        paymentStatus: 'Unpaid',
        paymentOption: 'bdo',
        discountType: 'Percent',
        discountAmount: ''
    };
    const [date, setDate] = useState(now)
    const handleDate = date => {
        console.log(date);
        setDate(date);
    }
    const [deliveryMethod, setDeliveryMethod] = useState('')
    const handleDeliveryMethod = deliveryMethod => {
        console.log(deliveryMethod);
        setDeliveryMethod(deliveryMethod);
    }
    const [pickupLocation, setPickupLocation] = useState('')
    const handlePickupLocation = pickupLocation => {
        setPickupLocation(pickupLocation);
    }
    const [paymentStatus, setpaymentStatus] = useState(0)
    const [paymentOption, setpaymentOption] = useState('')
    const handlepaymentOption = paymentOption => {
        setpaymentOption(paymentOption);
    }
    const [discount, setDiscount] = useState(0)
    const showPicker = {
        display: (paymentStatus === 1) ? 'inline-block' : 'none'
    }

    const handleSubmit = async (values, actions) => {
        actions.setSubmitting(true);
        try {
            const response =  null; //TODO: Should request "Insert Order to DB" - POST.
            if (response) {
                const { data } = response;
                if (data.result === "SUCCESS") {
                    setTimeout(() => history.push("/ordering"), 300);
                }
            };
        } catch(e) {
            showErrorNotification({
                message: "Oops",
                description: "There seems a problem processing your request.",
            })
        }
    };
    return (
        <Container>
            <NavigationBar icon={<Icon type="left" />}
              leftContent={[<NavLink to="/ordering">Back</NavLink>]}
              rightContent={[
                <NavLink to="/ordering">
                    <DoneButton type="submit" value="Done"></DoneButton>
                </NavLink>]}> {/*this should be a submit button*/}
                {"Order #001"}
            </NavigationBar>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <LayoutContainer>
                            <InputItem name="customerName"
                                value={props.values.customerName}
                                placeholder="e.g. Juan Dela Cruz"
                                onChange={props.handleChange("customerName")}
                                children="Name:" />

                            <InputItem name="phoneNumber"
                                type="number"
                                placeholder="09XX XXX XXXX"
                                onChange={props.handleChange("phoneNumber")}
                                children="Contact #:" />

                            <InputItem name="email"
                                type="email"
                                placeholder="e.g. juandelacruz@thecompany.ph"
                                onChange={props.handleChange("email")}
                                children="Email:" />

                            <InputItem name="facebook"
                                placeholder="e.g. https://fb.com/juandelacruz"
                                onChange={props.handleChange("facebook")}
                                children="Facebook:" />

                            <InputItem name="instagram"
                                placeholder="e.g. _juandelacruz"
                                onChange={props.handleChange("instagram")}
                                children="Instagram:" />

                            <InputItem name="deliveryAddress"
                                value={props.values.deliveryAddress}
                                placeholder="e.g. 8757 Paseo de Roxas"
                                onChange={props.handleChange("deliveryAddress")}
                                children="Address:" />

                            <InputItem name="request"
                                value={props.values.request}
                                placeholder="e.g. Happy Birthday Note"
                                onChange={props.handleChange("request")}
                                children="Request:" />

                            <InputItem name="specialOffer"
                                value={props.values.specialOffer}
                                placeholder="e.g. Free brownies"
                                onChange={props.handleChange("specialOffer")}
                                children="Special Offer:" />
                            
                            <Label>Order:</Label>
                            <AddOrder name="order" />

                            <DatePicker name="dateOrdered"
                                mode="date"
                                title="Select Date"
                                extra="Optional"
                                locale={enUs}
                                value={date}
                                onChange={handleDate}
                            >
                                <List.Item arrow="horizontal">
                                <LabelPicker>Date Ordered</LabelPicker>
                                </List.Item>
                            </DatePicker>

                            <DatePicker name="pickupDate"
                                mode="date"
                                title="Select Date"
                                extra="Optional"
                                locale={enUs}
                                value={date}
                                onChange={handleDate}
                            >
                                <List.Item arrow="horizontal">
                                <LabelPicker>Pickup Date</LabelPicker>
                                </List.Item>
                            </DatePicker>

                            <Picker name="deliveryMethod"
                                data={deliveryMethods} 
                                cols={1} 
                                className="forss"
                                locale={enUs}
                                okText="OK" 
                                dismissText="CANCEL"
                                value={deliveryMethod}
                                onChange={handleDeliveryMethod} 
                                
                            >
                                <List.Item arrow="horizontal">
                                <LabelPicker>Delivery Method</LabelPicker>
                                </List.Item>
                            </Picker>

                            <Picker name="pickupLocation"
                                data={storeLocations} 
                                cols={1} 
                                className="forss"
                                locale={enUs}
                                okText="OK" 
                                dismissText="CANCEL"
                                value={pickupLocation}
                                onChange={handlePickupLocation} 
                                
                            >
                                <List.Item arrow="horizontal">
                                <LabelPicker>Pickup Location</LabelPicker>
                                </List.Item>
                            </Picker>

                            <Label>Payment Status</Label>
                            <RadioContainer name="paymentStatus">
                                {paymentStatusData.map(i => (
                                    <RadioList
                                        className="my-radio" key={i.value} 
                                        checked={paymentStatus === i.value}
                                        onChange={() => setpaymentStatus(i.value)}>
                                        {i.label}
                                    </RadioList>
                                ))}

                                <PaymentOptionCont style={showPicker}>
                                    <Picker name="paymentOption"
                                        style={{ display: (paymentStatus === 1) ? 'block' : 'none' }}
                                        data={paymentOptions} 
                                        cols={1} 
                                        className="forss"
                                        locale={enUs}
                                        okText="OK" 
                                        dismissText="CANCEL"
                                        value={paymentOption}
                                        onChange={handlepaymentOption} 
                                        
                                    >
                                        <List.Item arrow="horizontal"></List.Item>
                                    </Picker>
                                </PaymentOptionCont>
                            </RadioContainer>

                            <Label>Discount</Label>
                            <RadioContainer name="discountType">
                                {discountData.map(i => (
                                    <RadioList
                                        className="my-radio" key={i.value} 
                                        checked={discount === i.value}
                                        onChange={() => setDiscount(i.value)}>
                                        {i.label}
                                    </RadioList>
                                ))}

                                <DiscountAmount name="discountAmount"
                                    value={props.values.discountAmount}
                                    placeholder="e.g. 100"
                                    onChange={props.handleChange("discountAmount")} />
                            </RadioContainer>
                        </LayoutContainer>
                    </form>
                )}
            </Formik>
        </Container>
    )
};

export default NewOrder