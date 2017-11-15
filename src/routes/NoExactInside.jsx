import React, {Component} from 'react';
import { Button, WingBlank, WhiteSpace } from 'antd-mobile';

class NoExactInside extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		};
	}
	render() {
		return (
			<div>
				<WhiteSpace 
					
				/>
				<WingBlank
					
				>
					<Button
						onClick={() => {
							this.props.history.goBack();
						}}
					>
						我是NoExactInside组件，点我返回
					</Button>
				</WingBlank>
			</div>
		);
	}
};

export default NoExactInside;