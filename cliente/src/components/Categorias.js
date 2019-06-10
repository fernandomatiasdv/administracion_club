import React , {Fragment} from 'react';
import CategoriaLista from './CategoriaLista';

function Categorias({categorias , guardarRecargarCategorias}){
    return (
        <Fragment>
            <h1 className="text-center">Categorias</h1>
            <ul className="list-group mt-5">
                {categorias.map(categoria => (
                    <CategoriaLista 
                        key = {categoria.id_categoria}
                        categoria = {categoria}
                        guardarRecargarCategorias = {guardarRecargarCategorias}
                    />
                ))}
            </ul>
        </Fragment>
    )
}

export default Categorias;