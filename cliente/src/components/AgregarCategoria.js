import React , {useState} from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';


function AgregarCategoria({history , guardarRecargarCategorias}){

    // State
    //const [nombrePlatillo, guardarNombre ] = useState('');
    const [descripcion, guardarDescripcion ] = useState('');
    // const [precioPlatillo, guardarPrecio ] = useState('');
    const [descripcion_larga, guardarDescripcionLarga ] = useState('');
   // // const [Categoria, guardarCategoria ] = useState('');
    const [error, guardarError] = useState(false);

    const AgregarCategoria = async e => {
        e.preventDefault();
        
        if(descripcion==='' || descripcion_larga===''){
            guardarError(true);
            return;
        }

        guardarError(false);

        try{
            const resultado = await axios.post('http://localhost:3005/administracion/muestracategorias/', {
                descripcion,
                descripcion_larga
            })
            
            if(resultado.status === 200){
                console.log(resultado);
                Swal.fire(
                    'Categoria Creada!',
                    'La categoria se creo correctamente',
                    'success'
                  )
                  guardarRecargarCategorias(true);
                  history.push('./categorias');
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error al intentar crear la categoria'
            })
        }

    }

    return (
        <div className="col-md-8 mx-auto">
            <div className="col-md-8 mx-auto ">
                <h1 className="text-center">Agregar una Nueva Categoria</h1>

                {(error) ?  <Error mensaje="Todos los campos son obligatorios" /> : null}

                <form
                    className="mt-5"
                    onSubmit={AgregarCategoria}
                >
                    <div className="form-group">
                        <label>Nombre de la Categoria</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="categoria" 
                            autoFocus="true"
                            placeholder="Nombre Categoria"
                            onChange={e => guardarDescripcion(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Descripción</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="descripcionlarga"
                            placeholder="Descripción"
                            onChange={e => guardarDescripcionLarga(e.target.value)}
                        />
                    </div>

                    <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Categoria" />
                </form>
            </div>
        </div>
    )

}

export default withRouter(AgregarCategoria);