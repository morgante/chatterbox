import React, { Component, PropTypes } from 'react';

var classNames = require('classnames');

export default class Friend extends Component {
	render() {
		const {username} = this.props.friend;

		const clickHandler = this.props.actions.selectFriend.bind(null, username);

		const classes = classNames({
			"active": this.props.active
		});

		return (
			<li className={classes}>
				<a href="#" onClick={clickHandler}>
					{username}
				</a>
			</li>
		);
	}
}
