import React  from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function ActividadLista({actividad , guardarRecargarActividades}){

    const eliminarActividad = id_actividad => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Actividad eliminada",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText : 'Cancelar'
          }).then( async (result) => {
            if (result.value) {
                try {
                    const url = `http://localhost:3005/administracion/muestraactividades/${id_actividad}`
                    const resultado = await axios.delete(url);
    
                    if(resultado.status === 200) {
                        Swal.fire(
                            'Eliminado!',
                            'La actividad se ha eliminado',
                            'success'
                            );
                        guardarRecargarActividades(true);
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        type: 'error',
                        title: 'Error',
                        text: 'Hubo un error al intentar eliminar la actividad'
                    })
                }
            }
          })
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <p> 
                {actividad.descripcion_actividad}
                <span className="font-weight-bold"> ${actividad.precio} </span> 
            </p>
            <div>
                <Link
                    to={`/actividades/editar/${actividad.id_actividad}`}
                    className="btn btn-success mr-2"    
                >
                        Editar
                </Link>

                <button type="button" className="btn btn-danger" 
                        onClick={() => eliminarActividad(actividad.id_actividad)}>
                        Eliminar &times;
                </button>

            </div>
        </li>
    )
}

export default ActividadLista;