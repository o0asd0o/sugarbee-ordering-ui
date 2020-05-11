import styled from "styled-components";
import { NavBar, List, Radio, InputItem, Modal } from "antd-mobile";
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
export const EditModal = styled(Modal)`
    .am-modal-header {
        padding: 0px;
    }
`
export const EditProductList = styled(List)`
    .am-list-item .am-list-line .am-list-content {
        font-size: 14px;
    }
`
export const EditProductListItems = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
    border-bottom: 1px solid #EAECEE;
    padding: 10px 15px 10px 15px;
    .product-name {
        width: 70%;
        text-align: left;
        margin-bottom: 0px;
        align-self: center;
        color: black;
    }
    .delete-button {
        width: auto;
        border: 0;
        background: none;
        align-self: center;
        color: red;
    }
`
export const CounterDiv = styled.div`
    min-width: 100px;
    width: auto;
    margin-right: 10px;
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
    align-self: center;

    .incrementButton {
        width: 35%;
        border: solid 1px #424949;
        border-radius: 5px;
        background: none;
        color: #424949;
        margin-left: 3px;
    }
    .decrementButton {
        width: 35%;
        border: solid 1px #424949;
        border-radius: 5px;
        background: none;
        color: #424949;
        margin-right: 3px;
    }
    .count {
        width: 30%;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 0px;
    }
`

export const SubmitButton = styled.input`
    width: 100%;
    margin-top: 20px;
    padding: 10px 0;
    border: none;
    background: #F1C40F;
    color: white;
`
