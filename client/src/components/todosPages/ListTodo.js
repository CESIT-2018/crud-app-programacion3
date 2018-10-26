import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchTodos, deleteTodo } from '../../actions';
import { Link } from 'react-router-dom';

class ListTodo extends Component {

    componentDidMount() {
        this.props.fetchTodos();
    }

    renderTodos() {
        return this.props.listTodos.map(todo => {
            return (
            <tr key={todo._id}>
                <td>{todo.isDone ? "hecho" : "no"}</td>
                <td>{todo.name}</td>
                <td>
                    <Link to={`/todos/${todo._id}/show`} className="mr-2">Ver</Link>
                    <Link to={`/todos/${todo._id}/edit`} className="mr-2">Editar</Link>
                    <a className="mr-2" href="#more" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.props.deleteTodo(todo._id)  }}>Eliminar</a>
                </td>
            </tr>
            )
        });
    }

    render() {
        return (
            <div>
                
                <h2>Listando Todos</h2>

                <p>
                    <Link to="/todos/new" className="btn btn-primary">Nuevo</Link>
                </p>
                
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Hecho</th>
                                <th>Nombre</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.renderTodos()
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        listTodos: state.todos.list
    };
}

export default connect(mapStateToProps, {fetchTodos, deleteTodo})(ListTodo);