import styled from "styled-components";
import { NavBar } from "antd-mobile";

export const Container = styled.div`
    height: auto;
`
export const Button = styled.button`
    white-space: nowrap;
    border: none;
    background: none;
    color: white;
`

export const NavigatioBar = styled(NavBar)`
    background: #F1C40F;
`

export const CalendarContainer = styled.div`
    width: 100%;
    display: ${props => props.showCalendar ? "block" : "none"};
    position: absolute;
    z-index: 100;
    border: 1px solid rgba(0,0,0,0.2);
    box-shadow: 3px 3px 6px 1px rgba(0,0,0,0.15);
    box-sizing: border-box;
    background: white;
`
