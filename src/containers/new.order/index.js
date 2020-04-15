import React from "react"
import { InputItem, Modal, Icon } from "antd-mobile";
import { Formik } from "formik";

import { Container, NavigationBar, NavLink, LayoutContainer } from "./components";

// TODO/NOTICE: NOT YET DONE WITH ALL THE FIELDS...

// use the FF:
// import { storeLocations, deliveryMethods, paymentOptions } from "../../utils/values.dropdown";

// const Item = List.Item;
const notification = Modal.alert;
const showErrorNotification = ({ message, description }) => {
    notification(message, description, [{ text: "OK" }]);
};

const NewOrder = ({ history }) => {
    const initialValues = {
        /* TODO: Assign initial values */
    };

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
              rightContent={[<NavLink to="/ordering">Done</NavLink>]}> {/*this should be a submit button*/}
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

                        </LayoutContainer>
                    </form>
                )}
            </Formik>
        </Container>
    )
};

export default NewOrder
