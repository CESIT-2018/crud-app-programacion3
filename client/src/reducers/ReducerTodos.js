import { FETCH_TODOS, NEW_TODO, SAVE_TODO, FETCH_TODOS_BY_ID, UPDATE_TODO } from '../actions/types';

const TODO_INITIAL_STATE = {};

const INITIAL_STATE = {
  list: [],
  todo: TODO_INITIAL_STATE,
  errors: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        list: action.payload
      };

    case NEW_TODO : {
      return {
        ...state
      }
    }

    case SAVE_TODO : {
      return {
        ...state,
        list: [...state.list, action.payload.data],
        errors: {}
      }
    }

    case FETCH_TODOS_BY_ID: {
      return {
        ...state,
        todo: action.payload.data
      }
    }

    case UPDATE_TODO: {
      const todo = action.payload.data;
      return {
        ...state,
        todo: TODO_INITIAL_STATE,
        list: state.list.map(item => item._id === todo._id ? todo : item)
      }
    }

    default:
      return state;
  }
}
