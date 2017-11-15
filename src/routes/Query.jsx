import React, {Component} from 'react';
import { WhiteSpace } from 'antd-mobile';
import qs from 'qs';

import Text from '../components/Text/Text.jsx';

class Query extends Component{
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
				<Text
					centerContent={qs.parse(this.props.location.search.slice(1)).date}
				/>
			</div>
		);
	}
};

export default Query;