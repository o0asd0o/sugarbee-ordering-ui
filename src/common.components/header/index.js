import React, { useState } from "react";
import { Icon } from "antd-mobile";
import { Calendar } from "antd";
import moment from "moment";

import { Container, Button, NavigatioBar, CalendarContainer } from "./components";

const Header = (props) => {
    const initialValue = moment().format("ddd, D MMMM, YYYY");
    const [selectedValue, setSelectedValue] = useState(moment(initialValue));
    const [showCalendar, setShowCalendar] = useState(false);

    const onToggleCalendar = () => setShowCalendar(!showCalendar);
    const onDateSelected = (value, mode) => {
        setSelectedValue(value);
        props.onDateChanged(value);
        if (!mode) {
            setTimeout(() => setShowCalendar(false), 300);
        }
    };

    const ButtonComponent = (
        <Button onClick={onToggleCalendar}>
            {selectedValue.format("ddd, D MMMM, YYYY")}
        </Button>
    );

    return (
        <Container>
            <NavigatioBar rightContent={ButtonComponent}
                icon={<Icon type="ellipsis" />}
                onLeftClick={props.toggleSideMenu} />

            <CalendarContainer showCalendar={showCalendar}>
                <Calendar value={selectedValue}
                    fullscreen={false}
                    onPanelChange={onDateSelected}
                    onSelect={onDateSelected} />
            </CalendarContainer>
        </Container>
    );
}

export default Header;
