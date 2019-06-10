import React  from 'react';

function EmpadronamientoDetalleLista(props){
    return(
        <div>
            {console.log(props)}
            <h1 className="bg-dark py-2 text-center text-white">{ props.nombre + ' ' + props.apellido  }</h1>

            <div className="text-center container">
                
                <div className="alert alert-success mt-3" role="alert">
                    <h4 className="alert-heading">Datos Personales</h4>
                    <hr />
                    <ul>
                        <li><h5 className="text-white">Piñero 1064 - Jose C Paz</h5></li>
                        <li><h5 className="text-white">02320432648 Contacto de referencia: Noe</h5></li>
                        <li><h5 className="text-white">+541125857872</h5></li>
                    </ul>
                </div>

                <div class="alert alert-danger mt-3" role="alert">
                    <h4 className="alert-heading">Actividades</h4>
                    <hr />
                    <ul className="text-dark">
                        <li><h5 >CADETE</h5></li>
                        <li><h5 >Futbol <i class="fas fa-futbol"> </i></h5> </li>
                        <li><h5 >Basquet <i class="fas fa-basketball-ball"> </i></h5></li>
                    </ul>
                </div>		
            </div>
        </div>
    )
}

export default EmpadronamientoDetalleLista;