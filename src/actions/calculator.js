import { createAction } from 'redux-actions';

export const getScrollPosition = createAction('GET_SCROLL_POSITION', position => position);
