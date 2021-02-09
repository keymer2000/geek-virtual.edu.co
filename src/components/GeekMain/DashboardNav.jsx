import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './../../styles/geekmain/dashboard.css'
import logoMakaia from './../../img/logoMakaia.jpg'
import logoAgile from './../../img/logoAgile.png'
import logoEvolution from './../../img/logoEvolution.jpg'
// import Posts from './../GeekMain/Posts';

export default function DashboardNav(props) {
    return (
        <div className="container-fluid mt-4 border border-dark">
            <div className="row">
                <section className="col- border border-dark" id="cont-navegador">
                    <nav className="" >
                        <ul className="nav nav-tabs" id="navegador">
                            <li className="nav-item "><Link className={"nav-link"+(props.match.path=="/Posts"?" active": "")}to="Posts">Anuncios</Link></li>
                            <li className="nav-item"><Link className={"nav-link"+(props.match.path=="/BootcampMain"?" active": "")} to="/BootcampMain">Contenido del bootcamp</Link></li>
                            <li className="nav-item "><Link className={"nav-link"+(props.match.path=="/ForumMain"?" active": "")}   to="/ForumMain">Foro Social</Link></li>
                            <li className="nav-item "><Link className={"nav-link"+(props.match.path=="/TaskMain"?" active": "")}   to="/TaskMain">Tareas</Link></li>
                            <li className="nav-item "><Link className={"nav-link"+(props.match.path=="/Cronograma-general"?" active": "")}   to="/Cronograma-general">Cronograma General</Link></li>
                            <li className="nav-item"><Link className={"nav-link"+(props.match.path=="/DocMain"?" active": "")} to="/DocMain">Documentación reglamentaria</Link></li>
                            <li className="nav-item"><Link className={"nav-link"+(props.match.path=="/ParticipantsMain"?" active": "")} to="/ParticipantsMain">Estudiantes</Link></li>
                            <li className="nav-item"><Link className={"nav-link"+(props.match.path=="/InstructorsMain"?" active": "")} to="/InstructorsMain">Instructores</Link></li>
                        </ul>
                    </nav>
                    <hr/>
                    <div  id="cont-colaboradores">
                        <div id="cont-img" className="text-center mt-4">
                        <h3>Fundadores</h3>
                            <div className=" border">
                                <a href="" alt=""><img className=" img-fluid" src={logoMakaia} alt="" width="150px" /></a>
                            </div>
                            <div className=" border">
                                <a href="" alt=""><img className=" img-fluid" src={logoAgile} alt="" width="150px" /></a>
                            </div>
                            <div className=" border">
                                <a href="" alt="">
                                    <img className="mt-3 img-fluid" src={logoEvolution} alt="" width="150px" />
                                </a>
                                <h3 className="mb-3" style={{color:"blue"}}>Evolution</h3>
                                
                            </div>
                        </div>
                    </div>
                </section>
                {/* estructura de la sesion de anuncios */}
                <section  id="cont-anuncios">
                    {React.createElement (props.contentComponent, props)}
                </section>
            </div>
        </div>

    )
}
