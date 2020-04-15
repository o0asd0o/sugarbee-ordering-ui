import React from "react";
import { Link } from "react-router-dom";
import { LayoutContainer, ViewButton, FloatingAddButton } from "./components";

const defaultValues = ["Item View", "Order View"];

const Footer = (props) => {
    return (
        <LayoutContainer size="lg" className="sc-example">
            <ViewButton values={defaultValues}
                onChange={props.onSelectedViewChanged}
                tintColor= "#F1C40F" />
            <FloatingAddButton>
                <Link to="/neworder">
                    <i className="fa fa-plus add-order-icon"></i>
                </Link>
            </FloatingAddButton>
        </LayoutContainer>
    )
};

export default Footer;
