import 'core-js/es';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDom from 'react-dom';

import './styles/index.scss'
import './styles/body.scss'

import add from './utils/common.js'


class App extends React.Component{
	render(){
		console.log(add(1,3))
		return (
			<div>
				react component app
				<div class="box"></div>
				<div class="box2"></div>
			</div>
		)
	}
}
ReactDom.render(<App/>, document.getElementById('app'))