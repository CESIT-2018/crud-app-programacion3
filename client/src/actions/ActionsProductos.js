import axios from 'axios';
import {LISTAR_PRODUCTOS} from './types';

export const listarProductos = () => async dispatch => {
    const res = await axios.get('/api/productos');

    dispatch({type: LISTAR_PRODUCTOS, payload: res.data});
};
