import React, { Component } from "react";

export default class Person extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { person } = this.props;

		return (
			<li className="list-group-item">
				<span className="">{person.get('name')}</span>
			</li>
		);
	}
}