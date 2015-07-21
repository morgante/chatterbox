import React from 'react';
import App from './containers/App';
import {HistoryLocation} from 'react-router';

const history = HistoryLocation;

React.render(
	<App history={history} />,
	document.getElementById('app')
);
