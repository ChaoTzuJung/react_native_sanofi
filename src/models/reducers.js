import { combineReducers } from 'redux';
import patient from './patient';
import route from './route';

const reducers = combineReducers({
	...patient.reducer,
	...route.reducer,
});

export default reducers;