import React, { Component, PropTypes } from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import { Redirect, Router, Route } from 'react-router'

import ChatterApp from './ChatterApp';
import * as stores from '../stores';
import Inbox from '../components/Inbox';

const redux = createRedux(stores);

export default class App extends Component {
	static propTypes = {
		history: PropTypes.object.isRequired
	}

	render() {
		return (
			<Provider redux={redux}>
				{() => <ChatterApp history={this.props.history} />}
			</Provider>
		);
	}
}
