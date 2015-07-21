import * as Actions from '../constants/ActionTypes';

export function addFriend(name) {
	return {
		type: Actions.ADD_FRIEND,
		username: name
	};
}
