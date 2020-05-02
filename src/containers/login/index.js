import React from "react";
import { Modal } from "antd-mobile";
import { Formik } from "formik";

import { CenteredContainer, LogoImage, TextInput, SubmitButton } from "./components";
import login from "../../utils/requests/login";

const notification = Modal.alert;
const showErrorNotification = ({ message, description }) => {
    notification(message, description, [{ text: "OK" }]);
};

const Login = ({ history }) => {
    const initialValues = { username: null, password: null };
    const handleSubmit = async (values, actions) => {
        actions.setSubmitting(true);
        try {
            const response = await login(values);
            if (response) {
                const { data } = response;
                if (data.result === "SUCCESS") {
                    setTimeout(() => history.push("/ordering"), 300);
                }
            };
        } catch(e) {
            showErrorNotification({
                message: "Oops",
                description: "The credentials you put in are incorrect.",
            });
        }
    };

    return (
        <CenteredContainer>
            <LogoImage src={require("../../logo.jpg")} alt="logo" />
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <TextInput value={props.values.username}
                            onChange={props.handleChange("username")}
                            name={"username"}
                            type={"text"}
                            placeholder={"Username"}
                            disabled={props.isSubmitting} />

                        <TextInput value={props.values.password}
                            onChange={props.handleChange("password")}
                            name={"password"}
                            type={"password"}
                            placeholder={"Password"}
                            disabled={props.isSubmitting}  />

                        <SubmitButton type={"submit"}
                            value={"Login"}
                            disabled={props.isSubmitting}  />
                    </form>
                )}
            </Formik>
        </CenteredContainer>
    );
}

export default Login;
