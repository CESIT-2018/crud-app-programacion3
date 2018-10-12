import axios from 'axios';
import { FETCH_TODOS, NEW_TODO, SAVE_TODO, FETCH_TODOS_BY_ID, UPDATE_TODO } from './types';

export const fetchTodos = () => async dispatch => {
  const res = await axios.get('/api/todos');

  dispatch({ type: FETCH_TODOS  , payload: res.data });
};

export const newTodo = () => async dispatch => {
  dispatch({ type: NEW_TODO  });
};

export const saveTodo = (todo) => async dispatch => {
  var res = await axios.post('/api/todos', todo);
  dispatch({ type: SAVE_TODO, payload: res });
};

export const fetchTodoById = (id) => async dispatch => {
  var res = await axios.get('/api/todos/' + id);
  dispatch({ type: FETCH_TODOS_BY_ID, payload: res });
};

export const updateTodo = (todo) => async dispatch => {
  var res = await axios.put(`/api/todos/${todo._id}`, todo);
  return dispatch({
    type: UPDATE_TODO,
    payload: res
  })
}
