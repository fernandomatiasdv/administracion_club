import React , {Fragment} from 'react';
import ActividadLista from './ActividadLista';

function Actividades({actividades , guardarRecargarActividades}){
    return (
        <Fragment>
            <h1 className="text-center">Actividades</h1>
            <ul className="list-group mt-5">
                {actividades.map(actividad => (
                    <ActividadLista 
                        key = {actividad.id_actividad}
                        actividad = {actividad}
                        guardarRecargarActividades = {guardarRecargarActividades}
                    />
                ))}
            </ul>
        </Fragment>
    )
}

export default Actividades;