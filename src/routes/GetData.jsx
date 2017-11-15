import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Button, WingBlank, WhiteSpace } from 'antd-mobile';

import Text from '../components/Text/Text.jsx';
import Params from './Params.jsx';
import Query from './Query.jsx';

class GetData extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		};
	}
	render() {
		return (
			<div>
				<Text
					leftContent={'1. 通过params获取URL参数。'}
				/>
				<Text
					className={'indent'}
					leftContent={'a. 先在Route组件配置路径path={"/GetData/Params/:date"}。'}
				/>
				<Text
					className={'indent'}
					leftContent={'b. 跳转时url为"/GetData/Params/数据。"'}
				/>
				<Text
					className={'indent'}
					leftContent={'c. 在组件中通过this.props.match.params.date收取数据。'}
				/>
				<Text
					leftContent={'2. 通过Query获取URL参数。'}
				/>
				<Text
					className={'indent'}
					leftContent={'a. 先在Route组件配置路径path={"/GetData/Params"}。'}
				/>
				<Text
					className={'indent'}
					leftContent={'b. 跳转时url为"/GetData/Params?字段=数据。"'}
				/>
				<Text
					className={'indent'}
					leftContent={'c. React Router 4无法通过this.props.location.query[字段]获取数据，可以引入qs库，通过qs.parse(this.props.location.search.slice(1))[字段]获取数据。'}
				/>
				<WhiteSpace 
					size={'lg'}
				/>
				<WingBlank
					
				>
					<a href="https://github.com/ljharb/qs" title="" target="_blank" className={'link'}>跳转到qs库</a>
				</WingBlank>
				<WhiteSpace 
					
				/>
				<WingBlank
					
				>
					<Button
						onClick={() => {
							this.props.history.replace(`/GetData/Params/${new Date()}`);
						}}
					>
						通过params获取URL参数
					</Button>
				</WingBlank>
				<WhiteSpace 
					
				/>
				<WingBlank
					
				>
					<Button
						onClick={() => {
							this.props.history.replace(`/GetData/Query?date=${new Date()}`);
						}}
					>
						通过Query获取URL参数
					</Button>
				</WingBlank>
				<Route path={`/GetData/Params/:date`} component={Params} ></Route>
				<Route path={`/GetData/Query`} component={Query} ></Route>
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

export default GetData;