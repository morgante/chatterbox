import * as Actions from '../constants/ActionTypes';

export function addFriend(name) {
	return {
		type: Actions.ADD_FRIEND,
		username: name
	};
}

export function selectFriend(name) {
	console.log('select friend', name);
	return {
		type: Actions.SELECT_FRIEND,
		username: name
	};
}

export function connectServer() {
	return dispatch => {
		var route = window.location.pathname.match(/inbox\/(\w+)\/(\w+)/);
		var username = route[1];
		var key = route[2];

		dispatch({
			type: Actions.SET_USERNAME,
			username: username
		});
	};
}
