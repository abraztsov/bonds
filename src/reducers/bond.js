import { GET_BOND } from '../actions/actionTypes.js';
import { handleActions } from 'redux-actions';

let initialState = {};

export default handleActions(
  {
    [`${GET_BOND}_SUCCESS`]: (state, { payload }) => payload
  },
  initialState
);
