import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { NavBar } from 'antd-mobile';

import App from './App.jsx';
import Index from './Index.jsx';
import Exact from './Exact.jsx';
import ExactInside from './ExactInside.jsx';
import NoExact from './NoExact.jsx';
import GetData from './GetData.jsx';
import Text from '../components/Text/Text.jsx';

class Intro extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		};
	}
	render() {
		return (
			<div>
				<NavBar
					mode={'light'}
				>
					React Router 4入门（Web Only）
				</NavBar>
				<Route exact path={`/`} component={App} ></Route>{/*exact属性表示只有在满足当前路径时，才匹配该路由。未设置时，匹配其子路由如/Index，也会匹配到当前路由的信息*/}
				<Route exact path={`/Index`} component={Index} ></Route>
				<Route exact path={`/Exact`} component={Exact} ></Route>
				<Route exact path={`/Exact/ExactInside`} component={ExactInside} ></Route>
				<Route path={`/NoExact`} component={NoExact} ></Route>
				<Route path={`/GetData`} component={GetData} ></Route>
			</div>
		);
	}
};

export default Intro;