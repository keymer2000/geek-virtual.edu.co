import React, { Component } from 'react'
import './logininstructores.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import desktop from '../../img/desktop.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

const baseUrl = "https://fuente-de-datos-geek-virtual-git-master.keymer2000.vercel.app/instructores";

class LoginInstructores extends Component {
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
        // console.log(this.state.form);
    }
    iniciarSesionInstructores =  () => {
         axios.get(baseUrl, {params: {username: this.state.form.username, password: this.state.form.password}})
        .then(response=>{
            console.log(response.data);
            this.props.history.push("/AdministradorMain") 
        })
            // .then(response => {
            //     if (response.data > 0) {
            //         alert('bienvenido:')
            //         window.location.href = "/AdministradorMain"
            //     } else {
            //         alert("El usuario o la contraseña no son correctos")
            //     }
            // })
            .catch(error => {
                console.log(error);
            })
    }



    cerrarSesion = async () => {
        // alert('saliendo....')
        window.location.href = "/Home"
    }

    render() {
        return (
            <div id="cont-general-instructores">
                <div className="cont-login-form">
                    <h2 className="title-login">LOG IN</h2>
                    <div className="mt-lg-3 text-center ">
                        <img style={{width:"280px"}} className="img-fluid " src={desktop} alt=""/>
                    </div>
                    <div className="form-group" >
                        <div className="cont-form-group">
                            <label className="label">Username:</label>
                            <div className="group-icon-input">
                                <FontAwesomeIcon className="iconos" icon={faUser}></FontAwesomeIcon>
                                <input className="input-login" type="text" name="username"  placeholder="Username"  onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="cont-form-group">
                            <label className="label">Password:</label>
                            <div className="group-icon-input">
                                <FontAwesomeIcon className="iconos" icon={faUnlockAlt}></FontAwesomeIcon>
                                <input className="input-login" type="password" name="password"  placeholder="Password"  onChange={this.handleChange} />
                            </div>
                        </div>
                        {/* <div class="cont-form-group">
                            <div class="form-check">
                                <input className="input-login" class="form-check-input" type="checkbox" id="gridCheck" />
                                <p class="form-check-label" for="gridCheck">Recordar Contraseña</p>
                            </div>
                        </div> */}
                        <button className="button-login mt-3" onClick={() => this.iniciarSesionInstructores()}  >Iniciar Sesión</button>    
                    </div>
                
                </div>
            </div>
            
        )
    }
}

export default LoginInstructores
