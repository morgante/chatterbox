import React, { Component } from 'react';
import ChatterApp from './ChatterApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';

const ConnectAPI = require("../lib/api")

const redux = createRedux(stores);

ConnectAPI(redux);

export default class App extends Component {
	render() {
		return (
			<Provider redux={redux}>
				{() => <ChatterApp />}
			</Provider>
		);
	}
}
