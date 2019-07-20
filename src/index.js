import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './redux/reducers/reducer';
import { App, Home} from './containers';

import './style/css/main.css';

const store = createStore(
	reducer,
	applyMiddleware(thunk)
);

render(
	<Provider store={store}>
		<HashRouter>
			<App>
				<Route exact path="/" component={Home} />
			</App>
		</HashRouter>
	</Provider>,
	document.getElementById('app'),
);
