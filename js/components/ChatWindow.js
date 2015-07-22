import React, { Component, PropTypes } from 'react';
var _ = require("lodash");

import SendMessage from "./SendMessage";
import FromMessage from "./FromMessage";

export default class ChatWindow extends Component {
	static propTypes = {
		friend: PropTypes.object.isRequired
	};

	render() {
		const { friend, actions } = this.props;

		const sender = _.partial(actions.sendMessage, friend.username);

		const messages = friend.messages.map(message => {
			return (
				<FromMessage message={message} />
			);
		});

		return (
			<main className="mdl-layout__content">
				FRIEND CHAT With {friend.username}

				{messages}

				<SendMessage onSend={sender} />
			</main>
		);
	}
}