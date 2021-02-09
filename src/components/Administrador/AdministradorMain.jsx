import React, {Component} from 'react'
import HeaderInstructores from './HeaderInstructores'
import './administrador.css'
import EstadoBootcamp from './EstadoBootcamp'


class AdministradorMain extends Component {
    render(){
    return (
        <div>
            <header>
                <HeaderInstructores></HeaderInstructores>
            </header>
            <body id="body">
                <div className="border border-success" id="panel-izquierdo-administrador">
                    panel izquierdo
                </div>
                <div className="border border-warning" id="panel-central-administrador">
                    <EstadoBootcamp></EstadoBootcamp>
                </div>
            </body>
        </div>
    )
    }
}

export default AdministradorMain
