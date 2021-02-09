import React, { Component } from 'react'
import LogoAG from './imagenes/LogoAG.jpg'
import LogoGV from './imagenes/LogoGV.png'
import Frontend from './imagenes/frontend.jpg'
import Backend from './imagenes/backend.jpg'
import Nosotros from './imagenes/nosotros.jpg'

import "../../styles/Home/home.css";
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Carrousel from './Carrousel'

class Home extends Component {

    iniciarSesionEstudiantes = () => {
        window.location = "/Login"
    }

    iniciarSesionInstructores = () => {
        window.location = "/LoginInstructores"
    }


    render() {
        return (
            <div>
                <header className="container-fluid cont-header " style={{ height: "100px" }}>
                    <div className="row " style={{ height: "100%" }}>
                        <div className="col-9 ">
                            <div className="row" style={{ height: "100%" }}>
                                <div className="col-4 pr-0 ">
                                    <div id="cont-logo-gv" >
                                        <img className="img-fluid  " src={LogoGV} alt="" />
                                    </div>
                                </div>
                                <div className="col-4 ">
                                    <div id="cont-logo-ag" >
                                        <img className="img-fluid  " src={LogoAG} alt="" style={{ maxHeight: "90px", opacity: "0.4" }} />
                                    </div>
                                </div>
                                <div className="col-4  ">
                                </div>
                            </div>
                        </div>
                        <div id="contenedor-general" className="col-3  ">
                            <div id="cont-login" className="btn-group  mt-4 mr-4 float-right">
                                <p id="login" className="dropdown-toggle mb-0 pt-1 pl-3 pb-1 pr-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    LOG IN
                                </p>
                                <div className="dropdown-menu border dropdown-menu-right p-2 mt-2">
                                    <button className="btn btn-primary dropdown-button " href="#" style={{ width: "100%", fontWeight: "bold" }} onClick={() => this.iniciarSesionEstudiantes()} >ESTUDIANTES</button>

                                    <button className="btn btn-info dropdown-button mt-2" href="#" style={{ width: "100%", fontWeight: "bold" }} onClick={() => this.iniciarSesionInstructores()}>INSTRUCTORES</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div>
                    <Carrousel></Carrousel>
                </div>
                <div className="mt-4 text-center cont-tu-plataforma">
                    <h4>GEEK VIRTUAL TU PLATAFORMA DE APRENDIZAJE EN LÍNEA </h4>
                </div>
                <div className="container mt-4 ">
                    <div className="row mb-2" >
                        <div className="col-12 text-center">
                            <h4>¿Quiénes somos?</h4>
                        </div>
                    </div>
                    <div className="row m-auto" style={{ width: "60%" }}>
                        <div className="col-lg-8  text-justify">
                            <p className="p-2">
                                Somos Una academia de código y programación promovida por una alianza entre Makaia, Agile Innova y E-volution, tres organizaciones que trabajan con tecnología, innovación y soluciones digitales que han decidido compartir conocimiento y promover la formación de talento TI.
                            </p>
                        </div>
                        <div className="col-lg-4 ">
                            <img className="img-fluid" src={Nosotros} alt="" />
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-4">
                            <img className="img-fluid" src={Nosotros} alt="" />
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <p>
                                Somos Una academia de código y programación promovida por una alianza entre Makaia, Agile Innova y E-volution, tres organizaciones que trabajan con tecnología, innovación y soluciones digitales que han decidido compartir conocimiento y promover la formación de talento TI.
                                </p>
                            </div>
                        </div>
                        <div className="col-4">

                        </div>
                    </div> */}
                </div>
                <hr/>
                <div className="mt-4">
                    <div className="text-center "><h3>APRENDE CON NOSOTROS</h3></div>
                    <div className="container mt-4">
                        <div className="row" >
                            <div className="col-12 cont-aprendizaje">
                                <div className="row">
                                    <div className="col-lg-2 ">
                                        <img className="img-fluid p-2" src={Frontend} alt="" />
                                    </div>
                                    <div className="col-lg-10 ">
                                        <div className="row p-2">
                                            <div className="col-12"><h3>Línea 1: Desarrollo Web / Mobile Frontend</h3></div>
                                            <div className="col-12"><p>Adquiere competencias para realizar maquetado de interfaces gráficas para aplicaciones web utilizando HTML-CSS, bootstrap, material design, haciendo énfasis en Javascript. Así mismo realizará el desarrollo de interfaces gráficas para dispositivos móviles utilizando ReactNative.</p></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 cont-aprendizaje mt-4">
                                <div className="row">
                                    <div className="col-lg-2  ">
                                        <img className="img-fluid p-2" src={Backend} alt="" />
                                    </div>
                                    <div className="col-lg-10  ">
                                        <div className="row p-2">
                                            <div className="col-12"><h3>Línea 2: Desarrollo Web Backend con orientación Javascript</h3></div>
                                            <div className="col-12"><p>Adquiere competencias para programar funciones, procedimientos o aplicaciones que procesen información del lado del servidor, utilizando tecnologías como: NodeJS, MongoDB, GRAPHQL y Firebase.</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="text-center border border-primary mt-5" style={{backgroundColor:"#0912f6", color:"white"}}>
                        <p className="pt-2">Todos los derechos reservados © 2021 - design by <strong><u>Keymer Jimenez</u> </strong></p> 
                </div>
            </div>
        )
    }

}


export default Home