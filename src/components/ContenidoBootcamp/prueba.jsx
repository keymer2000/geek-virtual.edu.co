import React from 'react'
import './../../styles/ContBootcamp/BootcampMain.css'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Evidence from './../ContenidoBootcamp/Evidence'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus, faFileCode} from "@fortawesome/free-solid-svg-icons";

function BootcampMain() {
    return (
        <div className="container-fluid">

            <BrowserRouter>
                <div className="row" >
                    <section className="col- border" id="menu-lateral-de-tareas" >
                        <ul>
                            <li style={{listStyle:"none"}}><FontAwesomeIcon icon={faFolderPlus} style={{fontSize:"20px"}}/>
                                <Link to="#" style={{color:"black"}} >RETOS DE FORMACIÓN</Link>
                                <ul>
                                    <li style={{listStyle:"none"}}><FontAwesomeIcon icon={faFolderPlus} style={{fontSize:"20px"}}/><Link to="#" className="estilos-entregas">Entregas FCC  Web 1-2</Link>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="/Evidence/prueba">Página tributo</Link></li>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="/Evidence/prueba1">Formulario de encuesta</Link></li>
                                        </ul>
                                    </li>
                                    <li style={{listStyle:"none"}}><FontAwesomeIcon icon={faFolderPlus} style={{fontSize:"20px"}}/><Link to="#" className="estilos-entregas">Entregas FCC  Web 3-4-5</Link>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="#">Página de destino del producto</Link></li>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="#">Página de documentación técnica</Link></li>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="#">Página web portafolio personal</Link></li>
                                        </ul>
                                    </li>
                                    <li style={{listStyle:"none"}}><FontAwesomeIcon icon={faFolderPlus} style={{fontSize:"20px"}}/><Link to="#" className="estilos-entregas">Entrega GitBook Web</Link>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="#">Retos Introdución a la Web</Link></li>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="#">Retos Fundamentos de programacion Parte I</Link></li>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="#" className="estilos-entregas">Retos Fundamentos de programacion Parte II</Link></li>
                                        </ul>
                                    </li>
                                    <li style={{listStyle:"none"}}><FontAwesomeIcon icon={faFolderPlus} style={{fontSize:"20px"}}/><Link to="#" className="estilos-entregas">Entregas FCC JavaScript</Link>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="#">Comprobador de palindrome</Link></li>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="#">Convertidor de números romanos</Link></li>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="#">Cifrado de Caesars</Link></li>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="#">Validador de números de teléfonos</Link></li>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="#">Caja Registradora</Link></li>
                                        </ul>
                                    </li>
                                    <li style={{listStyle:"none"}}><FontAwesomeIcon icon={faFolderPlus} style={{fontSize:"20px"}}/><Link to="#" className="estilos-entregas">Entregas FCC Bibliotecas Front-end</Link>
                                        <ul>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="#">Maquína de cotizaciones al azar</Link></li>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="#">Visor de Markdown</Link></li>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="#">Caja de Ritmos</Link></li>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="#">Calculadora de JavaScript</Link></li>
                                            <li><FontAwesomeIcon icon={faFileCode} /><Link to="#">Reloj 25 + 5</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section className="col- border" id="menu-central-de-tareas">
                        <Switch>
                            <Route path="/Evidence/prueba" exact render={(props) => <Evidence {...props} />}></Route>
                            <Route path="/Evidence/prueba1" exact render={(props) => "hola mundo 1"}></Route>
                        </Switch>
                    </section>
                </div>
            </BrowserRouter>
        </div>

    )
}

export default BootcampMain
