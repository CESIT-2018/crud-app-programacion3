import axios from 'axios';
import { FETCH_TODOS } from './types';

export const fetchTodos = () => async dispatch => {
  const res = await axios.get('/api/todos');

  dispatch({ type: FETCH_TODOS  , payload: res.data });
};
