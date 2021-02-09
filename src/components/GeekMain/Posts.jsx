import React, { Component } from 'react';
import './../../styles/geekmain/posts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"; ESTE PERTENE A LOS ICONOS DE MARCAS

const url = "https://fuente-de-datos-geek-virtual.keymer2000.vercel.app/anuncios"

class Posts extends Component {
    state = {
        data: [],
        modalInsertar: false,
        form: {
            textAnuncio: '',
            anuncio: ''
        }
    }

    modalInsertar = () => {
        this.setState({ modalInsertar: !this.state.modalInsertar })
    }

    peticionGet = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data });
        })
    }

    peticionPost = async () => {
        await axios.post(url, this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value

            }
        });
        // console.log(this.state.form);
    }

    componentDidMount() {
        this.peticionGet();
        
    }

    render() {
        const { form } = this.state;
        return (
            <div>
                <div id="cont-title-geek" className="border">
                    <h1 id="title-geek">Academia Geek</h1>
                </div>
                <br />
                <div className="border" id="cont-icon-anuncio-boton" >
                    <h1 id="title-anuncio"><FontAwesomeIcon icon={faBell} id="icon-anuncio" />Anuncios</h1>
                    <button className="btn btn-warning" id="boton-modal-anuncio" onClick={() => this.modalInsertar()}><u>Clic para crear anuncio</u></button>
                </div>
                <br />
                <br />
                <br />
                <div style={{ width: "100%" }}>
                    {this.state.data.map((anuncio, i) => {
                        return (
                            <div id="cont-fila-anuncio" className="border-top border-dark" key={i} style={{ height: "450px" }} >
                                <div className="" id="area-anuncio">
                                    <p>{anuncio.textAnuncio}</p>
                                    <p><u>{anuncio.enlace}</u></p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>

                    </ModalHeader>
                    <ModalBody>
                        <div>
                            <form action="" >
                                <textarea name="textAnuncio" value={form.textAnuncio} id="" cols="63" rows="8" placeholder="Escriba su anuncio..." onChange={this.handleChange}></textarea>
                                <input type="text" name="enlace" value={form.enlace} placeholder="Adjunte enlace:" style={{width:"100%"}} onChange={this.handleChange} />
                                
                            </form>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-danger" onClick={() => this.modalInsertar()}>Cancelar</button>
                        <button className="btn btn-success" onClick={() => this.peticionPost()}>Insertar</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

export default Posts