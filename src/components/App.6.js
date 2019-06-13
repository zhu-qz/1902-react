import React, {Component } from 'react' // 类组件的另一种引用方式

// 遍历单层数据

class App extends Component { // 继承时不用写React
  constructor (props) {
    super (props);
    this.state = {
      list: ['a', 'b', 'c', 'd']
    }
  }

  render () {
    console.log(this.state.list)
    let arr = [];
    this.state.list.map((item, index) => {
      arr.push(<li key = { index }>{ item }</li>)
    })
    console.log(arr)
    return (
      <ul>
        { this.state.list } ------ { arr }
      </ul>
    )
  }
}

export default App;