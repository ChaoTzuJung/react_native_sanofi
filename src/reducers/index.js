import { combineReducers } from 'redux';
import calculator from './calculator';
import patient from './patient';

const reducers = combineReducers({
	calculator,
	patient,
});

export default reducers;
