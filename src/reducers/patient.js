import { handleActions } from 'redux-actions';

export default handleActions(
	{
		PATIENT_ACTION: state => ({
			...state,
			loading: true,
		}),
	},
	{
		loading: false,
	},
);
