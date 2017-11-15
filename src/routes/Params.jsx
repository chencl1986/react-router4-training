import React, {Component} from 'react';
import { WhiteSpace } from 'antd-mobile';

import Text from '../components/Text/Text.jsx';

class Params extends Component{
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
					centerContent={this.props.match.params.date}
				/>
			</div>
		);
	}
};

export default Params;