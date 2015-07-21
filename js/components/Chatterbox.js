import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';

import FriendList from './FriendList';

export default class Chatterbox extends Component {
	static propTypes = {
		inbox: PropTypes.object.isRequired,
		actions: PropTypes.object.isRequired
	};

	render() {
		const actions = this.props.actions;
		const inbox = this.props.inbox.toJS();

		return (
			<p>
				CHATTERBOX
				// <FriendList actions={actions} friends={inbox.friends} />
			</p>
		);
	}
}
