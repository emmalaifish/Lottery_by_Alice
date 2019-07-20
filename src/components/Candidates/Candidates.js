import React, { Component } from "react";

import { Person } from '../../components';

export default class Candidates extends Component {

	renderPerson() {
		const { persons } = this.props;
		
		return persons.map((person, key) => {
			return <Person key={key} person={person} />
		});
	}

	render() {
		return (
			<ul className="list-group">
				{this.renderPerson()}
			</ul>
		);
	}
}