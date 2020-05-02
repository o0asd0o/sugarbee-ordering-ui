import styled from "styled-components";
import { NavBar, List, Radio, InputItem } from "antd-mobile";
import { Select } from "antd";
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
    overflow: auto;
    margin-bottom: 40px;
    .am-input-label{
        width: 100px;
    }
    input {
        font-size: 15px !important;
    }
    div.am-input-label {
        font-size: 15px !important;
    }
`
export const OrderListContainer = styled.div`
    margin-left: 20px;
    margin-right: 20px;
`
export const OrderList = styled.div`

`
export const OrderName = styled.p`
    font-size: 15px;
    font-weight: bold;
    display: inline-block;
    width: 70%;
    margin-bottom: 0px;
`
export const OrderQuantity = styled.p`
    font-size: 15px;
    font-weight: bold;
    display: inline-block;
    width: 20%;
    margin-bottom: 0px;
`

export const DeleteButton = styled.button`
    background: transparent;
    border: none;
    font-size: 20px;
    font-weight: 900;
    color: red;
    display: inline-block;
    width: 10%;
`
export const OrderForm = styled.form`
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
`
export const OrderDropdown = styled(Select)`
    width: 50%;
    margin-right: 5px;
`

export const InputQuantity = styled.input`
    width: 20%;
    border-radius: 5px;
    border: solid 1px #ccc;
    margin-right: 5px;
    padding: 4px;
`
export const AddButton = styled.button `
    border-radius: 5px;
    border-style: solid;
    color: white;
    background: #F1C40F;
    border-color: #F1C40F;
    width: 25%;
    padding: 3px;
`
export const Label = styled.p`
    font-size: 15px;
    color: black;
    margin-left: 15px;
    margin-bottom: 0px;
`
export const LabelPicker = styled.p`
    font-size: 15px;
    color: black;
    margin-bottom: 0px;
`
export const RoundRadio = styled(Radio)`
    padding: 2.5px;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin-right: 5px;
`
export const RadioContainer = styled.div`
    margin-top: 10px;
    margin-left: 15px;

`
export const RadioList = styled(Radio)`
    color: #888;
    margin-bottom: 10px;
    margin-right: 48px;
    display: inline-block;
    .am-radio {
        padding: 9px;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin-right: 5px;
    }
    .am-radio.am-radio-checked .am-radio-inner:after {
        border-color: #F1C40F !important;
        top: -7px;
    }
`
export const PaymentOptionCont = styled.div`
    display: ${props => props.paymentStatus === 1 ? "inline-block" : "none"};
    width: 35%;
    padding-top: 0px;
    .am-list-item .am-list-line .am-list-extra {
        flex-basis: 100%;
    }
    .am-list-item .am-list-line {
        padding-right: 0px;
    }
`
export const DiscountAmount = styled(InputItem)`
    width: 100px;
    display: inline-block;
    padding-top: 6px;
`
export const DoneButton = styled.input`
    background: transparent;
    border-style: solid;
    border-color: transparent;
`

export const ProductContainer = styled.div`
    padding: 0 10px;
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            margin-right: auto;
            margin-bottom: 0;
        }
    }
`

export const ProductList = styled.div`
    margin-top: 10px;
    color: #222;
    .product-item {
        display: flex;
        margin: 0 12px;
        p.name {
            margin-right: auto;
        }
    }
    .product-total {
        display: flex;
        margin: 0 12px;
        border-top: 1px solid rgba(0,0,0,0.3);
        padding-top: 5px;
        p.total-label {
            margin-right: auto;
        }
    }
`

export const AddProductDiv = styled.div`
    .product-dropdown {
        width: 84%;
        margin-right: 1%;
        box-sizing: border-box;
    }
    .product-quantity {
        width: 15%;
    }
`

export const SubmitContainer = styled.div`
    display: flex;
    padding: 10px 0;
    flex-direction: row-reverse;
    a {
        width: 100px;
    }
`
