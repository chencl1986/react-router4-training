import React, {Component} from 'react';
import { Icon, Button, WingBlank, WhiteSpace } from 'antd-mobile';

import Text from '../components/Text/Text.jsx';

class App extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		};
	}
	render() {
		return (
			<div>
				<Text
					leftContent={'React Router 4不再需要单独配置路由，而是采用组件思想创建路由，即每个路由都是一个组件。'}
				/>
				<Text
					leftContent={'以下通过这个Demo介绍React Router 4的使用方式（你需要结合Demo代码中的注释来阅读）：'}
				/>
				<Text
					leftContent={'1. 首先通过npm安装react-router-dom、history，然后打开router.js。'}
				/>
				<Text
					leftContent={'2. 我们通常使用BrowserRouter，这个Demo以BrowserRouter为基础。'}
				/>
				<Text
					leftContent={'3. BrowserRouter作为整个应用路由的入口，它只能传入一个children。'}
				/>
				<Text
					leftContent={'4. 再创建history对象，用来调用push、goBack等方法。值得注意的是，history会自动传入BrowserRouter，不需要我们操作。'}
				/>
				<Text
					leftContent={'5. 接下来，就可以进入Index页面'}
				/>
				<WhiteSpace 
					size={'lg'}
				/>
				<WingBlank
					
				>
					<Button
						onClick={() => {
							this.props.history.push('/Index');
						}}
					>
						进入Index
					</Button>
				</WingBlank>
				
			</div>
		);
	}
};

export default App;