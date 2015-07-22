import React, { Component, PropTypes } from 'react';
var _ = require("lodash");

export default class ChatWindow extends Component {
	static propTypes = {
		friend: PropTypes.object.isRequired
	};

	render() {
		const { friend, actions } = this.props;

		console.log("friend window with", friend);

		return (
			<div>
				FRIEND CHAT
			</div>
		);
	}
}
