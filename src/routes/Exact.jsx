import React, {Component} from 'react';
import { Button, WingBlank, WhiteSpace } from 'antd-mobile';

import WithRouter from '../components/WithRouter.jsx';
import Text from '../components/Text/Text.jsx';

class Exact extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		};
	}
	render() {
		return (
			<div>
				<Text 
					leftContent={'1. 值得注意的是，如果设置了exact属性，就需要在父路由组件引入子组件，否则会因为父组件无法显示，而导致子组件也加载不出来。'}
				/>
				<WhiteSpace 
					
				/>
				<WingBlank
					
				>
					<Button
						onClick={() => {
							this.props.history.push('/Exact/ExactInside')
						}}
					>
						点击跳转到ExactInside页
					</Button>
				</WingBlank>
				<WhiteSpace 
					
				/>
				<WingBlank
					
				>
					<Button
						onClick={() => {
							this.props.history.goBack();
						}}
					>
						点击返回上一页
					</Button>
				</WingBlank>
				
			</div>
		);
	}
};

export default Exact;