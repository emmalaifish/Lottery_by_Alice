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

		this.state = {
			keyword: ''
		};

		this.setKeyword = this.setKeyword.bind(this);
	}

	componentDidMount() {
		this.props.getPersons();
	}

	setKeyword(keyword) {
		this.setState({
			keyword,
		});
	}

	render() {
		const { persons } = this.props;
		const { count } = this.state;
		const { keyword } = this.state;

		const _persons = keyword === '' ? persons : persons.filter(person => {
			return person.get('name').toLowerCase().includes(keyword);
		})

		return (
			<div className="home">
				<div className="home-container-right">
					<div className="label-size">參與抽獎名單</div>
					<Candidates persons={persons} />
				</div>
				<div className="home-container-left">
					<div className="label-size">抽獎時間</div>
					<LotteryTimer count={count} datas={persons}/>
				</div>
			</div>
		);
	}
}
