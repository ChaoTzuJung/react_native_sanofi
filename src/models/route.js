import { createAction, handleActions } from 'redux-actions';
import { useRedux } from 'utils/hooks/redux';
import { calculatorResult } from './patient';

console.log('calculatorResult', calculatorResult);

const QUERY_MAP = {
    1: 'Head & Neck',
    2: 'Upper extremities',
    3: 'Trunk',
    4: 'Lower extremities',
    5: 'Result',
}


export const setRouteChange = createAction('SET_ROUTE_CHANGE', async param => async (dispatch, getState) => {
    if(param.query === '5') dispatch(calculatorResult());
    return new Promise((resolve, reject) => {
        resolve({ path: param.path, query: QUERY_MAP[param.query] })
        reject("[Action] Dispatch setRouteChange Fail !!")

        return { path: param.path, query: QUERY_MAP[param.query] };
    })
});

const reducer = {
	route: handleActions(
		{
			SET_ROUTE_CHANGE_FULFILLED_FULFILLED: (state, action) => ({
                ...state,
                path: action.payload.path ? action.payload.path : state.path,
                query: action.payload.query ? action.payload.query : state.query,
            }),
		},
        {
            path: 'Home',
            query: 'Head & Neck',
        }
	),
};

const mapHooksToState = state => ({
    route: state.route,
});

export const useRoute = () => useRedux(mapHooksToState, { setRouteChange });

export default { reducer };