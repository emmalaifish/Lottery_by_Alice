import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPersons } from '../../redux/actionCreators/person';
import { LotteryTimer, Candidates} from '../../components';

@connect(
	state => ({
		load: state.person.get('load'),
		loadSuc: state.person.get('loadSuc'),
		loadErr: state.person.get('loadErr'),
		persons: state.person.get('persons')
	}),
	{
		getPersons,
	}
)
export default class Home extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.getPersons();
	}

	render() {
		const { persons } = this.props;

		return (
			<div className="home">
				<div className="home-container-right">
					<div className="label-size">參與抽獎名單</div>
					<Candidates persons={persons}/>
				</div>
				<div className="home-container-left">
					<div className="label-size">抽獎時間</div>
					<LotteryTimer datas={persons}/>
				</div>
			</div>
		);
	}
}
