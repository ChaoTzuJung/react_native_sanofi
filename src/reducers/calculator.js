import { handleActions } from 'redux-actions';

export default handleActions(
	{
        // action = { type: 'PATIENT_ACTION', payload: { x, y } }
		GET_SCROLL_POSITION: (state, action) => ({
			...state,
			scrollPosition: action.payload,
		}),
	},
	{
        scrollPosition: {},
    }
);
