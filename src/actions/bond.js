import { createAction } from 'redux-actions';
import { GET_BOND } from './actionTypes';
import api from '../api';

export const getBond = createAction(GET_BOND, async id => {
  const { data } = await api.fetchBond(id);
  return data;
});
