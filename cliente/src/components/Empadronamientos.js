import React , {Fragment} from 'react';
import { NavLink} from 'react-router-dom';

import EmpadronamientosLista from './EmpadronamientosLista';

function Empadronamientos({empadronamientos , guardarRecargarEmpadronamientos}){
    return (
        <Fragment>
            <h1 className="text-center">Datos Personales</h1>
            <div className="pb-2">
                <button type="button" class="btn btn-success btn-sm">
                    <NavLink 
                        to='/nuevo-empadronamiento'
                        className="text-white pb-2"
                        activeClassName="active">
                            AGREGAR
                    </NavLink>
                </button>
            </div>
            <table className="table table-hover table-sm">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">DNI</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Actividades</th>
                        <th scope="col">Número de Tarjeta</th>
                    </tr>
                </thead>
                <tbody>

                    {empadronamientos.map(empadronamiento => (
                        <EmpadronamientosLista 
                            key = {empadronamiento.id_empadronamiento}
                            empadronamiento = {empadronamiento}
                            guardarRecargarEmpadronamientos = {guardarRecargarEmpadronamientos}
                        />
                    ))}
                </tbody>
            </table>
               
        </Fragment>
    )
}

export default Empadronamientos;