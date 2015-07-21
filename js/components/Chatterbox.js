import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';

import FriendList from './FriendList';
import WelcomeBar from './WelcomeBar';

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

		console.log("state", inbox);

		return (
			<p>
				<WelcomeBar inbox={inbox} />
				<FriendList actions={actions} friends={inbox.friends} />
			</p>
		);
	}
}
