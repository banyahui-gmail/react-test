import 'core-js/es'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDom from 'react-dom'

import './styles/iconfont.css'
import './styles/index.css'
import './styles/body.scss'

import add from './utils/common.js'

class App extends React.Component {
  render () {
    console.log(add(1, 3))
    return (
      <div>
        react component app
        <div className="box"></div>
        <div className="box2"></div>
        <span className="icon iconfont">&#xe60a;</span>
      </div>
    )
  }
}
ReactDom.render(<App/>, document.getElementById('app'))
