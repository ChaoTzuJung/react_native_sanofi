import { createAction, handleActions } from 'redux-actions';

export const getScrollPosition = createAction('GET_SCROLL_POSITION', position => position);
import { useRedux } from 'utils/hooks/redux';

const reducer = {
	scroll: handleActions(
		{
			GET_SCROLL_POSITION: (state, action) => ({
				...state,
                scrollPosition: action.payload,
			}),
		},
		{
            scrollPosition: {},
		},
	),
};

const mapHooksToState = state => ({
	scrollPosition: state.scroll.scrollPosition,
});

export const useScroll = () => useRedux(mapHooksToState, { getScrollPosition });

export default { reducer };