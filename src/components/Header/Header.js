import React, { Component } from 'react';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
        		<div className="link">{this.props.text}</div>
			</div>
		);
	}
}
