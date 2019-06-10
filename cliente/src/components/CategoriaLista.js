import React  from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function CategoriaLista({categoria , guardarRecargarCategorias}){

    const eliminarCategoria = id_categoria => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Categoria eliminada",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText : 'Cancelar'
          }).then( async (result) => {
            if (result.value) {
                try {
                    const url = `http://localhost:3005/administracion/muestracategorias/${id_categoria}`
                    const resultado = await axios.delete(url);
                    
                    if(resultado.status === 204) {
                        Swal.fire({
                            title: 'Error',
                            text: 'La categoria no se puede eliminar ya que existe un socio con la misma.',
                            type: 'error'
                            }
                        );
                    }

                    if(resultado.status === 200) {
                        Swal.fire(
                            'Eliminado!',
                            'La categoria se ha eliminado',
                            'success'
                            );
                        guardarRecargarCategorias(true);
                    }

                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        type: 'error',
                        title: 'Error',
                        text: 'Hubo un error al intentar eliminar la categoria'
                    })
                }
            }
          })
    }

		return (
			<li className="list-group-item d-flex justify-content-between align-items-center">
				<p> 
					{categoria.descripcion}
					<span className="font-weight-bold"> {categoria.descripcion_larga} </span> 
				</p>
				<div>
					<Link
						to={`/categorias/editar/${categoria.id_categoria}`}
						className="btn btn-success mr-2"    
					>
							Editar
					</Link>

					<button type="button" className="btn btn-danger" 
							onClick={() => eliminarCategoria(categoria.id_categoria)}>
							Eliminar &times;
					</button>

				</div>
			</li>
		)
	}

	export default CategoriaLista;