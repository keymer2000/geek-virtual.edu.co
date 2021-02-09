import React, { Component } from 'react'
import './../../styles/login/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import desktop from '../../img/desktop.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faUser, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

const url = "https://fuente-de-datos-geek-virtual-git-master.keymer2000.vercel.app/usuarios";
class Login extends Component {
    state = {
        form: {
            username: '',
            password: ''
        }
    }
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });

    }
    iniciarSesion = async () => {
        axios.get(`${url}?username=${this.state.form.username}&password=${this.state.form.password}`)
            .then(response => {
                console.log(response.data);
                return response.data;
                // this.props.history.push("/Posts") 

            })
            .then(response => {
                if (response.length > 0) {
                    // alert('bienvenido: '+`${response.username}`)
                    window.location.href = "/Posts"
                } else {
                    alert("El usuario o la contraseña no son correctos")
                }

            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="container-fluid" id="cont-principal-estudiantes">
                <div className="row p-3" id="cont-secundario"  >
                    <div className="col-lg-6 ">
                        <div id="cont-imagen-login" >
                            <img className="img-fluid p-5 mt-5" src={desktop} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 p-3">
                                <div id="cont-form-estudiantes">
                                    <h3 className="title-login-estudiantes">LOG IN</h3>
                                    <div className="text-center mt-3">
                                        <FontAwesomeIcon icon={faUserCircle} id="icon-login" />
                                    </div>
                                    <div className="cont-form-group-estudiantes ">
                                        <label className="label-estudiantes">Username:</label>
                                        <div className="group-icon-input-estudiantes">
                                            <FontAwesomeIcon className="iconos-login-input" icon={faUser}></FontAwesomeIcon>
                                            <input className="input-login-estudiantes" type="text" name="username" placeholder="Username" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="cont-form-group-estudiantes ">
                                        <label className="label-estudiantes">Password:</label>
                                        <div className="group-icon-input-estudiantes">
                                            <FontAwesomeIcon className="iconos-login-input" icon={faUnlockAlt}></FontAwesomeIcon>
                                            <input className="input-login-estudiantes" type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                    <button className="button-login-estudiantes " onClick={() => this.iniciarSesion()}>Iniciar Sesión</button>
                                    </div>
                                    
                                </div>

                            
                        
                    </div>
                </div>
            </div>

        )
    }
}

export default Login
