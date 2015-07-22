import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';

var _ = require("lodash");

import FriendList from './FriendList';
import WelcomeBar from './WelcomeBar';
import ChatWindow from './ChatWindow';

export default class Chatterbox extends Component {
	static propTypes = {
		inbox: PropTypes.object.isRequired,
		actions: PropTypes.object.isRequired
	};

	componentWillMount() {
		this.props.actions.connectServer();
	}

	render() {
		const actions = this.props.actions;
		const inbox = this.props.inbox.toJS();
		const friends = inbox.friends;

		var mainPanel = null;

		if (_.size(friends) > 0 && inbox.active_conversation) {
			let friend = friends[inbox.active_conversation];
			mainPanel = (
				<ChatWindow actions={actions} friend={friend} />
			);
		}

		return (
			<div>
				<div>
					<WelcomeBar inbox={inbox} />
				</div>
				<div>
					<div>
						<FriendList actions={actions} friends={inbox.friends} />
					</div>
					<div>
						{mainPanel}
					</div>
				</div>
			</div>
		);
	}
}
