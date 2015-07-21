import React, { Component, PropTypes } from 'react';

export default class WelcomeBar extends Component {
	render() {
		const name = this.props.inbox.username;

		return (
			<div>
				Welcome, {name}
			</div>
		);
	}
}
