import React, { Component, PropTypes } from 'react';

export default class ContextBar extends Component {
	render() {
		const text = this.props.text;

		return (
			<nav className="contextbar navbar navbar-inverse navbar-fixed-top">
				<div className="container-fluid">
					<span className="navbar-brand">{ text }</span>
				</div>
			</nav>
		);
	}
}
