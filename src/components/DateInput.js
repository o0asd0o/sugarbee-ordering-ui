import React, { Component } from 'react'
import { DatePicker, List } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

class DateInput extends Component {
  state = {
    date: now
  }

  render() {
    return (
      <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
        <DatePicker
          mode="date"
          title="Select Date"
          extra="Optional"
          locale={enUs}
          value={this.state.date}
          onChange={date => this.setState({ date })}
        >
          <List.Item arrow="horizontal"><span className="phStyle">Date</span></List.Item>
        </DatePicker>
      </List>
    );
  }
}


export default DateInput
