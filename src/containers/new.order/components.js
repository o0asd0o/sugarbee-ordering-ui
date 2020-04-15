import styled from "styled-components";
import { NavBar, List } from "antd-mobile";
import { Link } from "react-router-dom";

export const Container = styled.div`

`

export const NavigationBar = styled(NavBar)`
    background: #F1C40F
`

export const NavLink = styled(Link)`
    color: white;
`

export const LayoutContainer = styled(List)`
    height: auto;
    overflow: autol
    margin-bottom: 40px;
    input {
        font-size: 15px !important;
    }
    div.am-input-label {
        font-size: 15px !important;
    }
`
