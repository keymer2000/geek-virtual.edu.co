import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-bootstrap'
import FormularioSocial from "./FormularioSocial";



class ForumMain extends Component {
    render(){
    return (
        <div className="border border-success " style={{height:"100%"}}>
            <div className="mt-4 mb-4 pl-3">
                <h1>Foro Social</h1>
                <p>Puedes abrir un debate sobre consultas que tengas o para invitar a otras personas a discutir algún tema de interés relacionado con el curso.</p>
                <p>También te daremos <strong>información de cosas importantes que puedan acontecer.</strong></p>
                <strong>¡Hagamos comunidad!</strong>
            </div>
            <div>
               <FormularioSocial></FormularioSocial>
            </div>
            
            <br/><br/>
        </div>
    )
    }
}

export default ForumMain
