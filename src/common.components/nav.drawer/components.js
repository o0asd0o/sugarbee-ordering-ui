import styled from "styled-components";
import { List, Drawer } from "antd-mobile";

export const NavDrawer = styled(Drawer)`
    -webkit-overflow-scrolling: touch;
    position: relative;
    overflow: auto;
    min-height: ${(props) => props.screenHeight}px;

    .am-drawer-sidebar {
        background-color: #fff;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .am-drawer-sidebar .am-list {
        width: 300px;
        padding: 0;
    }
`

export const NavContainer = styled(List)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    .am-list-body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`

export const LogoImage = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
`

export const Title = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin-top: 25px;
`

export const LogoutButton = styled.button`
    border: none;
    background: none;
    color: red;
    font-size: larger;
`

export const ExitNavButton = styled.div`
    width: 50px;
    height: 50px;
    background: rgba(0,0,0,0.25);
    border-radius: 25px;
    text-align: center;
    box-shadow: 2px 2px 3px rgba(0,0,0,0.15);
    color: white;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: -150px;
`
