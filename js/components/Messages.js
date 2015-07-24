import React, { Component, PropTypes } from 'react';
var _ = require("lodash");

import FromMessage from "./FromMessage";

export default class Messages extends Component {
	componentDidUpdate() {
		var node = React.findDOMNode(this.refs.mainDiv);
		node.scrollTop = node.scrollHeight;
	}

	render() {
		const messages = this.props.messages;

		const messageList = messages.map(message => {
			return (
				<FromMessage message={message} />
			);
		});

		return (
			<div className="messages" ref="mainDiv">
				{messageList}
			</div>
		);
	}
}
