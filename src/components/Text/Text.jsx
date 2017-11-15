import './Text.less';
import 'babel-polyfill';
import React, {Component} from 'react';
import firstToUpper from '../../utils/firstToUpper';

class Text extends Component{
	constructor(props) {
		super(props);
		
		this.state = {
			
		};
	}
	render() {
		let setting = {Content: {}, Style: {}, Click: {}},
			props = Object.assign({}, this.props);
		const regArr = ['Content', 'Style', 'Click'];

		for (let i in props) {
			for (let j = 0; j < regArr.length; j++) {
				if (i.match(new RegExp(regArr[j]))) {
					setting[regArr[j]][i] = props[i];
					delete props[i];
				}
			}
		}
		
		const {
			height,
			className,
			...rest
		} = props;

		return (
			<div
				className={`clearfix text-component ${className ? className : ''}`}
				{...rest}
				ref={'text'}
			>
				{
					Object.keys(setting.Content).map((item, index) =>
						{
							const prop = item.substring(0, item.length - 7),
								upperProp = firstToUpper(prop);
							
							if (setting.Content[`${prop}Content`]) {
								return (
									<span
										key={index}
										className={`text-content text-${prop}`}
										style={setting.Style[`${prop}Style`]}
										onClick={(event) => {
											setting.Click[`on${upperProp}Click`] && setting.Click[`on${upperProp}Click`](event);
										}}
									>
										{setting.Content[`${prop}Content`]}
									</span>
								)
							}
						}
					)
				}
		</div>
		);
	}
};

Text.defaultProps = {
	
}

export default Text;