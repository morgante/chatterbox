import * as Actions from '../constants/ActionTypes';

var uuid = require('node-uuid');

export function addFriend(name) {
	return {
		type: Actions.ADD_FRIEND,
		username: name
	};
}

export function selectFriend(name) {
	return {
		type: Actions.SELECT_FRIEND,
		username: name
	};
}

export function sendMessage(name, message) {
	return {
		type: Actions.SEND_MESSAGE,
		username: name,
		contents: message,
		id: uuid.v4()
	};
}

export function receiveMessage(message) {
	return {
		type: Actions.RECEIVE_MESSAGE,
		from: message.from,
		to: message.to,
		contents: message.contents,
		id: message.id
	};
}

export function connectServer() {
	return dispatch => {
		var route = window.location.pathname.match(/inbox\/(\w+)\/(\w+)/);
		var username = route[1];
		var key = route[2];

		dispatch({
			type: Actions.AUTHENTICATE,
			username: username,
			key: key
		});
	};
}
