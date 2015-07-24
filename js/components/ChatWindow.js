import React, { Component, PropTypes } from 'react';
var _ = require("lodash");

import SendMessage from "./SendMessage";
import FromMessage from "./FromMessage";
import ContextBar from "./ContextBar";

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

		const heading = "ChatterBox with " + friend.username;

		return (
			<div>
				<ContextBar text={heading} />

				<div className="messages">
					{messages}
				</div>

				<SendMessage onSend={sender} />
			</div>
		);
	}
}
