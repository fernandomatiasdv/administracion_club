import React , {useState , useRef} from 'react';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom';

function EditarEmpadronamientos({history, empadronamiento, guardarRecargarEmpadronamientos}){
    
    const dniRef = useRef('');
    const fechaNacimientoRef = useRef('');
    const apellidoRef = useRef('');
    const nombreRef = useRef('');
    const direccionRef = useRef('');
    const localidadRef = useRef('');
    const codigoPostalRef = useRef('');
    const mailRef = useRef('');
    const migradoRef = useRef('');
    const telefonoRef = useRef('');
    const ref_telefonoRef = useRef('');
    const celularRef = useRef('');
    const pathFotoRef = useRef('');
    const fechaAltaRealRef = useRef('');
    const fechaEmpadronamientoRef = useRef('');
    const idCategoriaRef = useRef('');      
    const [error, guardarError] = useState(false);
    
    const editarActividad = async e => {
        e.preventDefault();

        const newdni                 = dniRef.current.value,
              newfecha_nacimiento    = fechaNacimientoRef.current.value,
              newapellido            = apellidoRef.current.value,
              newnombre              = nombreRef.current.value,
              newdireccion           = direccionRef.current.value,
              newlocalidad           = localidadRef.current.value,
              newcodigo_postal       = codigoPostalRef.current.value,
              newmail                = mailRef.current.value,
              newmigrado             = migradoRef.current.value,
              newtelefono            = telefonoRef.current.value,
              newref_telefono        = ref_telefonoRef.current.value,
              newcelular             = celularRef.current.value,
              newpath_foto           = pathFotoRef.current.value,
              newfecha_alta_real     = fechaAltaRealRef.current.value,
              newfecha_empadronamiento= fechaEmpadronamientoRef.current.value,
              newid_categoria        = idCategoriaRef.current.value;

        if(newdni === ''     || newfecha_nacimiento === '' || newapellido === ''             || 
           newnombre  === '' ||newfecha_alta_real   === '' || newfecha_empadronamiento === '' 
          ){
            guardarError(true);
            return;
        }

        guardarError(false);

        const editarEmpadronamientos = {
            dni                 : newdni,
            fecha_nacimiento    : newfecha_nacimiento,
            apellido            : newapellido,
            nombre              : newnombre,
            direccion           : newdireccion,
            localidad           : newlocalidad,
            codigo_postal       : newcodigo_postal,
            mail                : newmail,
            migrado             : newmigrado,
            telefono            : newtelefono,
            ref_telefono        : newref_telefono,
            celular             : newcelular,
            path_foto           : newpath_foto,
            fecha_alta_real     : newfecha_alta_real,
            id_categoria        : newid_categoria,
            fecha_empadronamiento: newfecha_empadronamiento
        }

        const url = `http://localhost:3005/datosbasicos/muestraempadronamiento/${empadronamiento.id_empadronamiento}`;
        try {
            const resultado = await axios.put(url, editarEmpadronamientos);
            if(resultado.status === 200){
                Swal.fire(
                    'Empadronamiento Modificado!',
                    'Los datos se modificaron correctamente',
                    'success'
                  )
                  guardarRecargarEmpadronamientos(true);
                  history.push('/empadronamiento');
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error al intentar modificar al empadronado'
            })
        }
    }
    
    return (
        <div className="col-md-8 mx-auto">
            <div className="col-md-8 mx-auto ">
                <h1 className="text-center">Editar los datos del empadronado</h1>
                {(error) ?  <Error mensaje="Todos los campos son obligatorios" /> : null}

                <form
                    className="mt-5"
                    onSubmit={editarActividad}
                >

                    <div className="form-group">
                        <label>Apellido</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="apellido"
                            placeholder="Apellido"
                            autoFocus
                            ref={apellidoRef}
                            defaultValue={empadronamiento.apellido}
                        />
                    </div>

                    <div className="form-group">
                        <label>Nombre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="nombre"
                            placeholder="Nombre"
                            ref={nombreRef}
                            defaultValue={empadronamiento.nombre}
                        />
                    </div>

                    <div className="form-group">
                        <label>DNI</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="dni" 
                            placeholder="DNI"
                            ref={dniRef}
                            defaultValue={empadronamiento.dni}                        />
                    </div>

                    <div className="form-group">
                        <label>Fecha de Nacimiento</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            name="fechanacimiento" 
                            ref={fechaNacimientoRef}
                            defaultValue={empadronamiento.fechaNacimiento}                        />
                    </div>

                    <div className="form-group">
                        <label>Categoria</label>
                        <input 
                            type="text" 
                            disabled
                            className="form-control"
                            value="NOTA: TOMAR DATOS DESDE LA BASE" 
                            name="Catgoria"
                            placeholder="Categoria"
                            ref={idCategoriaRef}
                            defaultValue={empadronamiento.id_categoria}                        />
                    </div>

                    <div className="form-group">
                        <label>Dirección</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="direccion"
                            placeholder="Dirección"
                            ref={direccionRef}
                            defaultValue={empadronamiento.direccion}                        />
                    </div>

                    <div className="form-group">
                        <label>Localidad</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="localidad"
                            placeholder="Localidad"
                            ref={localidadRef}
                            defaultValue={empadronamiento.localidad}                        />
                    </div>

                    <div className="form-group">
                        <label>Código Postal</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="codigopostal"
                            placeholder="Código Postal"
                            ref={codigoPostalRef}
                            defaultValue={empadronamiento.codigo_postal}                        />
                    </div>

                    <div className="form-group">
                        <label>Casilla de Mail</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="mail"
                            placeholder="Mail"
                            ref={mailRef}
                            defaultValue={empadronamiento.mail}                        />
                    </div>

                    <div className="form-group">
                        <label>Telefono domiciliario</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="telefono"
                            placeholder="Telefono"
                            ref={telefonoRef}
                            defaultValue={empadronamiento.telefono}                        />
                    </div>

                    <div className="form-group">
                        <label>Referencia del Telefono Domiciliario</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="ref_telefono"
                            placeholder="Referencia"
                            ref={ref_telefonoRef}
                            defaultValue={empadronamiento.ref_telefonoRef}                        />
                    </div>

                    <div className="form-group">
                        <label>Celular</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="celular"
                            placeholder="Celular"
                            ref={celularRef}
                            defaultValue={empadronamiento.celular}                        />
                    </div>

                    <div className="form-group">
                        <label>Fecha de alta como socio</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            name="fechaalta"
                            ref={fechaAltaRealRef}
                            defaultValue={empadronamiento.fechaAltaReal}                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Fecha de Empadronamiento</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            name="fechaempadronamiento"
                            ref={fechaEmpadronamientoRef}
                            defaultValue={empadronamiento.fechaEmpadronamiento}                        />
                    </div>

                    <div className="form-group">
                        <label>Migrado</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="migrado"
                            disabled
                            value="false"
                            ref={migradoRef}
                            defaultValue={empadronamiento.migrado}                        />
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
                                ref={pathFotoRef}
                                defaultValue={empadronamiento.pathFoto}                            />
                        </div>

                    <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Editar Precio" />
                </form>
            </div>
        </div>
    )

}

export default withRouter(EditarEmpadronamientos);