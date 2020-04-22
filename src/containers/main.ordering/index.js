import React, { useState } from "react";
import { SearchBar } from "antd-mobile"; 
import Header from "../../common.components/header";
import Footer from "../../common.components/footer";
import NavigationDrawer from "../../common.components/nav.drawer";
import ItemView from "../../common.components/itemView";
import OrderView from "../../common.components/orderView";

import { Container, ViewContainer } from "./components";

const MainOrdering = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [selectedView, setSelectedView] = useState(0);

    const onViewChanged = (event) => {
        const { selectedSegmentIndex } = event.nativeEvent;
        setSelectedView(selectedSegmentIndex);
    };

    return (
        <Container>
            <NavigationDrawer visible={drawerVisible} onExitNav={() => setDrawerVisible(false)}>
                <Header toggleSideMenu={() => setDrawerVisible(!drawerVisible)}/>
                <MainContainer selectedView={selectedView} />
            </NavigationDrawer>
            <Footer onSelectedViewChanged={onViewChanged}/>
        </Container>
    )
};

const MainContainer = (props) => {
    return (<div>
        <SearchBar cancelText="Cancel" placeholder="Search" />
        <ViewContainer>
            {props.selectedView === 0
                ? <ItemView />
                : <OrderView />}
        </ViewContainer>
    </div>)
}

export default MainOrdering;
