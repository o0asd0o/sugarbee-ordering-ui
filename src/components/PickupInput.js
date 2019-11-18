import React, { Component } from 'react'

import { Picker, List, WhiteSpace } from 'antd-mobile';
// import arrayTreeFilter from 'array-tree-filter';


// 如果不是使用 List.Item 作为 children
// const CustomChildren = props => (
//   <div
//     onClick={props.onClick}
//     style={{ backgroundColor: '#fff', paddingLeft: 15 }}
//   >
//     <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
//       <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
//       <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
//     </div>
//   </div>
// );

// const seasons = [
//   [
//     {
//       label: '2013',
//       value: '2013',
//     },
//     {
//       label: '2014',
//       value: '2014',
//     },
//   ],
//   [
//     {
//       label: 'Em',
//       value: 'try',
//     },
//     {
//       label: 'Em1',
//       value: 'try1',
//     },
//   ],
// ];

// const colorStyle = {
//   display: 'inline-block',
//   verticalAlign: 'middle',
//   width: '16px',
//   height: '16px',
//   marginRight: '10px',
// };

// const colors = [
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle, backgroundColor: '#FF0000' }}
//       />
//       <span>Chinese1</span>
//     </div>),
//     value: '#FF0000',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle, backgroundColor: '#00FF00' }}
//       />
//       <span>Chinese2</span>
//     </div>),
//     value: '#00FF00',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle, backgroundColor: '#0000FF' }}
//       />
//       <span>Chinese3</span>
//     </div>),
//     value: '#0000FF',
//   },
// ];

class PickupInput extends Component {
  state = {
    data: [],
    cols: 1,
    pickerValue: [],
    asyncValue: [],
    sValue: ['2013', '春'],
    visible: false,
    colorValue: ['#00FF00'],
  };

  onClick = () => {
    setTimeout(() => {
      this.setState({
        data: "provinceLite",
      });
    }, 120);
  };
  
  onPickerChange = (val) => {
    console.log(val);
    let colNum = 1;
    const d = [...this.state.data];
    const asyncValue = [...val];
    if (val[0] === 'zj') {
      d.forEach((i) => {
        if (i.value === 'zj') {
          colNum = 2;
          if (!i.children) {
            i.children = [{
              value: 'zj-nb',
              label: '宁波',
            }, {
              value: 'zj-hz',
              label: '杭州',
            }];
            asyncValue.push('zj-nb');
          } else if (val[1] === 'zj-hz') {
            i.children.forEach((j) => {
              if (j.value === 'zj-hz') {
                j.children = [{
                  value: 'zj-hz-xh',
                  label: '西湖区',
                }];
                asyncValue.push('zj-hz-xh');
              }
            });
            colNum = 3;
          }
        }
      });
    } else {
      colNum = 1;
    }
    this.setState({
      data: d,
      cols: colNum,
      asyncValue,
    });
  };
//   getSel() {
//     const value = this.state.pickerValue;
//     if (!value) {
//       return '';
//     }

//     const treeChildren = arrayTreeFilter("district", (c, level) => c.value === value[level]);
//     return treeChildren.map(v => v.label).join(',');
//   }
  // setVal() {
  //   this.props.form.setFieldsValue({
  //     district: ['340000', '340800', '340822'],
  //   });
  // },

  onChangeColor = (color) => {
    this.setState({
      colorValue: color,
    });
  };

  render() {
    return (<div>
      <WhiteSpace size="lg" />
      <List style={{ backgroundColor: 'white' }} className="picker-list">
        <Picker data={"district"} cols={1} className="forss">
          <List.Item arrow="horizontal">Single</List.Item>
        </Picker>
      </List>
    </div>);
  }
}


export default PickupInput
