import { createAction, handleActions } from 'redux-actions';
import { useRedux } from 'utils/hooks/redux';

const QUERY_MAP = {
    1: 'Head & Neck',
    2: 'Upper extremities',
    3: 'Trunk',
    4: 'Lower extremities',
    5: 'Result',
}
export const setRouteChange = createAction('SET_ROUTE_CHANGE', async param => ({path: param.path, query: param.query}));

const reducer = {
	route: handleActions(
		{
			SET_ROUTE_CHANGE_FULFILLED: (state, action) => ({
                ...state,
                path: action.payload.path ? action.payload.path : state.path,
                query: action.payload.query ? QUERY_MAP[action.payload.query] : state.query,
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