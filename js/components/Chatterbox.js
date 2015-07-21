import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';

import AddFriend from './AddFriend';

export default class Chatterbox extends Component {
	static propTypes = {
		inbox: PropTypes.object.isRequired,
		actions: PropTypes.object.isRequired
	};

	render() {
		const { inbox, actions } = this.props;

		return (
			<p>
			inbox

				<AddFriend actions={actions} />
			</p>
		);
	}
}
