import React, { Component } from 'react';

class FormEvidencia extends Component {
    constructor() {
        super();
        this.state = {
            entrega1: '',
            entrega2: '',
            conclusion: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTarea(this.state);
        this.setState({
            entrega1: '',
            entrega2: '',
            conclusion: ''
        });
    }

    handleInputChange(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="container border border-primary mt-3" >
                <form action="" method="get" className="border p-2 m-auto" style={{width:"90%"}} onSubmit={this.handleSubmit}>
                    <div className="col">
                        <div className="row form-group ">
                            <lable className="col-4" style={{fontSize:"16px", fontWeight:"bold"}}>Url Repositorio GitHub:</lable>
                            <input
                                name="entrega1" 
                                type="text" 
                                className="col-8"
                                placeholder="Adjunta tu enlace del repositorio" 
                                value={this.state.entrega1}
                                onChange={this.handleInputChange} 
                            />
                        </div>

                        <div className="row form-group row ">
                            <label className="col-4" style={{fontSize:"16px", fontWeight:"bold"}}>Url Endpoint Evidencia:</label>
                            <input 
                                name="entrega2"
                                type="text" 
                                className="col-8"
                                placeholder="Adjunta tu Endpoint de la evidencia" 
                                value={this.state.entrega2}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="row form-group row border">
                            <textarea 
                                name="conclusion"  
                                className="col-12" rows="6" 
                                placeholder="Conclusión de la evidencia..."
                                value={this.state.conclusion}
                                onChange={this.handleInputChange} >
                            </textarea>
                        </div>
                        
                            <div className="row ">
                                <div className="col-10"></div>
                                <div className="col-2 p-0">
                                    <button type="submit" className="btn btn-primary  float-right ">Contestar</button>
                                </div>
                            </div>     
                    </div>       
                </form>
            </div>
        )
    }

}

export default FormEvidencia;
