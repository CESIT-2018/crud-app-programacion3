import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import reducerTodos from './ReducerTodos';

export default combineReducers({
  form: reduxForm,
  todos: reducerTodos
});
