import React, {Component} from 'react';
// 引入withRouter
import { Route, Link, withRouter } from 'react-router-dom';
import { Button, WingBlank, WhiteSpace } from 'antd-mobile';
import NoExactInside from '../routes/NoExactInside.jsx';

class WithRouter extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		};
	}
	render() {
		return (
			<div>
				<WingBlank
					
				>
					<Link
						className={'link'}
						to="/NoExact/NoExactInside"
					>
						通过Link标签载入NoExactInside页
					</Link>
					<WhiteSpace 
						
					/>
					<Button
						onClick={() => {
							this.props.history.push('/NoExact/NoExactInside');
						}}
					>
						点击按钮载入NoExactInside页
					</Button>
					<WhiteSpace 
						
					/>
					<Button
						onClick={() => {
							this.props.history.goBack();
						}}
					>
						返回上一页
					</Button>
					<Route path={`/NoExact/NoExactInside`} component={NoExactInside} ></Route>
				</WingBlank>
				<WhiteSpace 
					
				/>
			</div>
		);
	}
};

export default withRouter(WithRouter);	// 将组件传参给withRouter方法运行，再暴露接口，就可以使用history API