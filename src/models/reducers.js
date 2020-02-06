import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import patient from './patient';
import scroll from './scroll';

const reducers = combineReducers({
	// routing: routerReducer,
	...patient.reducer,
	...scroll.reducer,
});

export default reducers;