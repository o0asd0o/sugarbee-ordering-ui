import styled from "styled-components";
import { WingBlank, SegmentedControl } from "antd-mobile";

export const LayoutContainer = styled(WingBlank)`
    position: fixed;
    bottom: 0;
    width: 100%;
    margin-left: 0px !important;
`

export const ViewButton = styled(SegmentedControl)`
    height: 40px;
    background: white;
`

export const FloatingAddButton = styled.p`
    position: fixed;
    width: 50px;
    height: 50px;
    bottom: 40px;
    right: 20px;
    background-color:#F1C40F;
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.25);
    a {
        color: white;
    }
    .add-order-icon {
        margin-top: 19px;
    }
`
