import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { Button, WingBlank, WhiteSpace } from 'antd-mobile';

import Text from '../components/Text/Text.jsx';

class Index extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		};
	}
	render() {
		return (
			<div>
				<Text
					leftContent={'1. 跳转到Index路由组件时，如果不希望载入父组件内容，即"/"路由的组件，要给"/"路由设置exact属性。'}
				/>
				<Text
					leftContent={'2. 可通过Link标签和history API的方式进行跳转。'}
				/>
				<Text
					leftContent={'3. 通过history API跳转，需要执行this.props.history.push("/Exact")。history对象是通过props传入组件。'}
				/>
				<Text
					leftContent={'4. 通过Route引入的组件，才会有history传入，否则需要通过withRouter方法传入，这个后面会讲到。'}
				/>
				<Text
					leftContent={'5. 点击跳转到Exact，为不加载父组件内容直接跳转。NoExact的子页，则会加载父组件内容。'}
				/>
				<WhiteSpace 
					size={'lg'}
				/>
				<WingBlank
					
				>
					<Link
						className={'link'}
						to="/Exact"
					>
						通过Link标签跳转到Exact
					</Link>
				</WingBlank>
				<WhiteSpace 
					
				/>
				<WingBlank
					
				>
					<Button
						onClick={() => {
							this.props.history.push('/Exact');
						}}
					>
						通过js跳转到Exact
					</Button>
				</WingBlank>
				<WhiteSpace 
					
				/>
				<WingBlank
					
				>
					<Button
						onClick={() => {
							this.props.history.push('/NoExact');
						}}
					>
						通过js跳转到NoExact
					</Button>
				</WingBlank>
				<WhiteSpace 
					
				/>
				<WingBlank
					
				>
					<Button
						onClick={() => {
							this.props.history.push('/GetData');
						}}
					>
						测试通过URL获取数据
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
						返回上一页
					</Button>
				</WingBlank>
			</div>
		);
	}
};

export default Index;