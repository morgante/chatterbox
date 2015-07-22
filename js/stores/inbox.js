var Immutable = require('immutable');

import * as Actions from '../constants/ActionTypes';

function addFriend(state, username) {
	if (state.getIn(["friends", username]) !== undefined) {
		return state;
	}

	state = state.setIn(["friends", username], Immutable.fromJS({
		username: username,
		messages: []
	}));

	if (state.active_conversation === undefined) {
		state = state.set("active_conversation", username);
	}

	return state;
}

export default function inbox(state = Immutable.fromJS({friends: {}}), action) {
	switch (action.type) {
		case Actions.ADD_FRIEND:
			return addFriend(state, action.username);
		case Actions.SET_USERNAME:
			return state.set("username", action.username);
		case Actions.SELECT_FRIEND:
			return state.set("active_conversation", action.username);
		case Actions.SEND_MESSAGE:
			let username = action.username;
			state = addFriend(state, username);

			let keyPath = ["friends", username, "messages"];
			state = state.setIn(keyPath, state.getIn(keyPath).push({
				message: action.message,
				from: state.get("username"),
				to: username
			}));

			return state;
		default:
			return state;
	}
}
