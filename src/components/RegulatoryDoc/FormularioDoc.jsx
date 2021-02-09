import React from 'react'
import Swal from 'sweetalert2';



class FormularioDoc extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();
    }
    handleSubmit(event) {
      event.preventDefault();
      Swal.fire({
        icon:'success',
        title: "Documentos cargados exitosamente",
        text: "Haz clic en el boton!",
        confirmButtonText: "Continuar",
      });
    }


    render() {
      return (
        <div>
            <div className="text-center">
                <h3>Adjuntar documentación reglamentaria</h3>
            </div>
        <form className="container-fluid border mt-lg-4" onSubmit={this.handleSubmit}>
            <div className="row border-bottom mb-2 p-2">
                <div className="col-lg-6 ">
                    <label>Adjuntar autorización de datos personales:</label>
                </div>
                <div className="col-lg-6 ">
                    <input type="file" ref={this.fileInput} />
                </div>   
            </div>
            <div className="row border-bottom mb-2 p-2">
                <div className="col-lg-6 ">
                    <label>Adjuntar autorización de uso de imagen:</label>
                </div>
                <div className="col-lg-6 ">
                    <input type="file" ref={this.fileInput} />
                </div>   
            </div>
            <div className="row border-bottom p-2">
                <div className="col-lg-6 ">
                    <label>Adjuntar acta de compromiso de recepción de beca:</label>
                </div>
                <div className="col-lg-6 ">
                    <input type="file" ref={this.fileInput} />
                </div>   
            </div>
            <div className="text-center mt-3 mb-2">
                <button className="btn btn-primary" type="submit" >Enviar archivos</button>
            </div>
            
        </form>
        </div>
      );
    }
  }
  
export default FormularioDoc
