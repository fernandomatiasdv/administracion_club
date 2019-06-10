import React , {useState , useRef} from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';

function EditarActividades({history, actividad, guardarRecargarActividades}){

   // const {history, categoria, guardarRecargarCategorias} = props;

    const descripcionRef = useRef('');
    const precioRef = useRef('');
    const [error, guardarError] = useState(false);
    
    const editarActividad = async e => {
        e.preventDefault();

        const nuevaActividad =  descripcionRef.current.value,
              nuevoPrecio = precioRef.current.value;
        
        if(nuevaActividad === '' || nuevoPrecio === '' ){
            guardarError(true);
            return;
        }

        guardarError(false);

        const editarActividad = {
            descripcion_actividad: nuevaActividad,
            precio: nuevoPrecio
        }

        const url = `http://localhost:3005/administracion/muestraactividades/${actividad.id_actividad}`;
        try {
            const resultado = await axios.put(url, editarActividad);
            if(resultado.status === 200){
                Swal.fire(
                    'Actividad Modificada!',
                    'La actividad se modifico correctamente',
                    'success'
                  )
                  guardarRecargarActividades(true);
                  history.push('/actividades');
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error al intentar modificar la actividad'
            })
        }
    }
    
    return (
        <div className="col-md-8 mx-auto">
            <div className="col-md-8 mx-auto ">
                <h1 className="text-center">Editar Actividad</h1>
                {(error) ?  <Error mensaje="Todos los campos son obligatorios" /> : null}

                <form
                    className="mt-5"
                    onSubmit={editarActividad}
                >
                    <div className="form-group">
                        <label>Nombre de la Actividad</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="nombre" 
                            placeholder="Nombre Actividad"
                            autoFocus="true"
                            ref={descripcionRef}
                            defaultValue={actividad.descripcion_actividad}
                        />
                    </div>

                    <div className="form-group">
                        <label>Precio</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="descripcionlarga"
                            placeholder="Precio"
                            ref={precioRef}
                            defaultValue={actividad.precio}
                        />
                    </div>


                    <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Editar Precio" />
                </form>
            </div>
        </div>
    )

}

export default withRouter(EditarActividades);