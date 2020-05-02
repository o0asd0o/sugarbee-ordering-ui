import styled from "styled-components";
import { List } from "antd-mobile";

const Item = List.Item;

export const OrderItem = styled(Item) `
    border-bottom: 1px solid #EAECEE;
`
export const CustomerName = styled.p`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 0px;
`
export const ContactNum = styled.p`
    font-size: 14px;
`
export const Orders = styled.p`
    font-size: 12px;
    margin-bottom: 0px;
`
export const Price = styled.p`
    font-size: 14px;
    text-align: right;
    margin-bottom: 0px;
`
export const ModalBody = styled.div`

`
export const OrderTable = styled.table`
    width: 100%;
`
export const ListLabel = styled.td`
    font-weight: bold;
    text-align: left;
    font-size: 12px;
`
export const ListInput = styled.td`
    text-align: left;
    font-size: 12px;
`
