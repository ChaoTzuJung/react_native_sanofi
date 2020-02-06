import { createStore, applyMiddleware, compose } from 'redux';

import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import reducers from 'models/reducers';

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
	// const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 })|| compose;
}

export default function configureStore(preState) {
	const store = createStore(reducers, preState, composeEnhancers(applyMiddleware(...middlewares)));

	return store;
}
