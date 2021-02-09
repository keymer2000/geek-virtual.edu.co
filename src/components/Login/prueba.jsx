// // import React, { Component } from 'react'
// // import './../../styles/login/login.css'
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import  axios from "axios";


// // const baseUrl="http://localhost:3001/usuarios";

// // class Login extends Component {
// //     state={
// //         form:{
// //             username: '',
// //             password: ''
// //         }
        
// //     }

// //     handleChange=async e=>{
// //        await this.setState({
// //             form:{
// //                 ...this.state.form,
// //                 [e.target.name]: e.target.value
// //             }

// //         });
        
        
// //     }

// //     iniciarSesion=async()=>{
// //         await axios.get(baseUrl, {params: {username: this.state.form.username, password: this.state.form.password}})
// //         .then(response=>{
// //             return response.data;
// //             // this.props.history.push("/Posts") 
// //         })
// //         .then(response=>{
// //             if(response.length>0){
// //                 window.location.href="/Posts"
// //             }else{
// //                 alert("El usuario o la contraseña no son correctos")
// //             }
            
// //         })
        
// //         .catch(error=>{
// //             console.log(error)
// //         })
// //     }

// //     render() {
// //         return (
// //             <div className="containerPrincipal">
// //                <div className="containerSecundario">
// //                    <div className="form-group">
// //                         <label htmlFor="">Usuario: </label>
// //                         <br/>
// //                         <input type="text" className="form-control" name="username" placeholder="USERNAME" 
// //                         onChange={this.handleChange} />
// //                         <br/>
// //                         <label htmlFor="">Contraseña: </label>
// //                         <br/>
// //                         <input type="password" className="form-control" name="password" placeholder="PASSWORD"
// //                         onChange={this.handleChange} />
// //                         <br/>
// //                         <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
// //                    </div>

// //                </div>
// //             </div>
// //         )
// //     }
// // }

// // export default Login



// *******************************************************************************



// // ESTE CODIGO ABRE LA VENTANA MODAL CON REACT-BOOTSTRAP

// import React from 'react'
// import './../../styles/geekmain/posts.css'
// import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell } from "@fortawesome/free-solid-svg-icons";
// // import { faFacebook } from "@fortawesome/free-brands-svg-icons"; ESTE PERTENE A LOS ICONOS DE MARCAS

// const url2="http://localhost:3001/usuarios";

// class Posts extends React.Component {
//     state={
//         data:[]
//     }


//     peticionGet=()=>{
//         axios.get(url2).then(response=>{
//         this.setState({data: response.data});
//         console.log(response.data)
//         })
//     }

//     componentDidMount(){
//         this.peticionGet();
//     }

//     // handleChange=async e=>{
//     //     e.persist();
//     //     await this.setState({
//     //         form:{
//     //             ...this.state.form,
//     //             [e.target.name]: e.target.value
//     //         }
//     //     });
//     //     console.log(this.state.form);
//     // }

//     render() {
//         return (
//             //revisar el tamaño del panel central que esta en el estilo de dashboard.css el cual tiene como id cont-anuncios -- lo defini con un tamaño de 80%
//             <div className="border border-primary" style={{height:"100%"}}>
//                 <div id="cont-title-geek" className="border">
//                     <h1 id="title-geek">Academia Geek</h1>
//                 </div>
//                 <br />
//                 <div className="border" style={{ display: "flex" }} >
//                     <h1 style={{ marginLeft: "10px" }}>
//                         <FontAwesomeIcon icon={faBell} style={{ color: "f0f3", marginRight: "10px" }} />Anuncios</h1>
//                         <button 
//                             className="btn btn-warning" 
//                             style={{ 
//                                 fontWeight: "900", 
//                                 margin: "auto", 
//                                 fontSize: "25px", 
//                                 fontFamily: "sans-serif", 
//                                 width: "35%", 
//                                 color: "black" }}>
//                             <u>Clic para crear anuncio</u>
//                         </button>
//                 </div>
//                 <br/>
//                 <br/>
//                 <br/>
//                 <table className="table text-center" style={{width:"60%",margin:"auto"}}>
//                     <thead className="table">
//                         <tr>
//                             <th><h1>Anuncios</h1></th>
//                         </tr>
//                     </thead>
//                 </table>
//                 <tbody>
//                     {this.state.data.map(anuncio=>{
//                         return(
//                             <tr>
//                                 <td>{anuncio.textAnucio}</td>
//                             </tr>
                            
//                         )
//                     })}

//                 </tbody>
               
//                 {/* <form action="" className="form-group" >
//                             <textarea 
//                             name="textAnuncio"
//                             cols="63" rows="8" 
//                             placeholder="Escriba su anuncio..." 
//                             />
//                         </form> */}

// //             </div>

//         )
//     }
// }

// export default Posts