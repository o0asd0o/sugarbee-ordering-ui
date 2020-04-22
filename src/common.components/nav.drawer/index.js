import React from "react";  

import { NavContainer, LogoImage, Title, LogoutButton, NavDrawer, ExitNavButton } from "./components";

const NavigationDrawer = (props) => {
    return (
        <NavDrawer sidebar={<SideBarContent onExitNav={props.onExitNav}/>}
            open={props.visible}
            screenHeight={document.documentElement.clientHeight}>
            {props.children}
        </NavDrawer>
    )
};

const SideBarContent = (props) => {
    return (
        <NavContainer>
            <LogoImage src={require("../../logo.jpg")} alt="App Logo" />
            <Title>Sugarbee Ordering App</Title>
            <LogoutButton onClick={() => {}}>Logout</LogoutButton>
            <ExitNavButton onClick={props.onExitNav}>
                <i className="fa fa-times exit-nav-icon"></i>
            </ExitNavButton>
        </NavContainer>
    );
};

export default NavigationDrawer;
