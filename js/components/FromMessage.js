import React, { Component, PropTypes } from 'react';

export default class FromMessage extends Component {
	render() {
		const {from, contents, to} = this.props.message;

		return (
			<div>
				{from} said {contents} to {to}
			</div>
		);
	}
}
