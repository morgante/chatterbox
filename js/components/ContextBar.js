import React, { Component, PropTypes } from 'react';

export default class ContextBar extends Component {
	render() {
		const text = this.props.text;

		return (
			<div className="contextbar">
				<h4>{ text }</h4>
			</div>
		);
	}
}
