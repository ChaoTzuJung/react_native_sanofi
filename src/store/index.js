import { createStore, applyMiddleware, compose } from 'redux';

import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

import reducers from 'reducers';

const middlewares = [thunkMiddleware, promiseMiddleware];
let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
	const { createLogger } = require('redux-logger');
	middlewares.push(
		createLogger({
			predicate: (_, action) => action.type !== 'SCROLL_WINDOW' && action.type !== 'RESIZE_WINDOW',
		}),
	);
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default function configureStore(preState) {
	const store = createStore(reducers, preState, composeEnhancers(applyMiddleware(...middlewares)));

	return store;
}
