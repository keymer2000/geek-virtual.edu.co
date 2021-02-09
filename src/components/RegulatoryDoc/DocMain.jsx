import React from 'react'
import './../../styles/RegulatoryDoc/documentacion.css'
import FormularioDoc from './FormularioDoc'

export default function DocMain() {
    return (
        <div className="container-fluid">
            <div className="mt-4">
                <h1>Documentación Reglamentaria</h1>
                <p className="mt-3" >
                    Descargar las autorizaciones y actas de compromiso, leerlas y firmarlas. Una vez diligenciadas adjuntarlas a la plataforma
                </p>
            </div>
            <table className="mt-5 mb-5 text-center " style={{ width: "80%", margin: "auto" }}>
                <tbody  >
                    <tr className="border ">
                        <td>
                            <h4>Autorizacion de datos personales</h4>
                        </td>
                        <td>
                            <iframe src="https://drive.google.com/file/d/13190g8-PRvgep5PtKkjK3SVuD6b1Pret/preview" width="300" height="200"></iframe>
                        </td>
                    </tr>
                    <tr className="border ">
                        <td>
                            <h4>Autorizacion de uso de imagen</h4>
                        </td>
                        <td>
                            <iframe src="https://drive.google.com/file/d/1P4w32PMQ6RRwsfl3xxZoP7htf4TVfJxV/preview" width="300" height="200"></iframe>
                        </td>
                    </tr>
                    <tr className="border ">
                        <td>
                            <h4>Acta de compromiso de recepción de beca</h4>
                        </td>
                        <td>
                            <iframe src="https://drive.google.com/file/d/1IhaJ838eg4pouK2i8he1JBU3lfxcgYT2/preview" width="300" height="200"></iframe>
                        </td>
                    </tr>
                    <tr>
                        
                    </tr>
                </tbody>
                
                
            </table>
            <div className="mb-5" style={{ width: "80%", margin: "auto" }}>
                <FormularioDoc></FormularioDoc>
                    {/* <form >
                        <div class="custom-file">
                            <input type="file" id="validatedCustomFile1" required />
                            <label class="custom-file-label" for="validatedCustomFile1">Adjuntar Autorizacion de datos personales...</label>
                        </div>
                        <br/>
                        <br/>
                        <div class="custom-file">
                            <input type="file" id="validatedCustomFile2" required />
                            <label class="custom-file-label" for="validatedCustomFile2">Adjuntar Autorizacion de uso de imagen...</label>
                        </div>
                        <br/>
                        <br/>
                        <div class="custom-file">
                            <input type="file" id="validatedCustomFile3" required />
                            <label class="custom-file-label" for="validatedCustomFile3">Adjuntar Acta de compromiso de recepción de beca...</label>
                        </div>
                    </form> */}
                </div>

        </div>
    )
}
