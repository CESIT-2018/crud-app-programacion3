import {LISTAR_PRODUCTOS} from '../actions/types';

const INITIAL_STATE = {
    lista: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LISTAR_PRODUCTOS:
            return {
                ...state,
                lista: action.payload
            };
        default:
            return state;
    }
}