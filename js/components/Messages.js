import React, { Component, PropTypes } from 'react';
var _ = require("lodash");

import FromMessage from "./FromMessage";

export default class Messages extends Component {
	render() {
		const messages = this.props.messages;

		const messageList = messages.map(message => {
			return (
				<FromMessage message={message} />
			);
		});

		return (
			<div className="messages">
				{messageList}
			</div>
		);
	}
}
