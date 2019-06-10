import React , {Component, Fragment} from 'react';
import Axios from 'axios';


class ListaLocalidades extends Component{


    constructor(props){
        super(props);
        this.state = {
            listaLocalidades : []
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:3005/localidades')
            .then((response)=>{
                this.setState({
                    listaLocalidades : response.data
                });
            })
            .catch((error) =>{
                console.log(error);
            }
        )
    };

    render(){
        return(
            <Fragment>
                <select name="LOCALIDADES" className="custom-select">
                    {this.state.listaLocalidades.map(localidad => 
                        (
                            <option key={localidad.id} value={localidad.id}>{localidad.localidad}</option>
                        )
                    )} 
                </select>
            </Fragment>
        )
    }
}


export default ListaLocalidades;