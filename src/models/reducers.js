import { combineReducers } from 'redux';
import patient from './patient';
import scroll from './scroll';

const reducers = combineReducers({
	...patient.reducer,
	...scroll.reducer,
});

export default reducers;