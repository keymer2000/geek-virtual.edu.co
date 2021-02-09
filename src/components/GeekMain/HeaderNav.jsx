import React, {Component} from 'react';
import '../../../src/styles/geekmain/header.css'
import perfil from '../../img/perfil.jpg'
import LogoGV from '../../img/LogoGV.png'


class HeaderNav extends Component {
    
    cerrarSesion = async () => {
        // alert('saliendo....')
        window.location.href = "/Home"
   }
    
    render(){
    return (
    <header className="container-fluid ">
        <div className="row " id="cont-header">
            <div className="col-lg-7 " >
                <img className="img-fluid" src={LogoGV} alt="" style={{width:"280px", height:"50px"}} />
            </div>
            <div className="col-lg-5 ">
                <div className="row" style={{height:"100%"}}>
                    <div className="col-2 p-1 border-right "  >
                        <div className="row float-right"  style={{width:"50px"}}>
                            <img className="pr-1 mt-1" style={{maxWidth:"40px"}} src={perfil} alt="perfil.jp" />
                        </div>
                    </div>
                    <div className="col-7 border-right " >
                        <div className="row pl-1">
                            <p className="ml-2 mt-2" style={{color:"white"}} >KEYMER ALEXANDER JIMENEZ JEREZ</p>
                        </div>
                    </div>
                    <div className="col-3 " >
                        <div className="row pl-1">
                            <button className="btn btn-danger mt-1 " onClick={()=>this.cerrarSesion()} >Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
                
            </div>    
        </div>  
    </header>

    )
    }
}

export default HeaderNav;

