import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Chatterbox from '../components/Chatterbox';
import Inbox from '../components/Inbox';
import * as ChatActions from '../actions/ChatActions';
import { Redirect, Router, Route } from 'react-router';

@connect(state => ({
	inbox: state.inbox
}))
export default class ChatterApp extends Component {
	render() {
		console.log("props", this.props);

		function renderRoutes(history) {
			return (
				<Router history={history}>
				</Router>
			);
		}

		return (
			<Router history={history}>
			</Router>
		);
		// const { inbox, dispatch } = this.props;
		// const actions = bindActionCreators(ChatActions, dispatch);
		// return (
		// 	<Chatterbox inbox={inbox} actions={actions} />
		// );
	}
}
