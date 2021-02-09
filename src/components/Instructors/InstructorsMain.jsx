import React, { Component } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import perfil from '../../img/perfil.jpg'

const url = "https://fuente-de-datos-geek-virtual-git-master.keymer2000.vercel.app/instructores";


class InstructorsMain extends Component {
    state = {
        data: []
    }

    peticionGet = () => {
        axios.get(url).then(response => {
            this.setState({ data: response.data });
        })
    }

    componentDidMount() {
        this.peticionGet();
    }
    render() {
        return (
            <div className="mt-4" style={{ width: "88%", margin: "auto" }}>
                <h1 className="text-center mb-4" style={{ fontFamily: "Georgia" }}>Instructores</h1>
                {this.state.data.map((instructor, i) => {
                    return (
                        <div key={i} className="col-lg-4" style={{ display:"inline-grid", justifyContent:"center" }}>
                            <div  className="card text-center  mb-4" >
                            <img
                                className="img-fluid "
                                src={instructor.foto}
                                alt="Card image cap"
                                style={{ width: "250px", height: "250px", margin:"auto" }}
                            />

                            <div className="card-body">
                                <div>
                                    <h5 className="card-title">
                                    {`${instructor.primer_nombre}
                                    ${instructor.segundo_nombre}
                                    ${instructor.primer_apellido}
                                    ${instructor.segundo_apellido}`}
                                    </h5>
                                    <p className="card-text">{instructor.descripcion}</p>
                                </div>

                            </div>
                            <div className="card-footer">

                            </div>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default InstructorsMain


// return (
//     <div className="mt-4" style={{width:"88%", margin:"auto"}}>
//         <h1 className="text-center mb-4" style={{fontFamily:"Georgia"}}>Instructores</h1>
//         <div className="card-columns">
//             {this.state.data.map((instructor, i) =>{
//                 return(
//                 <div key={i} className="card text-center">

//                         <img 
//                             className="img-fluid mt-1" 
//                             src={instructor.foto} 
//                             alt="Card image cap"
//                             style={{ width:"250px", height:"250px"}} 
//                         />

//                     <div className="card-body">
//                         <div>
//                         <h5 className="card-title">
//                             {`${instructor.primer_nombre}
//                             ${instructor.segundo_nombre}
//                             ${instructor.primer_apellido}
//                             ${instructor.segundo_apellido}`}
//                         </h5>
//                         <p className="card-text">{instructor.descripcion}</p>
//                         </div>

//                     </div>
//                     <div className="card-footer">

//                     </div>
//                 </div>
//                 )
//             })}        
//         </div>
//     </div>
// )