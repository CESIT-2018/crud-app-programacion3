import React, {Component} from 'react';

import {connect} from 'react-redux';
import {listarProductos} from '../../actions';
import { Link } from 'react-router-dom';


class ListaProductos extends Component {

    componentDidMount() {
        this.props.listarProductos();
    }

    _renderizarTablaProductos() {
        
        return (
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Stock</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.listaProductos.map(producto => {
                                return (
                                <tr key={producto._id}>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>{producto.stock}</td>
                                    <td>{producto.precio}</td>
                                    <td>
                                    <Link to={`/productos/${producto._id}/show`} className="">Ver</Link>&nbsp;
                                    <Link to={`/productos/${producto._id}/edit`} className="">Editar</Link>&nbsp;
                                    <Link to={`/productos/${producto._id}/delete`} className="">Eliminar</Link>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        return (

            <div>
                <h2>Listando Productos</h2>
                <p>
                    Nuevo
                </p>

                {this._renderizarTablaProductos()}

            </div>
            
        )
    }

}

function mapStateToProps(state) {
    return {
        listaProductos: state.productos.lista
    };
}


export default connect(mapStateToProps, {listarProductos})(ListaProductos);