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

		const friendList = _.map(sortedFriends, friend => {
			return (
				<Friend key={friend.username} friend={friend} actions={actions} />
			);
		});

		return (
			<div className="mdl-layout__drawer">
				<span className="mdl-layout-title">Friend List</span>

		        <nav className="mdl-navigation">
		        	<a className="mdl-navigation__link" href="#">alexis</a>
		        </nav>

		        {friendList}
			</div>
		);
	}
}
