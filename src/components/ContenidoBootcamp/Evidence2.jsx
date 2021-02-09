import React, { Component } from 'react';

// data
import { tareas } from './tareas.json';

// subcomponents
import FormEvidencia from './FormEvidencia';

class Evidence extends Component {
  constructor() {
    super();
    this.state = {
      tareas
    }
    this.handleAddTarea = this.handleAddTarea.bind(this);
  }

  removeTarea(index) {
    this.setState({
      tareas: this.state.tareas.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTarea(tarea) {
    this.setState({
      tareas: [...this.state.tareas, tarea]
    })
  }

  render() {
    const tareas = this.state.tareas.map((tarea, i) => {
      return (
        <div className="container border border-primary"  key={i}>
          <div className="row mt-3">
            <div className="col-10 border border-warning" style={{margin:"auto"}}>              
                <div className="row" >
                    <div className="col-12 card-header">
                        <p><strong>Url GitHub:</strong> {tarea.entrega1}</p>
                        <p><strong>Url Endpoint:</strong> {tarea.entrega2}</p>
                        <p><strong>Conlusión:</strong><br/>{tarea.conclusion}</p>
                    </div>
                    <div className="col-12 card-footer text-center">
                      <button
                        className="btn btn-danger"
                        onClick={this.removeTarea.bind(this, i)}>
                        Delete
                      </button>
                    </div>         
                </div>   
            </div>
          </div>
        </div>
      )
    });

    // RETURN THE COMPONENT
    return (
      <div >

        <div className="">
          <div className="">
            <div className="" >
              <FormEvidencia onAddTarea={this.handleAddTarea}></FormEvidencia>
            </div>
            <br/>
            <br/>
            <div className="">
              <div className="">
                {/* {tareas} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Evidence;
