import React, { Component, PropTypes } from 'react';

export default class FromMessage extends Component {
	render() {
		const {from, message, to} = this.props.message;

		return (
			<div>
				{from} said {message} to {to}
			</div>
		);
	}
}
