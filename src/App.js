import React, { useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./containers/login";
import NewOrder from "./containers/new.order";
import OrderListView from "./common.components/orderView/orderList";
// import MainOrdering from "./containers/main.ordering";

import { SearchBar } from "antd-mobile"; 
import Header from "./common.components/header";
import Footer from "./common.components/footer";
import NavigationDrawer from "./common.components/nav.drawer";
import ItemView from "./common.components/itemView";
import OrderView from "./common.components/orderView";

import { Container, ViewContainer } from "./containers/main.ordering/components";

function App () {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [selectedView, setSelectedView] = useState(0);

    const onViewChanged = (event) => {
        const { selectedSegmentIndex } = event.nativeEvent;
        setSelectedView(selectedSegmentIndex);
    };
    
    const [dataList, setdataList] = useState([
        {
            id: '',
            customerName: '',
            phone: '',
            email: '',
            facebook: '',
            instagram: '',
            dateOrdered: '',
            pickupDate: '',
            pickupLocation: '',
            deliveryMethod: '',
            paymentOption: '',
            deliveryAddress: '',
            discountType: '',
            discountAmount: '',
            paymentStatus: '',
            request: '',
            specialOffer: '',
            totalPrice: ''
        }
    ])
    const getDataList = (order) => {
        setdataList(order);
        setSelectedView(0);
    }

    return (
        <Router>
            <div className="app-container">
                <Route exact path="/" component={Login} />
                <Route exact path="/neworder" component={NewOrder} />
                
                {/* sir, nilabas ko po yung main.ordering para makapag assign ng props sa <OrderView> */}
                <Route
                    path="/ordering"
                    render={(props) => 
                        <Container> 
                            <NavigationDrawer visible={drawerVisible} onExitNav={() => setDrawerVisible(false)}>
                                <Header toggleSideMenu={() => setDrawerVisible(!drawerVisible)}/>
                                <SearchBar cancelText="Cancel" placeholder="Search" />
                                <ViewContainer>
                                    {selectedView === 0
                                        ? <ItemView />
                                        : <OrderView {...props} getDataList={getDataList} />}
                                </ViewContainer>
                            </NavigationDrawer>
                            <Footer onSelectedViewChanged={onViewChanged}/>
                        </Container>}
                />

                <Route
                    path="/readonly"
                    render={(props) => 
                    <OrderListView {...props} 
                        id={dataList.id}
                        customerName={dataList.customerName}
                        phone={dataList.phone}
                        email={dataList.email}
                        facebook={dataList.facebook}
                        instagram={dataList.instagram}
                        dateOrdered={dataList.dateOrdered}
                        pickupDate={dataList.pickupDate}
                        pickupLocation={dataList.pickupLocation}
                        deliveryMethod={dataList.deliveryMethod}
                        paymentOption={dataList.paymentOption}
                        deliveryAddress={dataList.deliveryAddress}
                        discountAmount={dataList.discountAmount}
                        discountType={dataList.discountType}
                        paymentStatus={dataList.paymentStatus}
                        request={dataList.request}
                        specialOffer={dataList.specialOffer}
                        totalPrice={dataList.totalPrice} 
                    />}
                />

            </div>
        </Router>
    )
}

export default App
