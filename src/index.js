import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
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
		<App>
			<Home/>
		</App>
	</Provider>,
	document.getElementById('app'),
);
