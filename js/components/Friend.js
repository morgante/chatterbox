import React, { Component, PropTypes } from 'react';

export default class Friend extends Component {
	render() {
		const {username} = this.props.friend;

		const clickHandler = this.props.actions.selectFriend.bind(null, username);

		return (
			<div onClick={clickHandler}>
				{username}
			</div>
		);
	}
}
