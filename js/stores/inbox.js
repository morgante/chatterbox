import * as Actions from '../constants/ActionTypes';

export default function inbox(state = {}, action) {
	switch (action.type) {
		case Actions.ADD_FRIEND:
			console.log("add friend!!!", action);
			return state;
		default:
			return state;
	}
}
