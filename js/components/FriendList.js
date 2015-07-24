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
		const { friends, actions, active } = this.props;

		let sortedFriends = _.sortBy(friends, friend => friend.username);

		let friendList = _.map(sortedFriends, friend => {
			let isActive = friend.username === active;
			return (
				<Friend key={friend.username} friend={friend} actions={actions} active={isActive} />
			);
		});

		return (
			<div>
				<h3>ChatterBox Friends</h3>

				<ul className="nav">
					{friendList}
				</ul>
				
				<AddFriend actions={actions} />
			</div>
		);
	}
}
