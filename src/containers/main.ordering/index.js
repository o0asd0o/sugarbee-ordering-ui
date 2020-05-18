import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { SearchBar } from "antd-mobile";

import Header from "../../common.components/header";
import Footer from "../../common.components/footer";
import NavigationDrawer from "../../common.components/nav.drawer";
import ItemView from "../../common.components/itemView";
import OrderView from "../../common.components/orderView";

import { Container, ViewContainer } from "./components";

import { getOrdersByDate } from "../../redux/orders/actions";

const MainOrdering = ({ fetchOrders, order }) => {
    const initialDate = moment();

    const [drawerVisible, setDrawerVisible] = useState(false);
    const [selectedView, setSelectedView] = useState(0);
    const [calendarDate, setCalendarDate] = useState(initialDate);

    useEffect(() => {
        const executeFetchOrders = () => {
            fetchOrders(calendarDate.format("YYYY-MM-DD"))
        };
        executeFetchOrders()
    }, [calendarDate, fetchOrders]);

    const onViewChanged = (event) => {
        const { selectedSegmentIndex } = event.nativeEvent;
        setSelectedView(selectedSegmentIndex);
    };

    return (
        <Container>
            {console.log(order)}
            <NavigationDrawer visible={drawerVisible} onExitNav={() => setDrawerVisible(false)}>
                <Header toggleSideMenu={() => setDrawerVisible(!drawerVisible)} onDateChanged={(value) => setCalendarDate(value)}/>
                <MainContainer selectedView={selectedView} order={order} />
            </NavigationDrawer>
            <Footer onSelectedViewChanged={onViewChanged}/>
        </Container>
    )
};

const MainContainer = (props) => {
    return (
    <div>
        <SearchBar cancelText="Cancel" placeholder="Search" />
        <ViewContainer>
            {props.selectedView === 0
                ? <ItemView ordersList = {props.order} />
                : <OrderView ordersList = {props.order} />}
        </ViewContainer>
    </div>)
}

const mapStateToProps = (state) => {
    console.log(state.orders.orders);
    return {
        order: state.orders.orders
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOrders: (dateToFetch) => dispatch(getOrdersByDate(dateToFetch))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MainOrdering);
