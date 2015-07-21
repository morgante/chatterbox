import * as Actions from '../constants/ActionTypes';

export default function inbox(state = 0, action) {
	switch (action.type) {
		case Actions.INCREMENT_COUNTER:
			return state + 1;
		case Actions.DECREMENT_COUNTER:
			return state - 1;
		case Actions.INCREMENT_DOUBLE:
			return state + 3;
		default:
			return state;
	}
}
