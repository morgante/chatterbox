import React, { Component, PropTypes } from 'react';
var _ = require("lodash");

import AddFriend from './AddFriend';
import Friend from './Friend';

export default class FriendList extends Component {
	static propTypes = {
		actions: PropTypes.object.isRequired,
		friends: PropTypes.object.isRequired,
	};

	render() {
		const { friends, actions } = this.props;

		let sortedFriends = _.sortBy(friends, friend => friend.username);

		let friendList = _.map(sortedFriends, friend => {
			return (
				<Friend key={friend.username} friend={friend} actions={actions} />
			);
		});

		return (
			<div>
				Friend List

				{friendList}
				
				<AddFriend actions={actions} />
			</div>
		);
	}
}
