import React , {useState} from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';


function AgregarActividad({history , guardarRecargarActividades}){

    const [descripcion_actividad, guardarDescripcion ] = useState('');
    const [precio, guardarPrecio ] = useState('');
    const [error, guardarError] = useState(false);

    const AgregarActividad = async e => {
        e.preventDefault();
        
        if(descripcion_actividad==='' || precio===''){
            guardarError(true);
            return;
        }

        guardarError(false);

        try{
            const resultado = await axios.post('http://localhost:3005/administracion/muestraactividades/', {
                descripcion_actividad,
                precio
            })
            
            if(resultado.status === 200){
                console.log(resultado);
                Swal.fire(
                    'Actividad Creada!',
                    'La actividad se creo correctamente',
                    'success'
                  )
                  guardarRecargarActividades(true);
                  history.push('./actividades');
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error al intentar crear la actividad'
            })
        }

    }

    return (
        <div className="col-md-8 mx-auto">
            <div className="col-md-8 mx-auto ">
                <h1 className="text-center">Agregar una Nueva Actividad</h1>

                {(error) ?  <Error mensaje="Todos los campos son obligatorios" /> : null}

                <form
                    className="mt-5"
                    onSubmit={AgregarActividad}
                >
                    <div className="form-group">
                        <label>Nombre de la Actividad</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="descripcion_actividad" 
                            autoFocus="true"
                            placeholder="Nombre Actividad"
                            onChange={e => guardarDescripcion(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Descripción</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="precio"
                            placeholder="precio"
                            onChange={e => guardarPrecio(e.target.value)}
                        />
                    </div>

                    <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Actividad" />
                </form>
            </div>
        </div>
    )

}

export default withRouter(AgregarActividad);