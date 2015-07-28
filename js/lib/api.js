var _ = require("lodash");
import * as ChatActions from '../actions/ChatActions';

function idMessage(message) {
	return message.id;
}

function SetupAPI(inbox, redux) {
	const dispatch = redux.dispatch;

	var messages = {};

	const socketUri = "ws://" + location.host + "/ws/inbox";
	var ws = new WebSocket(socketUri);

	ws.onmessage = function(evt) {
		const message = JSON.parse(evt.data);
		const id = idMessage(message);

		if (messages[id] === undefined) {
			messages[id] = true;
			dispatch(ChatActions.receiveMessage(message));
		}
	};

	ws.onopen = function() {
		// send our auth message
		const auth = {
			username: inbox.username,
			key: inbox.key
		};

		ws.send(JSON.stringify(auth));
	};

	function sendMessage(message) {
		ws.send(JSON.stringify(message));
	}

	var messages = {};
	redux.subscribe(function() {
		let inbox = redux.getState().inbox;
		let allMessages = inbox.get("friends").map(friend => friend.get("messages")).flatten();
		let newMessages = allMessages.filter(message => messages[idMessage(message)] === undefined);

		newMessages.forEach(function(message) {
			messages[idMessage(message)] = true;
			sendMessage(message);
		});
	});
}

export default function ConnectAPI(redux) {
	const setup = _.once(SetupAPI);

	redux.subscribe(function() {
		var state = redux.getState().inbox.toJS();

		if (state.username !== "") {
			setTimeout(setup.bind(null, state, redux), 5);
		}
	});
}
