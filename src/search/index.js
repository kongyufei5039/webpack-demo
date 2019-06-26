import React from 'react'
import ReactDOM from 'react-dom'
import common from '../../common'

class MyComponent extends React.Component {
  render() {
    return <h1>{ common() }</h1>
  }
}
 
ReactDOM.render(<MyComponent />, document.getElementById('root'))
