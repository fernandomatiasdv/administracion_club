import React , {Fragment , Component} from 'react';
import Axios from 'axios';

//import EmpadronamientoDetalleLista from './EmpadronamientoDetalleLista';

class EmpadronamientoDetalles extends Component{

    constructor(props){
        super(props);

        this.state = {
          //  isLoading: true,
            empadronamiento : this.props.empadronamiento// ,  -> Objeto: Retorna un registro con varios atributos
           // actividadesporSocio : [] // -> Arreglo: Retorna varios objetos -> Lleva los corchetes??? 
        };
    }
    
    render(){

        const { /*isLoading, */ empadronamiento /*, actividadesporSocio = [] */ } = this.state;

        return (
            <Fragment>
                <h1 className="bg-dark py-2 text-center text-white">{empadronamiento.nombre + ' ' + empadronamiento.apellido}</h1>

{console.log('empadronamiento')}
{console.log(empadronamiento.nombre)}
{console.log('----------------')}

                <div className="text-center container">                    
                    <div className="alert alert-success mt-3" role="alert">
                        <h4 className="alert-heading">Datos Personales</h4>
                        <hr />
                        <ul>
                            <li><h5 className="text-info">{empadronamiento.direccion + ' - ' + empadronamiento.localidad}</h5></li>
                            <li><h5 className="text-info">{empadronamiento.telefono + ' - Contacto de referencia: ' + empadronamiento.ref_telefono}</h5></li>
                            <li><h5 className="text-info">{empadronamiento.celular}</h5></li>
                        </ul>
                    </div>

                    <div className="alert alert-danger mt-3" role="alert">
                        <h4 className="alert-heading">Actividades</h4>
                        <hr />
                        <ul className="text-dark">
                    {/*
                            <li>
                                state.actividadesPorSocio.map(actividad => (
                                    <EmpadronamientosActividades 
                                        key = {actividad.id_empadronamiento}
                                        guardarRecargarEmpadronamientos = {guardarRecargarEmpadronamientos}
                                    />
                                ))
                                 
                            </li>*/ }
                            <li><h5 > {empadronamiento.nombre_categoria}</h5></li>
                            <li><h5 >Futbol <i className="fas fa-futbol"> </i></h5> </li>
                            <li><h5 >Basquet <i className="fas fa-basketball-ball"> </i></h5></li>
                        </ul>
                    </div>		
                </div>

            </Fragment>
        )
    }

    async componentDidMount(){
        /*const actividadesPorSocio = */
        console.log('this.state.empadronamiento.id_empadronamiento: ' + this.state.empadronamiento);
        let url = ( 'http://localhost:3005/datosbasicos/empadronamietoactividadesporsocio/' + this.state.empadronamiento.id_empadronamiento);
        await Axios.get(url)
            .then((response)=>{
                this.setState({
                    actividadesPorSocio : response.data
                });
            })
            .catch((error) =>{
                console.log(error);
            });
    };

}

export default EmpadronamientoDetalles;