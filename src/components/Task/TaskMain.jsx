import React, { Component } from 'react';
import './task.css';

// data
import { todos } from './todos.json';

// subcomponents
import TodoForm from './TodoForm';

class TaskMain extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center pt-2">
              <h4>{todo.title}</h4>
              <span className="badge badge-pill badge-warning ml-2 mt-3 p-3">
                {todo.priority}
              </span>
            </div>
            <div className="card-body ">
                <p><strong>Responsable(s): </strong>{todo.responsible}</p>
                <br/>
                <br/>
                <p><strong>Descripcion: </strong>{todo.description}</p>
            </div>
            <div className="card-footer text-center">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-6 text-center" style={{margin:"auto"}}>
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-12">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskMain;
