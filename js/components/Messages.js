import React, { Component, PropTypes } from 'react';
var _ = require("lodash");

import FromMessage from "./FromMessage";

export default class Messages extends Component {
	componentDidUpdate() {
		var node = React.findDOMNode(this.refs.mainDiv);
		node.scrollTop = node.scrollHeight;
	}

	render() {
		var messages = this.props.messages;

		messages = _.map(messages, message => {
			return {
				from: message.from,
				messages: [message]
			};
		});

		messages = _.filter(messages, (message, i) => {
			if (i < 1) {
				return true;
			} else {
				let previous = messages[i - 1];

				console.log("previous", previous, message);

				if (previous.from === message.from) {
					previous.messages = previous.messages.concat(message.messages);
					return false;
				} else {
					return true;
				}
			}
		});

		console.log("messages", messages);

		const messageList = messages.map(message => {
			return (
				<FromMessage from={message.from} messages={message.messages} />
			);
		});

		return (
			<div className="messages" ref="mainDiv">
				{messageList}
			</div>
		);
	}
}
