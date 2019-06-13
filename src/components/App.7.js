import React, {Component } from 'react' // 类组件的另一种引用方式

class App extends Component { // 继承时不用写React
  constructor (props) {
    super (props);
    this.state = {
      flag: false
    }
  }

  render () {
    if (this.state.flag) {
      return (
        <h1>真</h1>
      )
    } else {
      return (
        <h1>假</h1>
      )
    }
  }
  
  // 不要在render函数内部的return中使用if语句
  // 以下写法是错误的
  // render () {
  //   return (
  //     if (this.state.flag) {
  //       <h1>真</h1>
  //     } else {
  //       <h1>假</h1>
  //     }
  //   )
  // }
}


export default App;