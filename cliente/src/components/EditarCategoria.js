import React , {useState , useRef} from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';

function EditarCategoria({history, categoria, guardarRecargarCategorias}){

   // const {history, categoria, guardarRecargarCategorias} = props;

    //const precioPlatilloRef = useRef('');
    //const nombrePlatilloRef = useRef('');    
    const descripcionRef = useRef('');
    const descripcionlargaRef = useRef('');

    const [error, guardarError] = useState(false);
    //const [Categoria, guardarCategoria ] = useState('');

    const editarCategoria = async e => {
        e.preventDefault();

        const nuevaCategoria =  descripcionRef.current.value,
              nuevaCategoriaLarga = descripcionlargaRef.current.value;
        
        if(nuevaCategoria === '' || nuevaCategoriaLarga === '' ){
            guardarError(true);
            return;
        }

        guardarError(false);

        const editarCategoria = {
            descripcion: nuevaCategoria,
            descripcion_larga: nuevaCategoriaLarga
        }

        const url = `http://localhost:3005/administracion/muestracategorias/${categoria.id_categoria}`;
        try {
            const resultado = await axios.put(url, editarCategoria);
            if(resultado.status === 200){
                Swal.fire(
                    'Categoria Modificada!',
                    'La categoria se modifico correctamente',
                    'success'
                  )
                  guardarRecargarCategorias(true);
                  history.push('/categorias');
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error al intentar modificar la categoria'
            })
        }
    }
    
    return (
        <div className="col-md-8 mx-auto">
            <div className="col-md-8 mx-auto ">
                <h1 className="text-center">Editar Categoria</h1>
                {(error) ?  <Error mensaje="Todos los campos son obligatorios" /> : null}

                <form
                    className="mt-5"
                    onSubmit={editarCategoria}
                >
                    <div className="form-group">
                        <label>Nombre Categoria</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="nombre" 
                            placeholder="Nombre Categoria"
                            autoFocus="true"
                            ref={descripcionRef}
                            defaultValue={categoria.descripcion}
                        />
                    </div>

                    <div className="form-group">
                        <label>descripcion</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="descripcionlarga"
                            placeholder="Descripcion"
                            ref={descripcionlargaRef}
                            defaultValue={categoria.descripcion_larga}
                        />
                    </div>


                    <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Editar Categoria" />
                </form>
            </div>
        </div>
    )

}

export default withRouter(EditarCategoria);