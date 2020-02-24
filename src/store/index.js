import { createStore, applyMiddleware, compose } from 'redux';
import { Platform } from 'react-native';

import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk-fsa';
import devToolsEnhancer from 'remote-redux-devtools';
import reducers from 'models/reducers';

const IS_ANDROID = Platform.OS === 'android';
const middlewares = [thunkMiddleware, promiseMiddleware];
let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production' && !IS_ANDROID) {
	const { createLogger } = require('redux-logger');
	// middlewares.push(
	// 	createLogger({
	// 		predicate: (_, action) => action.type !== 'SCROLL_WINDOW' && action.type !== 'RESIZE_WINDOW',
	// 	}),
	// );
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	// const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 })|| compose;
}

export default function configureStore(preState) {
	const store = createStore(reducers, preState, composeEnhancers(applyMiddleware(...middlewares)));

	return store;
}
