import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import { Link } from 'react-router-dom';

const validate = (values) => {
    const errors = {name:{}};

    if(!values.name) {
        errors.name = {
          message: 'You need to provide Name'
        }
      }

    return errors;
}

class TodoForm extends Component {

    componentWillReceiveProps = (nextProps) => { // Load Contact Asynchronously
        const { todo } = nextProps;
        if (todo._id !== this.props.todo._id) { // Initialize form only once
            this.props.initialize(todo)
            this.isUpdated = true;
        }
    }

    renderField = ({ input, label, type, meta: { touched, error } }) => (
        
        <div className="form-group">
            <label forname={input.name}>{label}</label>
            <input {...input} type={type} className="form-control" id={input.name}  placeholder={input.label} />
            {/* <small id={input.name + "Help"} className="form-text text-muted">To be filled.</small>
                    <div className="red-text" style={{ marginBottom: '20px' }}>
                        {touched && error}
                    </div> */}
        </div>
    
    )

    render() {

        const { handleSubmit, loading } = this.props;

        if(loading){
            return (<span>loading...</span>);
        }

        return (
            <form onSubmit={handleSubmit}>
                <Field name="name" type="text" component={this.renderField} label="Name" />
                <Field name="description" type="text" component={this.renderField} label="Description" />
                <Link className="btn btn-light mr-2" to="/todos">Cancelar</Link>
                <button className="btn btn-primary mr-2" type="submit" >{this.isUpdated ? "Update" : "Create"}</button>
            </form>
        )
    }
}

export default reduxForm({form: 'todo'}, validate)(TodoForm);