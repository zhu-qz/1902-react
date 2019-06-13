import React, {Component } from 'react' // 类组件的另一种引用方式

class App extends Component { // 继承时不用写React
  constructor (props) {
    super (props);
    this.state = {
      flag: false
    }
  }

  //可以使用三元运算符
  render () {
    return ( 
      // 要用div包起来
      <div>
        {
          this.state.flag ? <h1>真</h1> : <h1>假</h1>
        }
      </div>
    )
  }
}

export default App;