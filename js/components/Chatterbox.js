import React, { Component, PropTypes } from 'react';

export default class Chatterbox extends Component {
	static propTypes = {
		inbox: PropTypes.object.isRequired
	};

	render() {
		const { inbox } = this.props;

		console.log("inbox is", inbox);
		return (
			<p>
			inbox
			</p>
		);
	}
}
