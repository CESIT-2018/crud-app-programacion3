import axios from 'axios';
import {
  todosTypes
} from './types';

export const fetchTodos = () => async dispatch => {
  
  dispatch({ type: todosTypes.FETCH_TODOS_PENDING });
  
  try {
    var res = await axios.get('/api/todos');
    dispatch({ type: todosTypes.FETCH_TODOS_FULFILLED, payload: res });
  } catch (error) {
    dispatch({ type: todosTypes.FETCH_TODOS_REJECTED, payload: error });
  }

};

export const newTodo = () => async dispatch => {
  dispatch({ type: todosTypes.NEW_TODO  });
};

export const saveTodo = (todo) => async dispatch => {
  var res = await axios.post('/api/todos', todo);
  dispatch({ type: todosTypes.SAVE_TODO, payload: res });
};

export const fetchTodoById = (id) => async dispatch => {
  
  dispatch({ type: todosTypes.FETCH_TODOS_BY_ID_PENDING });
  
  try {
    const res = await axios.get('/api/todos/' + id);
    dispatch({ type: todosTypes.FETCH_TODOS_BY_ID_FULFILLED, payload: res });
  } catch (error) {
    dispatch({ type: todosTypes.FETCH_TODOS_BY_ID_REJECTED });
  }

};

export const updateTodo = (todo) => async dispatch => {
  var res = await axios.put(`/api/todos/${todo._id}`, todo);
  return dispatch({
    type: todosTypes.UPDATE_TODO,
    payload: res
  })
}

export const deleteTodo = (id) => async dispatch => {

  var res = await axios.delete(`/api/todos/${id}`);

  return dispatch({
    type: todosTypes.DELETE_TODO,
    payload: res
  })
}
