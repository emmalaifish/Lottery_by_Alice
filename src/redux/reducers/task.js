import { task as cons } from '../constants';
import { fromJS, List } from 'immutable';

const initialState = fromJS({
	load: false,
	loadSuc: false,
	loadErr: false,
	add: false,
	addSuc: false,
	addErr: false,
	persons: List(),
});

export default function person(state = initialState, action = {}) {

	switch(action.type) {
		case cons.LOAD:
		return state.merge({
			load: true,
			loadSuc: false,
			loadErr: false,
			});
	  	case cons.LOAD_SUCCESS: {
	    return state.merge({
			load: false,
			loadSuc: true,
			loadErr: false,
			persons: fromJS(action.data),
			});
	  	}
		case cons.LOAD_FAIL:
		return state.merge({
			load: false,
			loadSuc: false,
			loadErr: action.error,
			});
		case cons.ADD:
		return state.merge({
			add: true,
			addSuc: false,
			addErr: false,
		});
		case cons.ADD_SUCCESS: {
		return state.merge({
			add: false,
			addSuc: true,
			addErr: false,
		});
		}
		case cons.ADD_FAIL:
		return state.merge({
			add: false,
			addSuc: false,
			addErr: action.error,
      });
	  default:
	  	return state;
	}
}
