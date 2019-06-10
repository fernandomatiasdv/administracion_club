import React  from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function EmpadronamientosLista({empadronamiento , guardarRecargarEmpadronamientos}){

    const eliminarEmpadronamientos = id_empadronamiento => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Eliminado",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText : 'Cancelar'
          }).then( async (result) => {
            if (result.value) {
                try {
                    const url = `http://localhost:3005/datosbasicos/muestraempadronamiento/${id_empadronamiento}`
                    const resultado = await axios.delete(url);
                    console.log('EmpadronamientosLista.js - resultado.status ' + resultado.status);
                    if(resultado.status === 200) {   
                        Swal.fire(
                            'Eliminado!',
                            'Se ha eliminado con éxito',
                            'success'
                        )
                        console.log('EmpadronamientosLista.js - guardarRecargarEmpadronamientos  ')
                        guardarRecargarEmpadronamientos(true);
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        type: 'error',
                        title: 'Error',
                        text: 'Hubo un error al intentar eliminar los datos'
                    })
                }
            }
          }
        )
    }

    return (
        <tr>
            <td> {empadronamiento.nombre} </td>
            <td> {empadronamiento.apellido} </td>
            <td> {empadronamiento.dni} </td>
            <td> {empadronamiento.descripcion} </td>
            <td>
      
                 <Link 
                    to={`http://localhost:3005/empadronamientoactividades/visualizar/${empadronamiento.id_empadronamiento}`}
                    className="btn btn-info">
                        Actividades
                </Link>

            </td>
            <td>  </td>
            <td>
                <Link
                    to={`/empadronamientodetalles/visualizar/${empadronamiento.id_empadronamiento}`}
                    className="btn btn-warning"    
                >
                        Detalles
                </Link>
            </td>
            <td>
                <Link
                    to={`http://localhost:3005/empadronamiento/editar/${empadronamiento.id_empadronamiento}`}
                    className="btn btn-success"    
                >
                        Editar
                </Link>
            </td>
            <td>
                <button type="button" className="btn btn-danger" 
                        onClick={() => eliminarEmpadronamientos(empadronamiento.id_empadronamiento)}>
                        Eliminar &times;
                </button>
            </td>
        </tr>
    )
}

export default EmpadronamientosLista;