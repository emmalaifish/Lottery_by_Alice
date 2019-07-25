import React, { Component, createContext, createRef } from 'react';

import { Header, Dialog } from '../../components';

export default class App extends Component {

	render() {
		return (
			<div className="container">
				<Header text="Alice React Lottery!" />
				{this.props.children}
			</div>
		);
	}
}
