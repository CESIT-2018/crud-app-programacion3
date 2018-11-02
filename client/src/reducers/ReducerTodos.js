import {
  todosTypes
} from '../actions/types';

const TODO_INITIAL_STATE = {};

const INITIAL_STATE = {
  listTodos: [],
  todo: TODO_INITIAL_STATE,
  loading: false,
  errors: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case todosTypes.FETCH_TODOS_FULFILLED:
      return {
        ...state,
        listTodos: action.payload.data,
        loading: false
      };
    
    case todosTypes.FETCH_TODOS_PENDING:
      return {
        ...state,
        loading: true
      };

    case todosTypes.FETCH_TODOS_REJECTED:
      return {
        ...state,
        loading: false
      };

    case todosTypes.NEW_TODO : {
      return {
        ...state
      }
    }

    case todosTypes.SAVE_TODO : {
      return {
        ...state,
        listTodos: [...state.listTodos, action.payload.data],
        errors: {}
      }
    }

    case todosTypes.FETCH_TODOS_BY_ID_FULFILLED: {
      return {
        ...state,
        todo: action.payload.data,
        loading: false
      }
    }
    
    case todosTypes.FETCH_TODOS_BY_ID_PENDING: {
      return {
        ...state,
        todo: {},
        loading: true
      }
    }

    case todosTypes.FETCH_TODOS_BY_ID_REJECTED: {
      return {
        ...state,
        loading: false
      }
    }

    case todosTypes.UPDATE_TODO: {
      const todo = action.payload.data;
      return {
        ...state,
        todo: TODO_INITIAL_STATE,
        listTodos: state.listTodos.map(item => item._id === todo._id ? todo : item)
      }
    }

    case todosTypes.DELETE_TODO: {
      const id = action.payload.data._id;
      return {
        ...state,
        listTodos: state.listTodos.filter(item => item._id !== id)
      }
    }

    default:
      return state;
  }
}
