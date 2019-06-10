import React , {useState} from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';
import ListaLocalidades from './ListaLocalidades';


function AgregarEmpadronamientos({history, listadoDeCategorias , guardarRecargarEmpadronamientos}){

    const [dni, guardarDNI ] = useState('');
    const [fecha_nacimiento, guardarFechaNacimiento ] = useState('');
    const [apellido, guardarApellido ] = useState('');
    const [nombre, guardarNombre ] = useState('');
    const [direccion, guardarDireccion ] = useState('');
    const [localidad, guardarLocalidad ] = useState('');
    const [codigo_postal, guardarCodigoPostal ] = useState('');
    const [mail, guardarMail ] = useState('');
    const [migrado, guardarMigrado ] = useState('');
    const [telefono, guardarTelefono ] = useState(''); 
    const [ref_telefono, guardarRefTelefono ] = useState('');
    const [celular, guardarCelular ] = useState('');
    const [path_foto, guardarPathFoto ] = useState('');
    const [fecha_alta_real, guardarFechaAltaReal ] = useState('');
    const [fecha_empadronamiento, guardarFechaEmpadronamiento ] =('');
    const [categorias, cargarListaCategorias ] = useState({categoria : ''});
    const [error, guardarError] = useState(false);

    const AgregarEmpadronamientos = async e => {
        e.preventDefault();
        
        if(dni==='' || fecha_nacimiento==='' || apellido==='' || nombre==='' || direccion==='' || fecha_empadronamiento ===''){
            guardarError(true);
            return;
        }

        guardarError(false);

        try{
            const resultado = await axios.post('http://localhost:3005/datosbasicos/muestraempadronamiento/', {
                //id_empadronamiento  ,
                dni                 ,
                fecha_nacimiento    ,
                apellido            ,
                nombre              ,
                direccion           ,
                localidad           ,
                codigo_postal       ,
                mail                ,
                migrado             ,
                telefono            ,
                ref_telefono        ,
                celular             ,
                path_foto           ,
                fecha_alta_real     ,
                fecha_empadronamiento,
                categorias          
            })
            
            if(resultado.status === 200){
                console.log(resultado);
                Swal.fire(
                    'Empadronamiento Creado!',
                    'El empadronamiento se creo correctamente',
                    'success'
                  )
                  guardarRecargarEmpadronamientos(true);
                  history.push('./empadronamientos');
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error al intentar crear el empadronamiento'
            })
        }
    }


    const handleChange = e => {
        cargarListaCategorias({
            ...categorias,
            [e.target.name] : e.target.value
        });
    }    

    function validaDNI(dni){
        var ex_regular_dni; 
        ex_regular_dni = /^\d{8}(?:[-\s]\d{4})?$/;
        if(ex_regular_dni.test (dni) === false){
            console.log('ONBLssssUR')
            guardarDNI('');
        }
    }

    return (
        <div className="col-md-8 mx-auto">
            <div className="col-md-8 mx-auto ">
                <h1 className="text-center">Agregar un Socio a Empadronar</h1>

                {(error) ?  <Error mensaje="Todos los campos son obligatorios" /> : null}

                <form
                    className="mt-5"
                    onSubmit={AgregarEmpadronamientos}
                >
                    <div className="form-group">
                        <label>Apellido</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="apellido"
                            placeholder="Apellido"
                            autoFocus
                            onChange={e => guardarApellido(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Nombre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="nombre"
                            placeholder="Nombre"
                            onChange={e => guardarNombre(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>DNI</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="dni" 
                            placeholder="DNI"
                            onBlur={e => validaDNI(e.target.value)}
                            onChange={e => guardarDNI(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Fecha de Nacimiento</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            name="fechanacimiento" 
                            onChange={e => guardarFechaNacimiento(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Categoria</label>
                        <select name      = "categoria" 
                                className = "custom-select" 
                                onChange  = {handleChange}  
                        >
                            {categorias.map(categoria => 
                                (
                                    <option value= {categoria.id_categoria}
                                            key  = {categoria.id_categoria}
                                    >
                                            {categoria.descripcion}
                                    </option>
                                )
                            )} 
                        </select>

                    </div>
{/*
                    <div className="form-group">
                        <label>Categoria</label>
                        <input 
                            type="text" 
                            disabled
                            className="form-control"
                            value="NOTA: TOMAR DATOS DESDE LA BASE" 
                            name="Catgoria"
                            placeholder="Categoria"
                            onChange={e => guardarIdCategoria(e.target.value)}
                        />
                    </div>
*/}
                    <div className="form-group">
                        <label>Dirección</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="direccion"
                            placeholder="Dirección"
                            onChange={e => guardarDireccion(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Localidad</label>
                        <ListaLocalidades 
                            onChange={e => guardarLocalidad(e.target.value)}
                        />
{/*
                        <input 
                            type="text" 
                            className="form-control" 
                            name="localidad"
                            placeholder="Localidad"
                            onChange={e => guardarLocalidad(e.target.value)}
                        />

*/}                    </div>

                    <div className="form-group">
                        <label>Código Postal</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="codigopostal"
                            placeholder="Código Postal"
                            onChange={e => guardarCodigoPostal(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Casilla de Mail</label>
                        <input 
                            type="mail" 
                            className="form-control" 
                            name="mail"
                            placeholder="Mail"
                            onChange={e => guardarMail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Telefono domiciliario</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="telefono"
                            placeholder="Telefono"
                            onChange={e => guardarTelefono(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Referencia del Telefono Domiciliario</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="ref_telefono"
                            placeholder="Referencia"
                            onChange={e => guardarRefTelefono(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Celular</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="celular"
                            placeholder="Celular"
                            onChange={e => guardarCelular(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Fecha de alta como socio</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            name="fechaalta"
                            onChange={e => guardarFechaAltaReal(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Fecha de Empadronamiento</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            name="fechaempadronamiento"
                            onChange={e => guardarFechaEmpadronamiento(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Migrado</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="migrado"
                            disabled
                            value="false"
                            onChange={e => guardarMigrado(e.target.value)}
                        />
                    </div>    

                    <div className="form-group">
                            <label>FOTO</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="foto"
                                disabled
                                value=""
                                placeholder="foto"
                                onChange={e => guardarPathFoto(e.target.value)}
                            />
                        </div>

                    <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Empadronar" />
                </form>
            </div>
        </div>
    )

}

export default withRouter(AgregarEmpadronamientos);