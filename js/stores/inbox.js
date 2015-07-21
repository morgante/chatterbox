var Immutable = require('immutable');

import * as Actions from '../constants/ActionTypes';

export default function inbox(state = Immutable.fromJS({friends: {}}), action) {
	switch (action.type) {
		case Actions.ADD_FRIEND:
			return state.setIn(["friends", action.username], Immutable.fromJS({
				username: action.username,
				messages: []
			}));
		default:
			return state;
	}
}
