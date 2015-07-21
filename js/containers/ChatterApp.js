import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Chatterbox from '../components/Chatterbox';
import * as ChatActions from '../actions/ChatActions';

@connect(state => ({
	inbox: state.inbox
}))

export default class ChatterApp extends Component {
	render() {
		const { inbox, dispatch } = this.props;
		const actions = bindActionCreators(ChatActions, dispatch);
		return (
			<Chatterbox inbox={inbox} actions={actions} />
		);
	}
}
