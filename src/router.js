import React, {Component} from 'react';
// 引入BrowserRouter
import { BrowserRouter, Route } from 'react-router-dom';
// 获取创建history对象的方法
import createBrowserHistory from 'history/createBrowserHistory';
// 创建history对象
const history = createBrowserHistory();
// 直接引入页面组件
import Intro from './routes/Intro.jsx';

class Router extends Component{
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	render() {
		return (
			<BrowserRouter>{/*history会自动传入BrowserRouter*/}
				<Intro />{/*不需要单独配置路由，直接加载页面即可，同时注意只允许一个children*/}
			</BrowserRouter>
		);
	}
};

export default Router;