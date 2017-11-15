import React, {Component} from 'react';
import { WhiteSpace } from 'antd-mobile';

import WithRouter from '../components/WithRouter.jsx';
import Text from '../components/Text/Text.jsx';

class NoExact extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		};
	}
	render() {
		return (
			<div>
				<Text
					leftContent={'1. 通过该页面代码，可看到按钮都是由另一个组件引入，而这个组件并没有通过Route引入。'}
				/>
				<Text
					leftContent={'2. 也就是说，按钮本身是无法使用history API，这时候就需要withRouter方法进行处理，详见代码。'}
				/>
				<Text
					leftContent={'3. 需要加载的子页面NoExactInside，不需要配置路由，直接在代码内引入，就可以被加载。'}
				/>
				<WhiteSpace
					size={'lg'}
				/>
				<WithRouter 
					
				/>
			</div>
		);
	}
};

export default NoExact;