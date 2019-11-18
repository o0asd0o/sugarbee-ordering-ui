import React, { Component } from 'react'

import { DatePicker, List } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

// function formatDate(date) {
//   /* eslint no-confusing-arrow: 0 */
//   const pad = n => n < 10 ? `0${n}` : n;
//   const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
//   const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
//   return `${dateStr} ${timeStr}`;
// }

// If not using `List.Item` as children
// The `onClick / extra` props need to be processed within the component
// const CustomChildren = ({ extra, onClick, children }) => (
//   <div
//     onClick={onClick}
//     style={{ backgroundColor: '#fff', height: '45px', lineHeight: '45px', padding: '0 15px' }}
//   >
//     {children}
//     <span style={{ float: 'right', color: '#888' }}>{extra}</span>
//   </div>
// );

class DateInput extends Component {
  state = {
    date: now,
    time: now,
    utcDate: utcNow,
    dpValue: null,
    customChildValue: null,
    visible: false,
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
          <List.Item arrow="horizontal"><span style={{ color: '#888' }}>Date</span></List.Item>
        </DatePicker>
      </List>
    );
  }
}


export default DateInput
