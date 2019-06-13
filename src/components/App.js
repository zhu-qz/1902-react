import React, {Component } from 'react' // 类组件的另一种引用方式

class App extends Component { // 继承时不用写React
  constructor (props) {
    super (props);
    this.state = {
      list: [
        {
          brand: '康师傅',
          data: ['老坛酸菜', '红烧牛肉', '小鸡炖蘑菇']
        }, 
        {
          brand: '统一',
          data: ['藤椒牛肉', '葱爆牛肉', '红烧排骨']
        }
      ]
    }
  }
  render () {
    let arr = []
    this.state.list.map((item, index) => {
      let itemArr = []
      item.data.map((itm, idx) => {
        itemArr.push(<li key = { idx }>{ itm }</li>)
      })
      let oLi = <li key = { index }>{ item.brand }<ul>{ itemArr }</ul></li>;
      arr.push(oLi)
    })
    return (
      <ul>
        { arr }
      </ul>
    )
  }
}

export default App;